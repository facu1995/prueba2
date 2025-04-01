import axios, { AxiosResponse } from "axios";
import { NextFunction, Request } from "express";
import { properties } from "../../config/constants";

export const BaseService = async (req: Request, next: NextFunction) => {
  const { authorization } = req.headers || "";
  const { query, body } = req;

  try {
    const fullPath = properties.api.endpointTest + req.path;

    const config = {
      method: req.method, // Usar el método HTTP dinámico (GET, POST, PUT, DELETE)
      url: fullPath, // URL completa con los parámetros de la ruta
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        Authorization: authorization,
        src: "BaseService", // Agregar un header con el nombre del servicio para rastrear la solicitud
      },
      params: query, // Agregar los parámetros de consulta (query string)
      data: body, // Agregar el cuerpo de la solicitud (para POST, PUT, etc.)
    };

    const response = await axios.request(config);
    return response;
  } catch (e) {
    req.headers.src = "BaseService"; // Agregar un header con el nombre del servicio para rastrear el error
    return next(e as unknown as AxiosResponse);
  }
};
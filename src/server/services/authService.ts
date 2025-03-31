import axios, { AxiosResponse } from "axios"
import { NextFunction, Request } from "express"
import { properties } from "../config/constants"

const authenticateUser = async (
  req: Request,
  next: NextFunction
): Promise<AxiosResponse | void> => {
  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: properties.apiAuthUrl,
    headers: {
      Authorization: properties.basic
    }
  }
  try {
    const response = await axios.request(config)
    return response
  } catch (e) {
    req.headers.src = "AuthService" ///add a header with the service name to track the error
    return next(e as unknown as AxiosResponse)
  }
}

export default authenticateUser

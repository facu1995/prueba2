import { test1Service } from "../services/test1Service";
import { Request, Response, NextFunction } from "express";
import logger from "../loaders/logger";

export const handleRequest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await test1Service(req, next);
    if (response && !res.headersSent) {
      res.status(res.statusCode).json(response.data);
      logger.info(
        `test1Controller - test1Service with method ${req.method}, ` +
          res.statusCode +
          ` from client ${req.headers.clientId || "unknown"}`
      );
    }
  } catch (error) {
    next(error);
  }
};
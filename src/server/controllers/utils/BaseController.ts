import { BaseService } from "../../services/utils/BaseService";
import { Request, Response, NextFunction } from "express";
import logger from "../../loaders/logger";

export const handleRequest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await BaseService(req, next);
    if (response && !res.headersSent) {
      res.status(res.statusCode).json(response.data);
      logger.info(
        `BaseController - BaseService with method ${req.method}, ` +
          res.statusCode +
          ` from client ${req.headers.clientId || "unknown"}`
      );
    }
  } catch (error) {
    next(error);
  }
};
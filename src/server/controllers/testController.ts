import { testService } from "../services/testService"
import { Request, Response, NextFunction } from "express"
import logger from "../loaders/logger"

const basicGet = (_req: Request, res: Response) => {
    res.json("test-route")
}

const testFetch = async (req: Request, res: Response, next: NextFunction) => {
  const response = await testService(req, next)
  if (response && !res.headersSent) {
    res.status(res.statusCode).json(response.data)
    ////./src/client/config/API.ts --> clientId header
    logger.info(`testController - testService with method ${req.method}, ` + res.statusCode + `from client ${req.headers.clientId || 'unknown'}`)
  } else {
    return
  }
}

export { basicGet, testFetch }

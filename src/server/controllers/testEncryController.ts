import { testServiceSearch } from "../services/testEncryService"
import { Request, Response, NextFunction } from "express"
import logger from "../loaders/logger"

const basicGet = (_req: Request, res: Response) => {
    res.json("testEncry-route")
}

const testEncryFetch = async (req: Request, res: Response, next: NextFunction) => {
  const response = await testServiceSearch(req, next)
  if (response && !res.headersSent) {
    console.log(response.data);
    res.status(res.statusCode).json(response.data)
    ////./src/client/config/API.ts --> clientId header
    logger.info(`testEncryController - testEncryService with method ${req.method}, ` + res.statusCode + ` from client ${req.headers.clientId || 'unknown'}`)
  } else {
    return
  }
}

export { basicGet, testEncryFetch }

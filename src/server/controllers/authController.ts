import authenticateUser from "../services/authService"
import { Response, Request, NextFunction } from "express"

const makeLogin = async (req: Request, res: Response, next: NextFunction) => {
  const session = await authenticateUser(req, next)
  if (session) {
    res.status(200).json(session.data)
  } else {
    return
  }
}

export { makeLogin }

import authenticateUser from "../services/authService"
import { Response, Request, NextFunction } from "express"

const makeLogin = async (req: Request, res: Response, next: NextFunction) => {
  const user = {
    user: 'username',
    password: 'password'
  } 
  const session = await authenticateUser(user, req, next)
  if(session){
    res.status(200).json(session.data)
  }else {
    return 
  }
}


export { makeLogin }


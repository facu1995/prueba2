import * as handleAuth from "../../../controllers/authController"
import { Application, Router } from "express"

const authRouter = Router()

authRouter.post("/", handleAuth.makeLogin as unknown as Application)

authRouter.get("/", (_req, res, _next) => {
    res.status(200).json("login-route")
  })


export default authRouter

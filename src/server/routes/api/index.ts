import { Router, Request, Response } from "express"
import authRouter from "./auth"
//import { authorizationDecrypter } from "../../middlewares/authorizationDecrypter"
//ROUTES IMPORTS
import test1Router from "./test1"
import loginRouter from "./login"

const apiRouter = Router()

apiRouter.get("/hello", (_req: Request, res: Response) => {
  res.send("Hello world!")
})

//ADD ROUTES
apiRouter.use('/test1', test1Router)
apiRouter.use("/login", loginRouter)
apiRouter.use('/auth', authRouter)

///ROUTE WITH DECRYPTION
//apiRouter.use('/needsToken', authorizationDecrypter, someRoute)

export default apiRouter

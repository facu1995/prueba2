import { Router, Request, Response } from "express"
import authRouter from "./auth"
//import { authorizationDecrypter } from "../../middlewares/authorizationDecrypter"
//ROUTES IMPORTS

const apiRouter = Router()

apiRouter.get("/", (_req: Request, res: Response) => {
  res.send("Hello world!")
})

//ADD ROUTES
apiRouter.use('/auth', authRouter)

///ROUTE WITH DECRYPTION
//apiRouter.use('/needsToken', authorizationDecrypter, someRoute)

export default apiRouter

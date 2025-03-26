import { Router, Request, Response } from "express"
import authRouter from "./auth"
import { authorizationDecrypter } from "../../middlewares/authorizationDecrypter"
//ROUTES IMPORTS
import testEncryRouter from "./testEncry"
import testRouter from "./test"

const apiRouter = Router()

apiRouter.get("/hello", (_req: Request, res: Response) => {
  res.send("Hello world!")
})

//ADD ROUTES
apiRouter.use('/testEncry', authorizationDecrypter, testEncryRouter)
apiRouter.use('/test', testRouter)
apiRouter.use('/auth', authRouter)

///ROUTE WITH DECRYPTION
//apiRouter.use('/needsToken', authorizationDecrypter, someRoute)

export default apiRouter

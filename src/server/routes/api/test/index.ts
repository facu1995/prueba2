import { Router } from "express"
import * as testController from "../../../controllers/testController"

const testRouter = Router()


testRouter.get("/search", testController.testFetch)

testRouter.post("/", testController.testFetch)



export default testRouter

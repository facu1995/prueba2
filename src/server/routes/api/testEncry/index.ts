import { Router } from "express"
import * as testEncryController from "../../../controllers/testEncryController"

const testEncryRouter = Router()

testEncryRouter.get("/", testEncryController.testEncryFetch)

testEncryRouter.post("/", testEncryController.testEncryFetch)

testEncryRouter.put("/", testEncryController.testEncryFetch)

testEncryRouter.delete("/", testEncryController.testEncryFetch)

testEncryRouter.get("/search", testEncryController.testEncryFetch)

export default testEncryRouter

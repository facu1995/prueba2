import { Router } from "express"
import { properties } from "../../../config/constants"

const loginRouter = Router()

loginRouter.post("/", (_req, res) => {
  const { username, password } = _req.body
  const validUser = properties.user
  const validPass = properties.pass

  setTimeout(() => {
    if (!username || !password) {
      return res.status(400).json()
    }

    if (username === validUser && password === validPass) {
      return res.status(200).json()
    } else {
      return res.status(401).json()
    }
  }, 900)
})

export default loginRouter

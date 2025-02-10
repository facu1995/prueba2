import { createCipheriv, createDecipheriv } from "crypto"
import { NextFunction, Request, Response } from "express"
import { config } from "../config"
import logger from "../loaders/logger"

export function encrypt(text: string) {
  const cipher = createCipheriv(
    "aes-256-cbc",
    Buffer.from(config.app.secret, "hex"),
    Buffer.from(config.app.iv, "base64")
  )
  let encrypted = cipher.update(text)
  encrypted = Buffer.concat([encrypted, cipher.final()])
  return encrypted.toString("hex")
}

export function decrypt(text: string) {
  if (!text) {
    throw Error("Hubo un error en el método de desencriptación con el input: " + text)
  }

  const encryptedText = Buffer.from(text, "hex")
  const decipher = createDecipheriv(
    "aes-256-cbc",
    Buffer.from(config.app.secret, "hex"),
    Buffer.from(config.app.iv, "base64")
  )

  let decrypted = decipher.update(encryptedText)
  decrypted = Buffer.concat([decrypted, decipher.final()])
  return decrypted.toString()
}

export const authorizationDecrypter = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers

  if (!authorization) {
    logger.error("401 - Authorization header is missing - " + req.url)
    return res.status(401).json({ error: "Authorization header is missing" })
  }

  try {
    const decrypted = decrypt(authorization)
    req.headers.authorization = `Bearer ${decrypted}`
    next()
  } catch (error) {
    logger.error("500 - Error on auth middleware decryption with input: " + authorization)
    return res
      .status(500)
      .json({ error: "Unable to decrypt authorization header. Error in input: " + authorization })
  }
}

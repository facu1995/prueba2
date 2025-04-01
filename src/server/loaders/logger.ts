import { LoggingWinston } from "@google-cloud/logging-winston"
import { properties } from "../config/constants"
import * as winston from "winston"

const logger = winston.createLogger({
  level: properties.logs.level,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf((info: any) => `${info.timestamp} ${info.level} ${info.message}`)
  ),
  transports: [new winston.transports.Console({ level: "debug" })]
})

if (process.env.NODE_ENV === "production") {
  logger.add(new LoggingWinston())
}

export default logger

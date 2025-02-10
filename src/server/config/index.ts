import * as constants from "./constants"

export const config = {
  app: {
    version: constants.VERSION,
    port: constants.PORT,
    publicUrl: constants.PUBLIC_URL,
    stage: constants.STAGE,
    secret: constants.CRYPTO_SECRET,
    iv: constants.CRYPTO_IV
  },
  sentry: {
    dsn: constants.SENTRY_DSN,
    release: constants.VERSION,
    environment: constants.STAGE
  },
  logs: {
    level: process.env.LOG_LEVEL || "silly"
  }
}

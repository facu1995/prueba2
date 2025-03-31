import { config } from "dotenv"

config({})

export const VERSION = process.env.VITE_VERSION || "0.0.0"
export const PORT = process.env.VITE_SERVER_PORT || 8080
export const PUBLIC_URL = process.env.VITE_PUBLIC_URL || ""
export const SENTRY_DSN = process.env.VITE_SENTRY_DSN || ""
export const STAGE = process.env.VITE_STAGE || "testing"
const BASIC = process.env.VITE_BASIC_TOKEN || "Basic emV1czppbmZvc2lz"
const USER =process.env.VITE_USER || "zeus"
const PASS = process.env.VITE_PASS || "1234"
//GENERATE NEW VALUES FOR NEW PROJECT
export const CRYPTO_SECRET = process.env.VITE_CRYPTO_SECRET
  ? process.env.VITE_CRYPTO_SECRET
  : "22b1076fc42aee8ff4b1dbbc7cdb4f3b39d18232b520deb6fd6517ab60f9003b"
//GENERATE NEW VALUES FOR NEW PROJECT
export const CRYPTO_IV = process.env.VITE_CRYPTO_IV
  ? process.env.VITE_CRYPTO_IV
  : "ndi01tB/I4gYqTXfga+RLw=="

  const API_AUTH_URL = process.env.VITE_AUTH_URL || "https://auth-test.infosis.tech/oauth/token?grant_type=client_credentials"
const API_MESSAGE_USERS =
  process.env.VITE_ZEUS_GATEWAY && process.env.VITE_ZEUS_TENANTS
    ? `${process.env.VITE_ZEUS_GATEWAY}${process.env.VITE_ZEUS_TENANTS}`
    : ""
    export const properties = {
      port: PORT,
      publicUrl: PUBLIC_URL,
      apiAuthUrl: API_AUTH_URL,
      apiMessageUsers: API_MESSAGE_USERS,
      user: USER,
      pass: PASS,
      basic: BASIC,
      sentry: {
        dsn: SENTRY_DSN,
        release: VERSION,
        environment: STAGE
      },
      logs: {
        level: process.env.LOG_LEVEL || "silly"
      }
    }
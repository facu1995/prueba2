import * as Sentry from "@sentry/node"
import * as Tracing from "@sentry/tracing"
import { Application } from "express"
import logger from "./logger"
import { properties } from "../config/constants"

export const load = ({ expressApp }: { expressApp: Application }) => {
  Sentry.init({
    ...properties.sentry,
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Tracing.Integrations.Express({ app: expressApp })
    ],
    tracesSampleRate: 0.1
  })

  expressApp.use(Sentry.Handlers.requestHandler())
  expressApp.use(Sentry.Handlers.tracingHandler())

  logger.info("🧉️ Sentry loaded")
}

import express from "express"
import clientRouter from "./clientRouter.js"
import usersRouter from "./api/v1/usersRouter.js"
import testRouter from "./api/v1/testRouter.js"

const rootRouter = new express.Router()

rootRouter.use("/api/v1/users", usersRouter)

if (process.env.NODE_ENV == "e2e" || process.env.NODE_ENV == "test") {
  rootRouter.use("/api/v1/test", testRouter)
}

rootRouter.use("/", clientRouter)

export default rootRouter

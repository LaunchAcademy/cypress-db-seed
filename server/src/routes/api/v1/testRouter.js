import { Router } from "express"
import _ from "lodash"

import connection from "../../../boot/model.cjs"
import * as models from "../../../models/index.js"
import Factory from "../../../db/factories/Factory.js"

const testRouter = Router()

testRouter.post("/:entity", async (req, res) => {
  const { entity } = req.params
  const attributes = req.body

  const result = await models[_.upperFirst(entity)]
    .query()
    .insertGraph(Factory.build(entity, attributes))
  await connection.client.pool.release()

  return res.status(200).json(result)
})

testRouter.delete("/:entity", async (req, res) => {
  const { entity } = req.params
  const { conditions } = req.body

  const result = await models[_.upperFirst(entity)].query().delete().where(conditions)
  await connection.client.pool.release()
  return res.status(200).json(result)
})

export default testRouter

import * as models from "./factories.js"
import _ from "lodash"

class Factory {
  static build(entity, attributes) {
    return models[_.upperFirst(entity)].create(attributes)
  }
}

export default Factory

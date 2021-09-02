import { HandlerName } from '../enums'

import { findByKeyHandler } from './findByKey.handler'
import { removeHandler } from './remove.handler'
import { clearHandler } from './clear.handler'
import { setHandler } from './set.handler'

export default {
  get(target: any, prop: string) {
    switch (prop) {
      case HandlerName.LENGTH:
        return target.size
      case HandlerName.FIND_BY_KEY:
        return findByKeyHandler.bind(target)
      case HandlerName.SET:
        return setHandler.bind(target)
      case HandlerName.REMOVE:
        return removeHandler.bind(target)
      case HandlerName.CLEAR:
        return clearHandler.bind(target)
      default:
        throw new TypeError(`(intermediate value) .${prop} is not a function`)
    }
  },
}

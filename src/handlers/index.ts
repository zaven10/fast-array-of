import { findByKeyHandler } from './findByKey.handler'
import { removeHandler } from './remove.handler'
import { clearHandler } from './clear.handler'
import { setHandler } from './set.handler'
import { entriesHandler } from './entries.handler'
import { valuesHandler } from './values.handler'
import { keysHandler } from './keys.handler'

import { HandlerName } from '../enums'

import { IConfig } from './../interfaces/IConfig.interface'

export default {
  getReflector: (config: IConfig) => ({
    get(target: any, prop: HandlerName) {
      const _this: any = {
        target,
        config,
      }

      switch (prop) {
        case HandlerName.LENGTH:
          return _this.target.size
        case HandlerName.FIND_BY_KEY:
          return findByKeyHandler.bind(_this)
        case HandlerName.SET:
          return setHandler.bind(_this)
        case HandlerName.REMOVE:
          return removeHandler.bind(_this)
        case HandlerName.CLEAR:
          return clearHandler.bind(_this)
        case HandlerName.ENTRIES:
          return entriesHandler.bind(_this)
        case HandlerName.VALUES:
          return valuesHandler.bind(_this)
        case HandlerName.KEYS:
          return keysHandler.bind(_this)
        default:
          throw new TypeError(`(intermediate value) .${prop} is not a function`)
      }
    },
  }),
}

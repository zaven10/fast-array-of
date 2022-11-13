import { IArrayOf, IConfig } from '../interfaces'

import { encrypt } from './encrypt'

import handlers from '../handlers'

type TKey = null | string | number | IConfig
type TMapKey = string | number

export function arrayOf<T>(key: TKey, ...args: T[]): IArrayOf<T> {
  const index: Map<TMapKey, T> = new Map<TMapKey, T>()

  let config: IConfig = key as IConfig

  try {
    Reflect.has(key as IConfig, 'key')
  } catch (e) {
    config = {
      key,
      secure: false,
    } as IConfig
  }

  Array.prototype.forEach.call(args, (item: any, idx: number) => {
    if (config.key && !item?.[config.key]) {
      throw new TypeError(`(intermediate value) .${key} does not exists`)
    }

    if (!config.secure) {
      return index.set(item?.[key as TMapKey] || idx, item)
    }

    const [hashedKey, encryptedValue] = encrypt([
      item[config.key as TMapKey] || idx,
      item,
    ])

    index.set(hashedKey, encryptedValue)
  })

  return new Proxy(index, handlers.getReflector(config)) as IArrayOf<T>
}

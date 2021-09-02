import handlers from '../handlers'

import { IArrayOf } from '../interfaces'

export function arrayOf<T>(key?: any, ...args: T[]): IArrayOf<T> {
  const index: Map<any, T> = new Map<any, T>()

  Array.prototype.forEach.call(args, (item: any, idx: number) => {
    if (key && !item?.[key]) {
      throw new TypeError(`(intermediate value) .${key} does not exists`)
    }

    index.set(item?.[key] || idx, item)
  })

  return new Proxy(index, handlers) as IArrayOf<T>
}

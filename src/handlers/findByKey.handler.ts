import { decrypt } from '../methods/decrypt'
import { getHashedKey } from '../methods/getHashedKey'

export function findByKeyHandler<T>(this: any, key: any): T {
  if (!this.config.secure) {
    return this.target.get(key) || null
  }

  key = getHashedKey(key)

  let value: any = this.target.get(key) || null

  return decrypt(value)
}

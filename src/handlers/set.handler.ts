import { encrypt } from '../methods/encrypt'

export function setHandler<T>(this: any, key: any, value: T): T {
  if (!this.config.secure) {
    this.target.set(key, value)

    return value
  }

  const [hashedKey, encryptedValue] = encrypt([key, value])

  this.target.set(hashedKey, encryptedValue)

  return value
}

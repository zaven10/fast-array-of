import AES from 'crypto-js/aes'

import { getHashedKey } from './getHashedKey'

export function encrypt([key, value]: any[]): any[] {
  if (!Boolean(process.env.SECRET_KEY)) {
    throw new Error(`<secret key> is not defined in environment!`)
  }

  const { ciphertext, salt } = AES.encrypt(
    JSON.stringify(value),
    process.env.SECRET_KEY as string,
  )

  const encryptedValue = `${ciphertext.toString()}@${salt.toString()}`

  return [getHashedKey(key), encryptedValue]
}

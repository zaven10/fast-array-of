import { enc, lib } from 'crypto-js'

import AES from 'crypto-js/aes'

export function decrypt(value: any) {
  if (!Boolean(process.env.SECRET_KEY)) {
    return value
  }

  const [encrypted, salt] = value.split('@')

  const decryptedValue = AES.decrypt(
    {
      ciphertext: enc.Hex.parse(encrypted),
      salt: enc.Hex.parse(salt),
    } as lib.CipherParams,
    process.env.SECRET_KEY as string,
  ).toString(enc.Utf8)

  return JSON.parse(decryptedValue)
}

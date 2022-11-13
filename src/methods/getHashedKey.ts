import SHA256 from 'crypto-js/sha256'

export function getHashedKey(key: any): string {
  return SHA256(key.toString()).toString()
}

import { decrypt } from '../methods/decrypt'

export function entriesHandler<T>(this: any, isRaw?: boolean): any[] {
  let entries = [...this.target.entries()]

  if (!isRaw && this.config.secure) {
    return entries.map(([key, value]: string[]) => [key, decrypt(value) as T])
  }

  return entries
}

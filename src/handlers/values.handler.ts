import { decrypt } from '../methods/decrypt'

export function valuesHandler<T>(this: any, isRaw?: boolean): (T | string)[] {
  let values: any[] = [...this.target.values()]

  if (!isRaw && this.config.secure) {
    return values.map(decrypt) as T[]
  }

  return values
}

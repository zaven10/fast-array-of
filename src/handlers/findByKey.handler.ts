export function findByKeyHandler<T>(this: any, key: any): T {
  return this.get(key) || null
}

export function removeHandler<T>(this: any, key: any): boolean {
  return this.delete(key)
}

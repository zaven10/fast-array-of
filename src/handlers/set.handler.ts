export function setHandler<T>(this: any, key: any, value: T): T {
  this.set(key, value)

  return value
}

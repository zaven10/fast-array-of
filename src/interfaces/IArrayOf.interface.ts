export interface IArrayOf<T> {
  length: number
  clear(): void
  set(key: any, value: T): T
  remove(key: any): boolean
  findByKey(key: any): T
}

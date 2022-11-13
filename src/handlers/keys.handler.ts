export function keysHandler(this: any): (string | number)[] {
  return [...this.target.keys()]
}

export type NumberToNumberFunc = (arg0: number) => number
export const add = (a: number): NumberToNumberFunc => {
  const _add: NumberToNumberFunc = (b: number): number => {
    return a + b
  }
  return _add
}
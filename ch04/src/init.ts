import { call } from "ramda"

export const init = (callback: () => void): void => {
  console.log('default initialization finished.')
  callback()
  console.log('all initalization finished.')
}
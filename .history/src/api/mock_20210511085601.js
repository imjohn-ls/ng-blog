import { httpPost } from './http'
export const test = param => {
  return httpPost('addUser', param)
}

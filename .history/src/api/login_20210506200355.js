import { httpPost } from './http'
export const getLogin = param => {
  return httpPost('add', param)
}

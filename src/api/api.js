import { httpGet, httpPost } from './http'
export const getList = param => {
  return httpGet('p1', param)
}
export const postList = param => {
  return httpPost('info', param)
}

import { httpPost } from './http'
export const perTest = param => {
  return httpPost('test', param)
}

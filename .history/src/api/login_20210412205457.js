import { httpPost } from './http'
export const getLogin = param => {
  return httpPost('student/login', param)
}

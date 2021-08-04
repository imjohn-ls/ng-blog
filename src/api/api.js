import { httpPost } from './http'
/* 注册 */
export const perUserRegister = param => {
  return httpPost('addUser', param)
}
/* 登录 */
export const perUserLogin = param => {
  return httpPost('userLogin', param)
}
/* 退出登录 */
export const loginOut = param => {
  return httpPost('loginOut', param)
}
/* 查询文章 */
export const getArticle = param => {
  return httpPost('getArticle', param)
}
/* 写入文章 */
export const writeAticle = param => {
  return httpPost('writeAticle', param)
}
/* 打印测试接口 */
export const perPrint = param => {
  return httpPost('proList', param)
}

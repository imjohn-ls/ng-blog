import { httpPost } from './http'
/* 登录 */
export const perUserLogin = param => {
  return httpPost('userLogin', param)
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

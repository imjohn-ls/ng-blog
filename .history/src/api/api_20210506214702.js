import { httpPost } from './http'
/* 查询所有学生 */
export const perQueryStu = param => {
  return httpPost('getUser', param)
}
/* 新增学生 */
export const perAddStu = param => {
  return httpPost('student/addStu', param)
}
/* 删除学生 */
export const perDelStu = param => {
  return httpPost('student/delStu', param)
}
/* 修改学生信息 */
export const perEditStu = param => {
  return httpPost('student/updateStu', param)
}

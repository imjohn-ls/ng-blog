/* 是否为空 */
export const isNullOrEmpty = function(val) {
  if (val == null || val == '' || typeof val === undefined) {
    return true
  } else {
    return false
  }
}
/* 时间戳时间格式化
*default  2020-12-17 16:00:32
*yyyy-mm-dd  2020-12-17
*yyyy-mm  2020-12
*hh:mm   16:01
*yyyy 2020
*mm-dd  12:17
*hh:mm  16:02
*ymd  2020年12月17日
*
*/
export const timeFormat = (value, format) => {
  const date = new Date(value)
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  const h = date.getHours()
  const min = date.getMinutes()
  const s = date.getSeconds()
  let result = ''
  if (format == undefined) {
    result = `${y}-${m < 10 ? '0' + m : m}-${d < 10 ? '0' + d : d} ${h < 10 ? '0' + h : h}:${min < 10 ? '0' + min : min}:${s < 10 ? '0' + s : s}`
  }
  if (format == 'yyyy-mm-dd') {
    result = `${y}-${m < 10 ? '0' + m : m}-${d < 10 ? '0' + d : d}`
  }
  if (format == 'yyyy-mm') {
    result = `${y}-${m < 10 ? '0' + m : m}`
  }
  if (format == 'mm-dd') {
    result = ` ${m < 10 ? '0' + m : m}:${d < 10 ? '0' + d : d}`
  }
  if (format == 'hh:mm') {
    result = ` ${h < 10 ? '0' + h : h}:${min < 10 ? '0' + min : min}`
  }
  if (format == 'yyyy') {
    result = `${y}`
  }
  if (format == 'ymd') {
    result = `${y}年${m}月${d}日`
  }
  return result
}
/* 测试 */
export const isTest = function(val) {
  return val.slice(2)
}

import request from '@/plugin/axios'
import qs from 'qs'
let commonData = {
  _SessionId: '' // 会话Id
}
export function httpGet(url, params = {}) {
  commonData = {
    ...commonData
  }
  return request({
    url,
    method: 'get',
    params: {
      ...params
    }
  })
}

export function httpPost (url, data = {}) {
  return request({
    url,
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    data: {
      ...data,
      ...commonData
    },
    transformRequest: [
      function(data) {
        return JSON.stringify(data)
      }
    ]
  })
}

export function httpForm(url, data = {}) {
  let obj = {}
  if (data.transCode) {
    obj = {
      transCode: data.transCode
    }
  }
  // 添加云盾验证标识字段
  if (sessionStorage.yunSecurityType) {
    // data.securityType = sessionStorage.yunSecurityType
    data.SafeWayType = sessionStorage.yunSecurityType
  } else {
    delete data.SafeWayType
  }
  // 处理公共分页参数 2020年11月25日15:56:22
  data._PageSize = data.pagesize || data.pageSize
  data._PageNo = data.currentPage
  data._MCHTimestamp = new Date().getTime()
  // 用户序列号统一送 2020年11月25日18:07:11
  // if (sessionStorage.userInfo) {
  //   data.userSeq = JSON.parse(sessionStorage.userInfo).userSeq
  // }
  return request({
    url,
    method: 'post',
    data: {
      ...data,
      ...commonData,
      ...obj
    },
    transformRequest: [
      function(data) {
        data = qs.stringify(data)
        return data
      }
    ]
  })
}

export function download(url, data = {}) {
  return request({
    url,
    method: 'post',
    responseType: 'blob',
    data: {
      ...commonData,
      ...data
    },
    transformRequest: [
      function(data) {
        data = qs.stringify(data)
        return data
      }
    ]
  })
}
export function getDownload(url, params) {
  commonData = {
    ...commonData,
    ...params,
    IFP_SID: sessionStorage.getItem('IFP_SESSION_ID') ? sessionStorage.getItem('IFP_SESSION_ID') : ''
  }
  return request({
    url,
    method: 'get',
    responseType: 'blob',
    params: {
      ...params,
      ...commonData
    }
    /* transformRequest: [function (data) {
          data = qs.stringify(data)
          return data
        }] */
  })
}

import axios from 'axios'

// 创建一个 axios 实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 1000 * 60 * 3 // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // 发送失败
    console.log(error)
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    if (response.config.responseType === 'blob') {
      if (!response.config.url.includes('getImage3.do')) {
        downloadFile(response)
      }
      return response
    }
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response.data.body

    return dataAxios || response.data
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误'
          break
        case 401:
          error.message = '未授权，请登录'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器内部错误'
          break
        case 501:
          error.message = '服务未实现'
          break
        case 502:
          error.message = '网关错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网关超时'
          break
        case 505:
          error.message = 'HTTP版本不受支持'
          break
        default:
          break
      }
    }
  }
)

function downloadFile(res) {
  if (!res.data) {
    return
  }

  let blob = new Blob([res.receiptFile], {
    type: 'application/actet-stream;charset=utf-8'
  })
  // for IE
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, res.headers['content-disposition'].split(';')[1].split('filename=')[1])
  }
  // for Non-IE (chrome, firefox etc.)
  else {
    let objectUrl = URL.createObjectURL(blob)
    let a = document.createElement('a')
    a.href = objectUrl
    a.download = res.headers['content-disposition'].split(';')[1].split('filename=')[1]
    // a.click();
    // 下面这个写法兼容火狐
    a.dispatchEvent(
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      })
    )
    window.URL.revokeObjectURL(blob)
  }
}
export default service

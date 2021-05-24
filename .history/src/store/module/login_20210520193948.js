import { getLogin } from '@api/login'
import { setToken } from '@/libs/util'

export default {
  namespaced: true,
  state: {
    userInfo: {},
    token: '',
    isIExplorer: navigator.appName == 'Microsoft Internet Explorer' || navigator.userAgent.indexOf('Trident') > 0 ? 'true' : false
  },
  getter: {
    isIExplorer: state => {
      if (navigator.appName == 'Microsoft Internet Explorer' || navigator.userAgent.indexOf('Trident') > 0) return true
      else return false
    }
  },

  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    clearUserInfo(state) {
      state.userInfo = {}
    },
    setToken(state, token) {
      state.token = token
      setToken(token)
    }
  },
  actions: {
    // 登录
    handleLogin({ commit }, { stuname, password }) {
      return new Promise((resolve, reject) => {
        getLogin({
          stuname,
          password
        })
          .then(res => {
            if (res) {
              const data = res
              commit('setUserInfo', data)
              commit('setToken', data.token)
            }
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    // 退出登录
    handleLoginOut({ commit }) {
      return new Promise((resolve, reject) => {
        loginOut()
          .then(res => {
            console.log(res)
            commit('clearUserInfo')
            commit('setToken', '')
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}

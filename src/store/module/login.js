import { loginOut } from '@api/api'
import { setToken } from '@/libs/util'

export default {
  namespaced: true,
  state: {
    userInfo: {},
    token: '',
    isIExplorer: navigator.appName == 'Microsoft Internet Explorer' || navigator.userAgent.indexOf('Trident') > 0 ? 'true' : 'false'
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
    // 退出登录
    handleLoginOut({ commit }) {
      return new Promise((resolve, reject) => {
        sessionStorage.removeItem('SESSION_ID')
        commit('clearUserInfo')
        // loginOut()
        //   .then(res => {
        //     console.log(res)
        //     commit('clearUserInfo')
        //     resolve(res)
        //   })
        //   .catch(err => {
        //     reject(err)
        //   })
      })
    }
  }
}

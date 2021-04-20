import { getLogin } from '@api/login'
import { setToken } from '@/libs/util'

export default {
  state: {
    userInfo: {},
    token: ''
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

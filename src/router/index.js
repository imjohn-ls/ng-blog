import Vue from 'vue'
import Router from 'vue-router'
import { routers } from './routers'
import { canTurnTo, setTitle, getToken, removeToken, isEmptyObject } from '@/libs/util'
import config from '@/config'
const { homeName } = config

Vue.use(Router)
const router = new Router({
  routes: routers,
  mode: 'history'
})
const LOGIN_PAGE_NAME = 'login'

// router.beforeEach((to, from, next) => {
//   // iView.LoadingBar.start()
//   const TOKEN = getToken()
//   if (!TOKEN) {
//     // 未登录且要跳转的页面不是登录页 也不是注册页 也不是用户绑定页面
//     if (to.name !== LOGIN_PAGE_NAME && to.name !== 'register' && to.name !== 'bind' && to.name !== 'visitorLogin') {
//       next({
//         replace: true, name: LOGIN_PAGE_NAME
//         // name: LOGIN_PAGE_NAME // 跳转到登录页
//       })
//     }
//   } else if (!TOKEN && to.name === LOGIN_PAGE_NAME) {
//     // 未登陆且要跳转的页面是登录页
//     next() // 跳转
//   } else if (TOKEN && to.name === LOGIN_PAGE_NAME) {
//     // 已登录且要跳转的页面是登录页
//     next({
//       name: homeName // 跳转到homeName页
//     })
//   } else {
//   }
//   next() //
// })

router.afterEach(to => {
  setTitle(to, router.app)
  // iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})
export default router

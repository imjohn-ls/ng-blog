
import MyHome from '@/layout/my-home/my-home'
import demo from './modules/demo/index'
let appRouters = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录'
    },
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: 'register - 注册'
    },
    component: () => import('@/views/register/register.vue')
  },
  {
    path: '/',
    name: '_myHome',
    redirect: '/home',
    component: MyHome,
    meta: {
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/home/home.vue')
      }
    ]
  },
  ...demo
]

export const routers = [
  ...appRouters
]

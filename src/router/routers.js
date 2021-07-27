import MyHome from '@/layout/my-home/my-home'
import wrap from '@/views/home/home'
import demo from './modules/demo/index'
import article from './modules/article/index'
export const frameInRoutes = [
  {
    path: '/',
    redirect: { path: '/login' }
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      auth: false,
      title: 'Login - 登录'
    },
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      auth: false,
      title: 'register - 注册'
    },
    component: () => import('@/views/register/register.vue')
  }
]
export const getRouters = [
  {
    path: '/homes',
    component: MyHome,
    children: [
      {
        path: '',
        meta: {
          auth: true,
          title: '首页'
        },
        component: wrap
      },
      ...demo,
      ...article
    ]
  }
]

export default [...frameInRoutes, ...getRouters]

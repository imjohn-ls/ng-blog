export default [
  {
    path: '/v-slot',
    name: 'v-slot',
    component: () => import('@/views/demo/v-slot/index'),
    meta: {
      auth: false,
      title: '插槽'
    }
  }
]

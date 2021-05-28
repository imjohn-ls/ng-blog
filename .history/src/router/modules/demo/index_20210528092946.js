export default [
  {
    path: '/v-slot',
    name: 'v-slot',
    component: () => import('@/views/demo/v-slot/index'),
    meta: {
      auth: true,
      title: '插槽'
    }
  },
  {
    path: '/m-table',
    name: 'm-table',
    component: () => import('@/views/demo/m-table/index'),
    meta: {
      auth: false,
      title: '表格'
    }
  },
  {
    path: '/m-filter',
    name: 'm-filter',
    component: () => import('@/views/demo/m-filter/index'),
    meta: {
      auth: true,
      title: '过滤器'
    }
  },
  {
    path: '/m-provider',
    name: 'm-provider',
    component: () => import('@/views/demo/m-provider/index'),
    meta: {
      auth: true,
      title: 'provider'
    }
  },
  {
    path: '/m-file',
    name: 'm-file',
    component: () => import('@/views/demo/m-file/index'),
    meta: {
      auth: true,
      title: 'file'
    }
  },
  {
    path: '/m-qrcode',
    name: 'm-qrcode',
    component: () => import('@/views/demo/m-qrcode/index'),
    meta: {
      auth: true,
      title: 'file'
    }
  },
  {
    path: '/m-class',
    name: 'm-class',
    component: () => import('@/views/demo/class/index'),
    meta: {
      auth: true,
      title: 'file'
    }
  },
  {
    path: '/m-blob',
    name: 'm-blob',
    component: () => import('@/views/demo/m-blob/index'),
    meta: {
      auth: true,
      title: 'file'
    }
  },
  {
    path: '/m-secret',
    name: 'm-secret',
    component: () => import('@/views/demo/m-secret/index'),
    meta: {
      auth: false,
      title: 'file'
    }
  },
  {
    path: '/m-print',
    name: 'm-print',
    component: () => import('@/views/demo/m-print/index'),
    meta: {
      auth: false,
      title: 'file'
    }
  },
  {
    path: '/m-component',
    name: 'm-component',
    component: () => import('@/views/demo/m-component/index'),
    meta: {
      auth: false,
      title: 'file'
    }
  },
  {
    path: '/m-for',
    name: 'm-component',
    component: () => import('@/views/demo/m-component/index'),
    meta: {
      auth: false,
      title: 'file'
    }
  }
]

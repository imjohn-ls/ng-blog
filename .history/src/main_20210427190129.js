import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import { httpPost, httpGet, httpForm } from '@/api/http.js'
import ElementUI from 'element-ui'
import PrintJs from 'print-js'
import config from '@/config'
import '@/libs/directive'

import '@/assets/icons/iconfont.css'
import '@/assets/style/css/public.scss'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/element-theme/index.css'
import * as filters from '@/libs/filters'

import '@/components/index.js'

/**
 * 全局过滤器
 */
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false
Vue.prototype.$config = config
Vue.prototype.$axios = axios
Vue.prototype.$httpPost = httpPost
Vue.prototype.$httpForm = httpForm
Vue.prototype.$httpGet = httpGet

Vue.use(ElementUI)
Vue.use(PrintJs)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

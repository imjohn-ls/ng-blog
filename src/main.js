import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui'
import config from '@/config'


import '@/assets/icons/iconfont.css'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/style/element-theme/index.css'

Vue.config.productionTip = false
Vue.prototype.$config = config
Vue.prototype.$axios = axios

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

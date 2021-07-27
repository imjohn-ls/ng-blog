import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'
import printJS from '@/plugin/print-js'
import ElementUI from 'element-ui'
import config from '@/config'
import tinymce from 'tinymce'
import VueTinymce from '@packy-tang/vue-tinymce'
import '@/libs/directive'

import 'tinymce/skins/content/default/content.min.css'
import 'tinymce/skins/ui/oxide/skin.min.css'
import 'tinymce/skins/ui/oxide/content.min.css'
import 'tinymce/themes/silver'
import 'tinymce/plugins/link' // 链接插件
import 'tinymce/plugins/image' // 图片插件
import 'tinymce/plugins/media' // 媒体插件
import 'tinymce/plugins/table' // 表格插件
import 'tinymce/plugins/lists' // 列表插件
import 'tinymce/plugins/quickbars' // 快速栏插件
import 'tinymce/plugins/fullscreen' // 全屏插件
import 'tinymce/icons/default/icons'

import '@/assets/icons/iconfont.css'
import '@/assets/style/css/public.scss'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'
import Print from '@/components/vue-print-nb'

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
Vue.prototype.$printJS = printJS
Vue.prototype.$tinymce = tinymce

Vue.use(ElementUI)
Vue.use(Print)
Vue.use(VueTinymce)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

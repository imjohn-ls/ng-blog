// 拼接路径
const resolve = dir => require('path').join(__dirname, dir)

// 增加环境变量
process.env.VUE_APP_VERSION = require('./package.json').version
process.env.VUE_APP_BUILD_TIME = require('dayjs')().format('YYYY-M-D HH:mm:ss')

const saveJSON = process.env.NODE_ENV === 'development' && process.env.APP_SAVE_JSON === 'true'
// const context = process.env.VUE_APP_API
// 是否使用sourceMap
const sourceMap = false

// 基础路径 注意发布之前要先修改这里
let publicPath = ''
if (process.env.NODE_ENV === 'development') {
  publicPath = '/'
  console.error(publicPath)
} else {
  publicPath = './'
}

module.exports = {
  // 根据你的实际情况更改这里
  publicPath,
  // lintOnSave: process.env.NODE_ENV === 'development',
  lintOnSave: false,
  productionSourceMap: sourceMap,
  devServer: {
    disableHostCheck: true,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      // [context]: {
      //   target: 'http://localhost:3000',
      //   changeOrigin: true,
      //   onProxyRes: saveJSON ? recordProxyJson : null
      // },
      '/pertrans': {
        // target: 'http://183.63.131.107:8802',
        // target: 'http://10.10.17.123:8020',
        target: 'http://10.10.8.148:8020', // 妙哥
        // target: 'http://10.10.12.121:8020',//陈阿堤
        // target: 'http://10.10.8.56:8020',
        // target: 'http://192.168.137.98:8020',
        // target: 'http://192.168.137.98:8020',//王兰庭
        // target: 'http://10.10.17.54:8020',//春生
        // target: 'http://192.168.137.1:8020',//佩奇
        // target: 'http://115.182.90.219:30153',//远程
        // target: 'https://kstest1.kshbank.cn:8020' /* sit */,
        changeOrigin: true,
        onProxyRes: saveJSON ? recordProxyJson : null
        // pathRewrite: {
        //   '^/pertrans': '/' // 需要rewrite重写的,
        // }
      }
    },
    publicPath // 和 publicPath 保持一致
  },
  css: {},
  configureWebpack: config => {
    // 非开发环境
    if (process.env.NODE_ENV !== 'development') {
      // config.optimization.minimizer[0].options.sourceMap = sourceMap
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']
    }
    config.module.rules = [...config.module.rules]
  },
  // 默认设置: https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js
  chainWebpack: config => {
    /**
     * 删除懒加载模块的 prefetch preload，降低带宽压力
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
     * 而且预渲染时生成的 prefetch 标签是 modern 版本的，低版本浏览器是不需要的
     */
    config.plugins.delete('prefetch').delete('preload')
    // 解决 cli3 热更新失效 https://github.com/vuejs/vue-cli/issues/1559
    config.resolve.symlinks(true)
    config
      // 开发环境
      .when(
        process.env.NODE_ENV === 'development',
        // sourcemap不包含列信息
        config => config.devtool('cheap-source-map')
      )
    // markdown
    /* config.module
      .rule('md')
      .test(/\.md$/)
      .use('text-loader')
      .loader('text-loader')
      .end() */

    // image exclude
    const imagesRule = config.module.rule('images')
    imagesRule
      .test(/\.(png|jpe?g|gif|webp|svg|ico)(\?.*)?$/)
      .exclude.add(resolve('src/assets/svg-icons/icons'))
      .end()
    imagesRule
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240, esModule: false }))
    // 重新设置 alias
    config.resolve.alias
      .set('@api', resolve('src/api'))
      .set('@views', resolve('src/views'))
      .set('public', resolve('public'))
      .set('@', resolve('src'))
    // 判断环境加入模拟数据
    const entry = config.entry('app')
    if (process.env.VUE_APP_BUILD_MODE !== 'NOMOCK') {
      entry.add('@/mock').end()
    }
  },
  // i18n
  pluginOptions: {
    i18n: {
      locale: 'zh-chs',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}

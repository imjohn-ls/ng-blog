// 拼接路径
const resolve = dir => require('path').join(__dirname, dir)
console.error(process.env.NODE_ENV)

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
const Version = `1.0.${new Date().getTime()}`
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
      '/api': {
        // target: 'http://www.imjohn.cn:9000', // 腾讯云node接口
        // target: 'http://127.0.0.1:9000', // 本地node接口
        target: 'http://127.0.0.1:8020', // 本地java接口
        changeOrigin: true,
        onProxyRes: saveJSON ? recordProxyJson : null
        // pathRewrite: {
        //   '^/api': '' // 请求的时候使用这个api就可以d
        // }
      }
    },
    publicPath // 和 publicPath 保持一致
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          // 补全css前缀(解决兼容性)
          require('autoprefixer')(),
          // 把px单位换算成rem单位
          require('postcss-pxtorem')({
            rootValue: 32, // 换算的基数(设计图750的根字体为32)
            selectorBlackList: ['.van', '.my-van'], // 要忽略的选择器并保留为px。
            propList: ['*'], // 可以从px更改为rem的属性。
            minPixelValue: 2 // 设置要替换的最小像素值。
          })
        ]
      }
    }
  },
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
    config.output
      .filename(`js/[name].js?version=${Version}`)
      .chunkFilename(`js/[name]_chunk.js?version=${Version}`)
      .end()
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

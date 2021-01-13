const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const UglifyPlugin = require('uglifyjs-webpack-plugin')

const resolve = dir => {
  return path.join(__dirname, dir)
}

process.env.VUE_APP_VERSION = require('./package.json').version
process.env.VUE_APP_BUILD_TIME = require('dayjs')().format('YYYY-M-D HH:mm:ss')

let publicPath = ''
if (process.env.MODE_ENV === 'development') {
  publicPath = '/'
} else {
  publicPath = './'
}
module.exports = {
  // 部署根目录基本路径 ./
  publicPath,
  lintOnSave: false, // 设置是否在开发环境下每次保存代码时都启用 eslint验证
  productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    // proxy: 'http://127.0.0.1:9000',
    port: 8085,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:9000',
        changeOrigin: true, // 允许websockets跨域
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: config => {
    if (process.env.MODE_ENV !== 'development') {
      // config.mode = 'production'
      // 移除console
      config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']
    }
    // let rules = [
    //   {
    //     test: /\.vue$/,
    //     use: ["vue-loader"]
    //   }
    // ];
    // config.module.rules = [...config.module.rules, ...rules];
  },
  chainWebpack: config => {
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
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
      .set('~', resolve('public'))
    // 开启图片压缩
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 10240 // 图片小于10k转为base64,默认4k
      })
      .end()
    // 判断环境加入模拟数据
    const entry = config.entry('app')
    console.log(process.env.VUE_APP_BUILD_MODE)
    if (process.env.VUE_APP_BUILD_MODE !== 'NOMOCK') {
      entry.add('@/mock').end()
    }
    // 开启js、css压缩
    if (process.env.MODE_ENV === 'production') {
      config.plugin('compressionPlugin').use(
        new CompressionPlugin({
          test: /\.js$|\.html$|.\css/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false // 不删除源文件
        })
      )
    }
  }
}

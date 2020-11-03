const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyPlugin = require("uglifyjs-webpack-plugin");

const resolve = dir => {
  return path.join(__dirname, dir);
};

process.env.VUE_APP_VERSION = require("./package.json").version;
process.env.VUE_APP_BUILD_TIME = require("dayjs")().format("YYYY-M-D HH:mm:ss");

let publicPath = "";
if (process.env.MODE_ENV === "development") {
  publicPath = "/";
} else {
  publicPath = "./";
}
module.exports = {
  // 部署根目录基本路径 ./
  publicPath,
  lintOnSave: false, // 设置是否在开发环境下每次保存代码时都启用 eslint验证
  productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
  // 构建时开启多进程处理 babel 编译
  parallel: require("os").cpus().length > 1,
  transpileDependencies: ["axios", /vue-particles/],
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    inline: true, // 开启实时刷新
    // host: "0.0.0.0", // 允许外部ip访问
    // port: 8024, // 端口
    // https: false, // 启用https
    overlay: {
      warnings: true,
      errors: true
    }, // 错误、警告在页面弹出
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true, // 允许websockets跨域
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    } // 代理转发配置，用于调试环境
  },
  configureWebpack: config => {
    if (process.env.MODE_ENV === "production") {
      config.mode = "production";
      // 移除console
      minimizer: [
        new UglifyPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_console: true, // console
              drop_debugger: false,
              pure_funcs: ["console.log"] // 移除console
            }
          }
        })
      ];
    } else {
      config.mode = "development";
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
    config.resolve.alias
      .set("@", resolve("src")) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set("_c", resolve("src/components"))
      .set("~", resolve("public"));
    // 开启图片压缩
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 10240 // 图片小于10k转为base64,默认4k
      })
      .end();
    // 开启js、css压缩
    if (process.env.MODE_ENV === "production") {
      config.plugin("compressionPlugin").use(
        new CompressionPlugin({
          test: /\.js$|\.html$|.\css/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false // 不删除源文件
        })
      );
    }
  }
};

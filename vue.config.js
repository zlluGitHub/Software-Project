module.exports = {
    devServer: {
      port: 80,
      sockHost: 'http://127.0.0.0',
      disableHostCheck: true,
      open: true,
      host: "localhost",
      proxy: {
        '/api': {
          target: 'http://127.0.0.0',
          changeOrigin: true,
          ws: false,
          pathRewrite: {
            '^/api': ''
          }
        }
      },
  
    },
    //输出打包文件目录
    outputDir: process.env.NODE_ENV === "development" ? 'devdist' : 'dist'
    // lintOnSave: false // 取消 eslint 验证
  }
  
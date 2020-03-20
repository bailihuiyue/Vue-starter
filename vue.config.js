module.exports = {
    lintOnSave: false,
    publicPath: "/",

    devServer: {
        port: 9000,
        //开启本地反向代理
        proxy: {
            "/proxy": {
                // 设置你调用的接口域名和端口号
                target: "http://localhost:8080/",
                changeOrigin: true,
                pathRewrite: {
                    "^/proxy": "/"
                }
            }
        }
    },

    pluginOptions: {
      i18n: {
        locale: 'en',
        fallbackLocale: 'en',
        localeDir: 'locales',
        enableInSFC: false
      }
    }
};

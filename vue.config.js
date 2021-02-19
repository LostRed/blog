module.exports = {
    publicPath: './',
    devServer: {
        port: 10000,
        proxy: {
            '/api': {
                // target: 'http://lostred.info:8080',
                target: 'http://localhost:8080',
                // 允许跨域
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
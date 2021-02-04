module.exports = {
    publicPath: './',
    devServer: {
        port: 10000,
        proxy: {
            '/api': {
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
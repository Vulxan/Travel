module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'
        },
        ws: true,
        changeOrigin: true
      }
    }
  },
  baseUrl: process.env.NODE_ENV === 'production' ? '/Travel/' : '/',
  outputDir: 'docs'
}
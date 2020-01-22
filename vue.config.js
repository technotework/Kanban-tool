module.exports = {
    devServer: {
        host: '0.0.0.0',
        port: '8080'
    },
    configureWebpack: {
        resolve: {
          alias: {
            'vue$': 'vue/dist/vue.esm.js'
          }
        }
    }
}
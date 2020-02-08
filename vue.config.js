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
    },
  },
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: '[folder]---[local]---[hash:base64:5]'
        }
      },
      sass: {
        prependData: `
          @import "~@/components/scss/_theme.scss";
        `,
        sourceMap: true,
      }
    }
  }
}
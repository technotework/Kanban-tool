module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: '8080'
  },
  configureWebpack: {
    devtool: 'source-map',
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
          @import "~@/components/scss/_theme2.scss";
        `,
        sourceMap: true,
      }
    }
  }
}
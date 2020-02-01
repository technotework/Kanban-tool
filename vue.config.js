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
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
      ],
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@/components/scss/global.scss";
        `,
        sourceMap: true,
      }
    }
  }
}
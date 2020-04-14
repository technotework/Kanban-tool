module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/app" : "/",
    devServer: {
        host: "0.0.0.0",
        port: "8080",
        historyApiFallback: true
    },
    configureWebpack: {
        devtool: "source-map",
        resolve: {
            alias: {
                vue$: "vue/dist/vue.esm.js"
            }
        }
    },
    chainWebpack: config => {
        config.plugin("html").tap(options => {
            options[0].minify = {
                removeComments: false,
                collapseWhitespace: false,
                removeAttributeQuotes: false,
                collapseBooleanAttributes: false,
                removeScriptTypeAttributes: false
            };
            return options;
        });
    },
    css: {
        requireModuleExtension: true,
        loaderOptions: {
            css: {
                modules: {
                    localIdentName: "[folder]---[local]---[hash:base64:5]"
                }
            },
            sass: {
                prependData: `
          @import "~@/components/scss/_theme.scss";
        `,
                sourceMap: true
            }
        }
    }
};

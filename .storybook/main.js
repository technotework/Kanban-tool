const path = require('path')
module.exports = {
  stories: ['../src/**/*.stories.([tj]s|vue)'],
  addons: ['storybook-addon-vue-info/lib/register', '@storybook/addon-knobs/register', '@storybook/addon-actions', '@storybook/addon-links', ],
  webpackFinal: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, '../src');
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: "[folder]---[local]---[hash:base64:5]",
            }
          },
        },
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: path.resolve(__dirname, '../src/components/scss/global.scss')
          }
        }
      ],
      include: path.resolve(__dirname, '../'),
    });
    return config;
  }
};
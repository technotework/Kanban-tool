const path = require('path')
module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
};
/*
module.exports =  {
  webpackFinal: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, '../src');
    console.log(config);
    return config;
  }
} */
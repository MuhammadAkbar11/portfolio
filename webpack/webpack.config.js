/* eslint-disable global-require */

const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = configs => {
  const env = configs?.env ? configs.env : process.env.NODE_ENV;
  const envConfig = require(`./webpack.${env}.js`);

  return merge(commonConfig, envConfig);
};

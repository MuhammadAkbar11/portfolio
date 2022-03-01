/* eslint-disable global-require */
const dotenv = require('dotenv');
const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const mode = process.env.MODE;

const envfile =
  mode === 'dev' ? path.resolve('.env.dev') : path.resolve('.env');

dotenv.config({
  path: envfile,
});

module.exports = configs => {
  const env = configs?.env ? configs.env : process.env.NODE_ENV;
  const envConfig = require(`./webpack.${env}.js`);

  return merge(commonConfig, envConfig);
};

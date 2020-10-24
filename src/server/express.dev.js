import express from 'express';
import path from 'path';
const webpack = require('webpack');
const server = express();

const config = require('../../webpack/webpack.config.js');

const port = process.env.PORT || 8080;

const webpackConfigs = { env: process.env.NODE_ENV };

const compiler = webpack(config(webpackConfigs));

const webpackDevMiddleWare = require('webpack-dev-middleware')(
  compiler,
  config.devServer
);
const webpackHotMiddleWare = require('webpack-hot-middleware')(compiler);

server.use(webpackDevMiddleWare);
server.use(webpackHotMiddleWare);

const staticMiddleWare = express.static(path.join(__dirname, '..', 'dist'));
server.use(staticMiddleWare);

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

server.listen(port, () => {
  console.log('listening on ' + port);
});

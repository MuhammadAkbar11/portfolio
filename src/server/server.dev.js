const express = require('express');
const path = require('path');
const webpack = require('webpack');
const server = express();
const webpackConfig = require('../../webpack/webpack.config.js');

const _config = { env: process.env.NODE_ENV };
const _devConfig = webpackConfig(_config);
const compiler = webpack(_devConfig);

const STATICFILE = _devConfig.output.path;

console.log(STATICFILE);

const webpackDevMiddleWare = require('webpack-dev-middleware')(compiler, {
  ..._devConfig.devServer,
  publicPath: _devConfig.output.publicPath,
  writeToDisk: true,
  index: 'index.html',
});
const webpackHotMiddleWare = require('webpack-hot-middleware')(compiler);

server.use(webpackDevMiddleWare);
server.use(webpackHotMiddleWare);

server.use(express.static(STATICFILE));

server.get('*', (req, res, next) => {
  const HTMLFILE = path.join(STATICFILE, 'index.html');
  res.sendFile(HTMLFILE, err => {
    if (err) res.status(500).send(err);
  });
});

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log('listening on ' + port);
});

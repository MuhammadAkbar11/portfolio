const express = require('express');
const path = require('path');
const webpack = require('webpack');

const app = express();

const webpackConfig = require('../../webpack/webpack.config.js');

const configs = { env: process.env.NODE_ENV };
const devConfig = webpackConfig(configs);
const compiler = webpack(devConfig);

const staticFile = devConfig.output.path;

const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: devConfig.output.publicPath,
  writeToDisk: true,
  index: 'index.html',
});
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware);

app.use(express.static(staticFile));

app.get('/api', (req, res, next) => {
  res.json({ message: 'Hello Akbar' });
});

app.get('*', (req, res, next) => {
  const HTMLFILE = path.join(staticFile, 'index.html');
  res.sendFile(HTMLFILE, err => {
    if (err) res.status(500).send(err);
  });
});

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log('listening on ' + port);
});

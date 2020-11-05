const express = require('express');
const path = require('path');
const webpack = require('webpack');

const app = express();

const webpackConfig = require('../../webpack/webpack.config.js');

const configs = { env: process.env.NODE_ENV };
const devConfig = webpackConfig(configs);
const compiler = webpack(devConfig);

const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: devConfig.output.publicPath,
});
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware);

const staticFile = path.join(__dirname, '../', '../', 'dist');

app.use(express.static(staticFile));

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

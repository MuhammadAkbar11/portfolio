const express = require('express');
const path = require('path');
const webpack = require('webpack');
const axios = require('axios');

const app = express();

const webpackConfig = require('../../webpack/webpack.config.js');

const configs = { env: process.env.NODE_ENV };
const devConfig = webpackConfig(configs);
const compiler = webpack(devConfig);

const staticFile = devConfig.output.path;

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: devConfig.output.publicPath,
  writeToDisk: true,
  index: 'index.html',
});
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware);

app.use(express.static(staticFile));

app.get('/api/projects', async (req, res, next) => {
  try {
    const getProjects = await axios.get(`${API_URL}/projects`, {
      headers: {
        'x-api-key': API_KEY,
      },
    });
    res.json({ ...getProjects.data });
  } catch (error) {
    error.message = error.message || 'Something went wrong';
    res.status(error.statusCode || 500).json({ ...error });
  }
});

app.get('/api/skills', async (req, res, next) => {
  try {
    const getSkills = await axios.get(`${API_URL}/skills`, {
      headers: {
        'x-api-key': API_KEY,
      },
    });
    res.json({ ...getSkills.data });
  } catch (error) {
    error.message = error.message || 'Something went wrong';
    res.status(error.statusCode || 500).json({ ...error });
  }
});

app.get('/api', (req, res, next) => {
  res.json({ message: 'Hello Akbar' });
});

app.get('*', (req, res, next) => {
  const HTMLFILE = path.join(staticFile, 'index.html');
  res.sendFile(HTMLFILE, err => {
    if (err) res.status(500).send(err);
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log('listening on ' + port);
});

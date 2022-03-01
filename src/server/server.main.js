require('@babel/register');
const dotenv = require('dotenv');
const path = require('path');

const mode = process.env.MODE;

const envfile =
  mode === 'dev' ? path.resolve('.env.dev') : path.resolve('.env');

dotenv.config({
  path: envfile,
});

process.env.NODE_ENV === 'dev'
  ? require('./server.dev')
  : require('./server.prod');

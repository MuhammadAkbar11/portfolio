require('@babel/register');

process.env.NODE_ENV === 'dev'
  ? require('./server.dev')
  : require('./server.prod');

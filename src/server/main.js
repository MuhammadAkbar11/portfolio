require('@babel/register');

process.env.NODE_ENV === 'dev'
  ? require('./express.dev')
  : require('./express.prod');

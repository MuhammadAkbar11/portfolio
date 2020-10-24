require('@babel/register');

if (process.env.NODE_ENV === 'dev') require('./express.dev');
else require('./express.prod');

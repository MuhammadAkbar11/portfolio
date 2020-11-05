const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  rules: {
    'prettier/prettier': ['error'],
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 0,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', path.join(__dirname, 'src')],
          ['@app', path.join(__dirname, 'src/app')],
          ['@containers', path.join(__dirname, 'src/app/containers')],
          ['@components', path.join(__dirname, 'src/app/components')],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
};

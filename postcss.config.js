const tailwindcss = require('tailwindcss');
module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('postcss-import'),
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
  ],
};

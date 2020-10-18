const path = require('path')

const tailwindcss = require('tailwindcss');
module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('postcss-import')({
      path : path.resolve(__dirname, "src/index.scss"),
    }),
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
  ],
};

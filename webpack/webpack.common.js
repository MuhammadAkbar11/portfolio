const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../', 'src/index.js'),
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              cache: true,
              emitError: true,
              emitWarning: true,
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
            context: 'src',
          },
        },
      },
      {
        test: /\.(eot|gif|otf|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Muhammad Akbar | ',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HOT = process.env.HOT;

module.exports = {
  entry: {
    index: HOT
      ? [
          path.resolve(__dirname, '../', 'src/index.js'),
          'webpack-hot-middleware/client',
        ]
      : path.resolve(__dirname, '../', 'src/index.js'),
  },
  resolve: {
    extensions: ['.css', '.js', '.jsx', '.json'],
    alias: {
      assets: path.resolve(__dirname, 'src/assets'),
      '@': path.resolve(__dirname, '..', 'src'),
      '@app': path.resolve(__dirname, '..', 'src/app'),
      '@containers': path.resolve(__dirname, '..', 'src/app/containers'),
      '@components': path.resolve(__dirname, '..', 'src/app/components'),
    },
  },
  stats: {
    colors: true,
  },
  devServer: {
    contentBase: path.join(__dirname, '..', 'dist'),
    hot: true,
    open: true,
    overlay: true,
    compress: true,
    historyApiFallback: {
      index: 'index.html',
    },
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
        use: ['url-loader?limit=100000'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'React, Webpack and Babel Boilerplate',
      template: path.resolve(__dirname, '..', 'src', 'index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};

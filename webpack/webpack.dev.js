const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devServer: {
    port: 9000,
    contentBase: path.resolve(__dirname, '../', 'dist'),
    hot: true,
    open: true,
    watchContentBase: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new Dotenv({
      path: './.env.development',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          // {
          //   loader: 'style-loader',
          // },
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: resourcePath => resourcePath.endsWith('.module.css'),
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: resourcePath => resourcePath.endsWith('.module.scss'),
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
              sourceMap: true,
            },
          },
          'sass-loader',
          'postcss-loader',
        ],
      },
    ],
  },
};

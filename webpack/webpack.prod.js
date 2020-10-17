const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  devtool: 'eval-cheap-source-map',
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: 'js/[name].[contenthash].bundle.js',
    chunkFilename: 'js/chunk-[name].[contenthash].js',
    publicPath: './',
  },

  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin({
        parallel: true,
        cache: true,
        sourceMap: true,
      }),
    ],
    // splitChunks: {
    //   runtimeChunk: true,
    // },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: './.env.development',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/chunk-[name].[contenthash].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
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

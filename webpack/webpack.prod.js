const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
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
    splitChunks: {
      chunks: 'async',
      minSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        components: {
          name: 'components',
          test: /[\\/]components[\\/]/,
          chunks: 'all',
        },
        containers: {
          name: 'containers',
          test: /[\\/]containers[\\/]/,
          chunks: 'all',
        },
      },
    },
    runtimeChunk: true,
  },

  plugins: [
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/chunk-[name].[contenthash].css',
    }),
    new Dotenv({
      path: './.env.production',
    }),
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

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: 'js/[name].bundle.js',
    publicPath: './',
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  optimization: {
    splitChunks: {
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
      filename: 'css/[name].css',
      chunkFilename: 'css/chunk-[name].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ],
      },
    ],
  },
};

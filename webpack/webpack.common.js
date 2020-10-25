const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: [
      path.resolve(__dirname, '../', 'src/index.js'),
      'webpack-hot-middleware/client?reload=true',
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },

  devServer: {
    // port: 9000,
    onListening: function (server) {
      const port = server.listeningApp.address().port;
      console.log('==============================');
      console.log('|| Listening on port:', port, '||');
      console.log('==============================');
    },
    watchOptions: {
      ignored: /node_modules/,
      pool: 1000,
    },
    watchContentBase: true,
    contentBase: path.resolve(__dirname, '../', 'dist'),
    overlay: true,
    hot: true,
    open: true,
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
            context: 'src/App',
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

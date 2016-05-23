const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const APP = path.join(__dirname, 'src');
const BUILD = path.join(__dirname, 'build');

module.exports = {
  entry: {
    app: APP
  },
  output: {
    path: BUILD,
    filename: '[name].js'
  },
  resolve: {
    root: path.resolve('/src'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.json', '.js', '.jsx']
  },

  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel?cacheDirectory'],
      include: APP
    }]
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.ejs',
      title: 'React Boilerplate',
      appMountId: 'container',
      baseHref: '/', 
      inject: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

var Webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer-core');
var csswring = require('csswring');
var path = require('path');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var assetsPath = path.resolve(__dirname, 'public', 'assets');
var entryPath = path.resolve(__dirname, 'frontend', 'app');
var host = process.env.APP_HOST || 'localhost';

var config = {

  // Makes sure errors in console map to the correct file
  // and line number
  devtool: 'eval',
  entry: {
    app: [
      // For hot style updates
      'webpack/hot/dev-server',

      // The script refreshing the browser on none hot updates
      'webpack-dev-server/client?http://' + host + ':3001',

      // Our application
      entryPath,
      './frontend/vendor'
    ]
  },
  output: {
    path: assetsPath,
    filename: '[name].bundle.js',
    publicPath: '/assets'
  },
  module: {

    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.less$/,
        loader: 'style!css!postcss!less'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }

    ]
  },
  postcss: [autoprefixer],

  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend/templates/index.tpl.html',
      inject: 'body',
      filename: 'public/index.html',
      hash: true
    }),
    // We have to manually add the Hot Replacement plugin when running
    // from Node
    new Webpack.HotModuleReplacementPlugin()
  ],

  devServer : {
    contentBase: './src/',
    stats: 'minimal'
  }
};

module.exports = config;
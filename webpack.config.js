const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const { resolve } = require('path');
const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'less-loader'];
const cssProd = ExtractTextPlugin.extract({
  use: ['css-loader', 'less-loader'],
  fallback: 'style-loader',
  publicPath: 'dist'
});

const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path : resolve(__dirname, 'dist'),
    filename : '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: cssConfig
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: 'images/',
              outputPath: 'images/'
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(woff2?|svg)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file-loader'
      }
    ],
  },
  devtool : 'eval',
  devServer : {
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port:8080,
    stats: 'errors-only',
    hot: true,
    inline: true,
    open: false
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Demo',
      hash: false,
      // minify: {
      //   collapseWhitespace: isProd,
      // },
      template: './src/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: !isProd,
      allChunks: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
}

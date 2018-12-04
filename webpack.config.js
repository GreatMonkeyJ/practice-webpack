const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { resolve } = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path : resolve(__dirname, 'dist'),
    filename : 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
          publicPath: "/dist"
        })
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Demo',
      hash: false,
      minify: {
        collapseWhitespace: false,
      },
      template: './src/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true
    })
  ]
}
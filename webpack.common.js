const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    index: path.join(__dirname, 'src/index.js'),
    index2: path.join(__dirname, 'src/index2.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader','css-loader','sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有 翻版必究'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('css/index.css')
  ]
}
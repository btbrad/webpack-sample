const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    port: '8080',
    inline: true,
    open: true,
    overlay: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader','css-loader','sass-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true  // Write Logs to Console
    }),
    new webpack.BannerPlugin('版权所有 翻版必究'),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
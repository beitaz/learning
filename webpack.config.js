const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
    modules: ['node_modules']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        }
      }, {
        loader: 'eslint-loader',
        options: {
          enforce: 'pre'
        }
      }]
    },{
      test: /\.s?css/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
    }]
  },
  plugins: [
    require('autoprefixer'),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    })
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    // host: 'localhost',
    // port: 8081,
    // proxy: 'http://localhost:8087',
    open: 'Google Chrome', // true 或者 浏览器名称 'Google Chrome', 'Firefox', 'Safari'
    // headers: { // 为所有响应添加额外的头信息
    //   'X-Custom-Foo': 'bar'
    // }
  }
};

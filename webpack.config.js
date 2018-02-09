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
      // '@': path.resolve(__dirname, 'src/components')
    },
    extensions: ['.js', '.jsx'],
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
        // 在解析之前就使用 eslint 检查语法规范
        options: {
          enforce: 'pre'
        }
      }]
    }, {
      test: /\.s[ac]ss$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      }, {
        loader: 'postcss-loader',
        // 为了解决 postcss 解析 sass 的问题（不用 postcss.config.js 方式） 
        options: {
          plugins: [
            require('autoprefixer')
          ]
        }
      }, 'sass-loader']
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
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

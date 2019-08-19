const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base.conf.js');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    //实现刷新浏览器webpack-hot-middleware/client?noInfo=true&reload=true 是必填的
    main: ['webpack-hot-middleware/client?noInfo=true&reload=true', './src/index.js'],
  },
  output: {
    // 输出目录
    path: path.resolve(__dirname, '../dist'),
    // 文件名称
    filename: 'bundle.[name].[hash].js',
    chunkFilename: '[name].[hash].js',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    //开启HMR(热替换功能,替换更新部分,不重载页面！) 相当于在命令行加 --hot
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.DefinePlugin({
    // 	'process.env.NODE_ENV': JSON.stringify('development'),
    // }),
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, '../dist'),
    historyApiFallback: true, //  该选项的作用所有的404都连接到index.html
    proxy: {
      // 代理到后端的服务地址
      // "/api": "http://localhost:3000"
    },
  },
});

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.dev.conf.js');
const map = require('../mock/map');

const complier = webpack(config); // 编译器，编译器执行一次就会重新打包一下代码
const app = express(); // 生成一个实例
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const DIST_DIR = path.resolve(__dirname, '../', 'dist'); // 设置静态访问文件路径
const port = parseInt(process.env.PORT, 10) || 8586;
const host = process.env.HOST || 'localhost';

const devMiddleware = webpackDevMiddleware(complier, {
  quiet: true,
  noInfo: true,
  stats: 'minimal',
});

const hotMiddleware = webpackHotMiddleware(complier, {
  log: false,
  heartbeat: 2000,
});

app.use(devMiddleware);
app.use(hotMiddleware);
// 设置访问静态文件的路径
app.use(express.static(DIST_DIR));

let t = null;
io.on('connection', socket => {
  socket.on('message', () => {
    socket.emit('message', map());

    if (t) {
      clearInterval(t);
      t = null;
    }

    t = setInterval(() => {
      socket.emit('message', map());
    }, 5000);
  });
});

io.on('disconnect', () => {
  console.log('disconnect');
  if (t) {
    clearInterval(t);
    t = null;
  }
});

server.listen(port, () => {
  console.log(`App running at: http://${host}:${port}`);
}); //监听端口

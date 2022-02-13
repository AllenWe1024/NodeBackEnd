// Express反向代理
const express = require('express');
const timeout = require('connect-timeout');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

// HOST 指目标地址 PORT 服务端口
const HOST = 'http://localhost', PORT = '10002';

// 超时时间
const TIME_OUT = 30 * 1e3;

// 设置端口
app.set('port', PORT);

// 设置超时 返回超时响应
app.use(timeout(TIME_OUT));
app.use((req, res, next) => {
  if (!req.timedout) next();
});

// 设置静态资源路径
app.use(express.static('public',{index:"login.html"}));

// 反向代理（这里把需要进行反代的路径配置到这里即可）
// eg:将/api 代理到 ${HOST}/api
// app.use(createProxyMiddleware('/api', { target: HOST }));
// 自定义代理规则
app.use(createProxyMiddleware('/', {
  target: HOST, // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
  // pathRewrite: {
  //   '^/': '', // rewrite path
  // }
}));

// 监听端口
app.listen(app.get('port'), () => {
  console.log(`server running ${HOST}:${PORT }`);
});

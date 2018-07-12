var express = require('express');
var proxy = require('http-proxy-middleware');

// 跨域插件
var cors = require('cors');

var app = express();

app.use(cors());
app.use('*', proxy({ target: 'https://www.kuaishouvideo.com', changeOrigin: true }));
app.listen(6666);
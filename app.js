var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();

app.use('*', proxy({ target: 'https://www.kuaishouvideo.com', changeOrigin: true }));
app.listen(6666);
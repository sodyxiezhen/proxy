### 本地开发访问外部接口
由于浏览器的同源限制，访问ajax接口的域名需要跟本地的域名一致，不然就会有跨域问题。
解决方案一般如下：
- 服务端兼容，增加跨域http头
- 客户端jsonp,服务端增加兼容
- 上面的方法，在本地开发中访问外部接口，都不好实施，还不如自己搭建一个代理服务器，访问外部接口，原理是服务端到服务端是没有同源限制的，这样实现接口转发

### 示意图
![333](https://raw.githubusercontent.com/wiki/sodyxiezhen/practice3_less/proxy.png)

### 实现方法

1. 拉取git 仓库代码 git clone https://github.com/sodyxiezhen/proxy.git
2. 安装运行
···
	cd proxy/
	npm install
	npm run startProxy
···
3. 代码在app.js里面，这里用到了 express 和 http-proxy-middleware 中间件。实际上就是用node搭建一个服务器，监听6666端口，将所有请求都转发到指定的域名上去，这就是代理<br />
![444](https://raw.githubusercontent.com/wiki/sodyxiezhen/practice3_less/proxy_code.png)

4. 调用，如果我要访问的外部接口地址是 https://www.kuaishouvideo.com/WorldCup/init,那么我们就用http://localhost:6666/WorldCup/init 代替，路径完全一样，只是域名更换而已~这样就实现了跨域，极大方便开发<br />
![555](https://raw.githubusercontent.com/wiki/sodyxiezhen/practice3_less/proxy_code2.png)
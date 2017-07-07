#show code
文件crud.html和crud.js是基于mongoose实现的增删查改操作。
详细介绍在个人博客
https://my.oschina.net/u/2456393/blog/1069039
＃项目介绍
主要做一个简单的登录注册，基于一些比较前沿的技术。大神勿喷。哈哈


#就绪工作
安装node mongodb 还有系列依赖 npm install 一键搞定。都在package.json里面配置好了



#遇到的坑
index.js服务无法获取登录页面的登录参数信息

＃解决方法
参数传递的时候加上这头东西：emulateJSON = true
如果Web服务器无法处理编码为application/json的请求，你可以启用emulateJSON选项。启用该选项后，请求会以application/x-www-form-urlencoded作为MIME type，就像普通的HTML表单一样。
Vue.http.options.emulateJSON = true;
# 开始

## Express

[官网](https://expressjs.com)

## 安装

    npm init -y
    npm install express --save

## app.js

···
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
···

## Express 应用程序生成器

npm install express-generator -g

npm install express-generator --save--dev

说明：除非是你自己的电脑，不然都不建议全局安装，只需安装到当前目录即可，因为这样不能确保在别的机子你能有root权限

## express -h 查看相关指令

[https://expressjs.com/en/starter/generator.html](https://expressjs.com/en/starter/generator.html)

## 改写端口

PORT=4000 noe bin/www

## exports 和 module.exports 的区别

[exports 和 module.exports 的区别](https://cnodejs.org/topic/5231a630101e574521e45ef8)

## ejs模板引擎

[ejs模板引擎](https://github.com/mde/ejs)

## Webpack配置(自动化)

注意：npm start 命令不能设置为80端口，要设置成8080端口，要么就使用sudo,这样就可以使用root权限或者管理员权限，因为在服务器上不是每个人都可以使用管理员权限的。因此，端口一般设置为80端口以外的端口。

> 验证Webpack是否配置成功

a.js b.js index.js

> onchange包

npm install --save--dev onchange

npm run watch

## 存在问题

tost样式不出来

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');

var index = require('./routes/index');
var all = require('./routes/all');
var api = require('./routes/api');
var auth = require('./routes/auth');

var app = express();

// view engine setup
//__dirname表示当前文件目录，views文件夹设置为模板文件夹路径
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');//当前的模板引擎为ejs，要想替换，直接把ejs替换即可

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//中间件
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//把当前目录加上public变成新的静态目录
app.use(session({secret: 'sessionsecret'}));
app.use(passport.initialize());
app.use(passport.session());

//路由
app.use('/', index); //我的便签
app.use('/all', all); //全部便签
app.use('/api', api); //ajax 接口
app.use('/auth', auth); //登录

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var knowledgeRouter=require('./routes/knowledge');
var welfareRouter=require('./routes/welfare');
//var goodsRouter=require('./routes/goods');

var mongoose=require('mongoose');

var app = express();

// 解决跨域
app.all('*', function(req, res, next) {
  //设为指定的域
  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header('Access-Control-Allow-Credentials', true);
  res.header("X-Powered-By", ' 3.2.1');
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//静态文件
app.use(express.static('public'));

//使用路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/knowledge',knowledgeRouter);
app.use('/welfare',welfareRouter);
//app.use('/goods',goodsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

mongoose.connect('mongodb://localhost/yihuo');//连接本地数据库
mongoose.connection.on('connected', function () {

  console.log('Mongoose connection open to '); }); /** * 连接异常 */

  mongoose.connection.on('error',function (err) {

  console.log('Mongoose connection error: ' + err); }); /** * 连接断开 */

  mongoose.connection.on('disconnected', function () {

  console.log('Mongoose connection disconnected'); });


module.exports = app;

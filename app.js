/**
 * 项目入口文件
 *   中间件的配置
 *   路由导向
 */

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// 中间件载入
app.use(express.static('content'));
// app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// 视图配置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// 使用的是hbs模版引擎


// 路由导向
const front = require('./routes/front');
app.use('/', front);
const account = require('./routes/account');
app.use('/account', account);
const admin = require('./routes/admin');
app.use('/admin', admin);


module.exports = app;
if (!module.parent) {
  // 当前模块上面没有模块
  const server = app.listen(3000, function() {
    console.log(`server is ready @ http://localhost:3000`);
  });
}

// 项目入口文件

var express = require('express');
// 通过express函数得到全局应用对象
var app = express();

// 添加一个静态文件所在目录, V4版的Express中 本身只会自带一个模块（中间件）express.static
app.use(express.static('content'));

// // 划分为两大块 前台  后台
// app.use('/frontend', (req, res) => {
//   res.send('您请求的是前台');
// });

// app.use('/backend', (req, res) => {
//   res.send('您请求的是后台');
// });

// // 对网站首页的访问返回 "Hello World!" 字样
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// // 网站首页接受 POST 请求
// // app.get app.post app.put app.delete 分别要求以不同的method请求
// app.post('/', function (req, res) {
//   res.send('Got a POST request');
// });
//
// app.get('/',
//   (req, res, next) => {
//     res.write('1');
//     next();
//   },
//   (req, res, next) => {
//     res.end('2');
//   });
// app.get('/', );
//
// app.all('/',(req, res, next) => {
//   res.end('2');
// });

// app.route('/book')
//   .get(function(req, res) {
//     res.send('Get a random book');
//   })
//   .post(function(req, res) {
//     res.send('Add a book');
//   })
//   .put(function(req, res) {
//     res.send('Update the book');
//   });

// app.route()
// app.get('/book',function(req, res) {
//     res.send('Get a random book');
//   })
// app.post('/book',function(req, res) {
//     res.send('Add a book');
//   })
// app.put('/book',function(req, res) {
//     res.send('Update the book');
//   });

// 创建一个路由对象
var router = express.Router();
router.get('/', (req, res) => {
  res.send('get');
});
router.post('/', (req, res) => {
  res.send('post');
});
router.put('/', (req, res) => {
  res.send('put');
});

app.use('/admin', router);


var server = app.listen(3000, function() {
  console.log(`server is ready @ http://localhost:3000`);
});

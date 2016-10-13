// 账户中心控制器

// 注册 action
exports.register = (req, res) => {
  res.render('account-register');
};
exports.registerPost = (req, res) => {
  // TODO: 注册逻辑
  res.send(req.body);
};
// 登录
exports.login = (req, res) => {
  res.render('account-login');
};
// 找回密码
exports.find = (req, res) => {
  res.send('找回密码');
};
// 修改密码
exports.repassword = (req, res) => {
  res.send('修改密码');
};

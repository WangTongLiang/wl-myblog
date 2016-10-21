// 账户中心控制器

// 注册 action
const db = require('../db');
exports.register = (req, res) => {
    res.render('../views/account-register.hbs')
};
exports.registerPost = (req, res) => {
    // TODO: 注册逻辑 //验证用户名是否合法
            if (!req.body.username) {
                res.render('../views/account-register.hbs', { message: "请输入正确的用户名" });
                return false;
            };
            if (req.body.password == '' || req.body.password !== req.body.confirm) {
                res.render('../views/account-register.hbs', { message: "请确认密码" });
                return false;
            };
            db.getConnection(function(err, connection) {
                if (err) throw err;
                //密码是否匹配
                connection.query(`SELECT username FROM user WHERE username = '${req.body.username}'`, function(err, rows) {
                            if (err) throw err;
                            if (rows != '' && rows[0].username === req.body.username) {
                                res.render('../views/account-register.hbs', { message: "用户名已存在" });
                                return false;
                            } else {
                                console.log(req.body.username)
                                var insert = `INSERT INTO user(username, password) VALUES ('${req.body.username}','${req.body.password}')`;
                                db.query(insert, function(err, result) {
                                    if (err) throw err;
                                });
                                res.redirect('/login')
                                    //res.redirect('/login')
                            };
                            connection.release();

                });
            })
};
// 登录
exports.login = (req, res) => {
    res.render('../views/account-login');
};
exports.loginPost = (req, res) => {
     //密码是否匹配
            console.log(req.body)
            db.query(`SELECT username FROM user WHERE username = '${req.body.username}' AND password = '${req.body.password}'`, function(err, rows, fields) {
                        if (err) throw err;
                        console.log(rows);
                        if (rows == '' ) {
                            res.render('../views/account-login.hbs', { message: "用户名或密码不对" });
                            return false;
                        } else{
                            res.redirect('/admin-page/index.html')
                        };


    });
}
// 找回密码
exports.find = (req, res) => {
    res.send('找回密码');
};
// 修改密码
exports.repassword = (req, res) => {
    res.send('修改密码');
};

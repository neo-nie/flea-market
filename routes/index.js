var request = require('request');

//首页
exports.index = function (req, res) {
  res.render('index', { title: '爱售网 售（show）出你的二手货！' });
}

//登录页
exports.login = function (req, res) {
    var ticket = req.query.ticket;
    var user = req.session && req.session.user;

    var VALIDATE_URL = 'https://ilogin.ucweb.com/sso/serviceValidate',
        LOGIN_URL = 'https://ilogin.ucweb.com/sso/login',
        ENTRY_URL = 'http://10.1.88.176:3000/login';

    if (ticket) {
        var url = VALIDATE_URL +'?service=' + ENTRY_URL + '&ticket=' + ticket;
        console.log(url);
        request(url, function (err, resp, body){
            if (err) console.log(err);
            var regex = /\<cas\:username\>(.*)\<\/cas\:username\>/;

            console.log(body);
            if (regex.test(body)){  //登录成功
                console.log('登录成功');
                req.session.user = RegExp.$1;
                res.redirect('/');
            }
            else {  //登录失败
                console.log('登录失败');
                res.redirect(LOGIN_URL + '?service=' + ENTRY_URL);
            }
        })
    }else if (!user) {    //如果没有登录
        res.redirect(LOGIN_URL + '?service=' + ENTRY_URL);
    }
  // res.render('login', { title: '登录页' });
}

//商品详情页
exports.entity = function (req, res) {
  res.render('entity', { title: '商品页' });
}

//发布页
exports.publish = function (req, res) {
  res.render('publish', { title: '发布页' });
}

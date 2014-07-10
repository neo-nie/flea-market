var request = require('request');
var Q = require('q'),
    get = Q.nbind(request.get, request);

//首页
exports.index = function (req, res) {
  res.render('index', { title: '爱售网 售（show）出你的二手货！' });
}


var VALIDATE_URL = 'https://ilogin.ucweb.com/sso/serviceValidate',
    LOGIN_URL = 'https://ilogin.ucweb.com/sso/login',
    ENTRY_URL = 'http://10.1.88.176:3000/login';
//登录页
exports.login = function (req, res) {
    var ticket = req.query.ticket;

    if (req.session && req.session.user) {  //已经登录
        console.log(req.session.user);
        res.redirect(req.query.from || '/');
        return;
    }
    if (!ticket) {  //没有令牌，跳转到oa登录页面
        res.redirect(LOGIN_URL + '?service=' + ENTRY_URL);
        return;
    }

    var url = VALIDATE_URL +'?service=' + ENTRY_URL + '&ticket=' + ticket;
    get(url).then(function (data){
        var resp = data[0], body = data[1];
        var regex = /\<cas\:username\>(.*)\<\/cas\:username\>/;
        console.log(body);
        
        if (!regex.test(body)){  //登录失败，跳转到oa登录页
            throw new Error('登录失败');
        }

        //登录成功，跳到首页
        // console.log('登录成功');
        req.session.user = RegExp.$1;
        res.redirect('/');
    }).fail(function (err){
        console.log(err);
        res.redirect(LOGIN_URL + '?service=' + ENTRY_URL);
    })
}

//商品详情页
exports.entity = function (req, res) {
  res.render('entity', { title: '商品页' });
}

//发布页
exports.publish = function (req, res) {
  res.render('publish', { title: '发布页' });
}

//用户页
exports.user = function (req, res) {
    res.render('user', { title: '用户页'});
}

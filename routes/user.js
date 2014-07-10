var VALIDATE_URL = 'https://ilogin.ucweb.com/sso/serviceValidate',
    LOGIN_URL = 'https://ilogin.ucweb.com/sso/login',
    ENTRY_URL = 'http://10.1.88.176:3000/login';
var request = require('request');
var Q = require('q'),
    get = Q.nbind(request.get, request);

exports.login = function (req, res){
    var ticket = req.query.ticket;

    if (req.session && req.session.user) {  //已经登录
        console.log('已经登录！！！');
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
        req.session.user = RegExp.$1;
        console.log('user: ' + req.session.user);
        res.redirect('/');
    }).fail(function (err){
        console.log(err);
        res.redirect(LOGIN_URL + '?service=' + ENTRY_URL);
    })
}

exports.list = function(req, res){
    res.send("respond with a resource");
}

exports.middleware = function (req, res, next) {
    var user = req.session && req.session.user;
    if (!user) {    //如果没有登录
        console.log('not login');
        console.log(req.originalUrl);
        res.redirect('/login?from=' + req.originalUrl);
        return;
    }
    // console.log('user.middleware');
    return next();
}
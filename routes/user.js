var VALIDATE_URL  = 'https://ilogin.ucweb.com/sso/serviceValidate'
  , LOGIN_URL     = 'https://ilogin.ucweb.com/sso/login'
  , LOGOUT_URL    = 'https://ilogin.ucweb.com/sso/logout'
  , ENTRY_URL     = 'http://10.1.88.176:3000/login';

//统一登录测试地址
// var VALIDATE_URL = 'https://meet.ucweb.local:8445/sso/serviceValidate'
//   , LOGIN_URL = 'https://meet.ucweb.local:8445/sso/login'
//   , LOGOUT_URL = 'https://meet.ucweb.local:8445/sso/logout'
//   , ENTRY_URL = 'http://10.1.88.31:3000/login';

var request = require('request');
var Q = require('q')
  , get = Q.nbind(request.get, request);
var bll = require('../private/bll/user');

// 用户登录
exports.login = function(req, res) {
  var ticket = req.query.ticket;

  if (req.session && req.session.user) { //已经登录
    res.redirect(req.query.from || '/');
    return;
  }
  if (!ticket) { //没有令牌，跳转到oa登录页面
    res.redirect(LOGIN_URL + '?service=' + ENTRY_URL);
    return;
  }

  var url = VALIDATE_URL + '?service=' + ENTRY_URL + '&ticket=' + ticket;
  get(url).then(function(data) {
    var resp = data[0],
      body = data[1];

    var user = parseUser(body); //解析用户信息
    bll.login(user);

    req.session.user = user;
    res.redirect('/');
  }).fail(function(err) {
    console.log(err);
    res.redirect(LOGIN_URL + '?service=' + ENTRY_URL);
  })
}

//根据鉴权接口返回内容，解析用户信息
function parseUser (body) {
  var user = {};
  var regex = /\<cas\:cnname\>(.*)\<\/cas\:cnname\>/;
  if (!regex.test(body)) { //登录失败，跳转到oa登录页
    throw new Error('登录失败');
  }
  //登录成功，跳到首页
  user.alias = RegExp.$1;
  var regex2 = /\<cas\:uid\>(.*)\<\/cas\:uid\>/;
  if (!regex2.test(body)) { //登录失败，跳转到oa登录页
    throw new Error('登录失败');
  }
  user.name = RegExp.$1;
  return user;
}

// 用户注销
exports.logout = function(req, res) {
  req.session.user = null;
  res.redirect(LOGOUT_URL+'?service='+ENTRY_URL);
  // get(LOGOUT_URL).then(res.redirect(req.query.from || '/')).fail(res.send(200));
}

// 切换匿名模式
exports.anonymous = function (req, res){
  res.send(204);
}

exports.list = function(req, res) {
  res.send("respond with a resource");
}

exports.middleware = function(req, res, next) {
  var user = req.session && req.session.user;
  console.log('login:' + user);
  if (!user) { //如果没有登录
    console.log('not login');
    console.log(req.originalUrl);
    res.redirect(LOGIN_URL + '?service=' + ENTRY_URL);
    return;
  }
  // console.log('user.middleware');
  return next();
}

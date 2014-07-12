//首页
exports.index = function (req, res) {
  res.render('index', { title: '爱售网 售（show）出你的二手货！', user: req.session.user });}

//登录页
exports.login = function (req, res) {
  res.render('login', {title: '登录页'});
}

//商品详情页
exports.entity = function (req, res) {
  res.render('entity', { title: '商品页', user: req.session.user });
}

//发布页
exports.publish = function (req, res) {
  res.render('publish', { title: '发布页', user: req.session.user });
}

//用户页
exports.user = function (req, res) {
  res.render('user', { title: '用户页', user: req.session.user});
}

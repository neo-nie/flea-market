/*
 * GET publish page.
 */

exports.login = function(req, res){
  res.render('login', { title: '登录页' });
};
// 用户属性
// id, name, mobile, email, avatar_id, anonymous
var dal = require('../dal'),
    Q = require('q');

/**
 * 登陆
 * @param  {[type]} name     用户名，目前是邮箱前缀
 * @param  {[type]} alias    用户别名，目前是中文名
 * @return {[type]}          Promise 成功返回用户信息
 */
exports.login = function (name, alias){
  var deferred = Q.defer();

  var loginAt = new Date();
  var sql = 'insert into user(name, alias, login_at) values(?, ?, ?) on duplicate key update login_at=?';

  dal.query(sql, [name, alias, loginAt, loginAt], function (err, result){
    if (err) 
      deferred.reject(err);
    else
      deferred.resolve({'id': result.insertId, 'name': name, 'alias': alias, 'login_at': login_at});
  })

  return deferred.promise;
}

/**
 * 修改用户匿名属性
 * @param  {[type]} userId 用户标识
 * @param  {[type]} value 匿名属性值：true - 匿名、false - 实名
 * @return {[type]}       Promise 返回用户信息
 */
exports.anonymous = function (userId, value){
    var sql = 'update user set anonymous=? where id=?';
    return dal.query(sql, [value, userId]);
}
// 用户属性
// id, name, mobile, email, avatar_id, anonymous

/**
 * 修改用户匿名属性
 * @param  {[type]} userId 用户标识
 * @param  {[type]} value 匿名属性值：true - 匿名、false - 实名
 * @return {[type]}       Promise
 */
exports.anonymous = function (userId, value){
    var sql = 'update user set anonymous=? where id=?';
}
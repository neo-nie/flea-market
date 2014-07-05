// 图片属性 
// id、url、create_time、user_id、entity_id

/**
 * 上传图片
 * @param  {[type]} stream 上传图片流
 * @param  {[type]} userId 用户id
 * @return {[type]}        Promise
 */
exports.upload = function (stream, userId){
    var sql = 'insert into image(user_id, create_time, url) values(?, ?, ?)';
}
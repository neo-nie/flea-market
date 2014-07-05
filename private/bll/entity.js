// 商品属性
// id、name、catalog_id、desc、quality、price、
// create_time、update_time、
// user_id、anonymous
// images

/**
 * 发布转让信息
 * @param  {[type]} entity    商品 (name、catalog_id、desc、quality、price)
 * @param  {[type]} images    图片id列表
 * @param  {[type]} userId    用户id
 * @param  {[type]} anonymous 是否匿名：true - 匿名，默认为false
 * @return {[type]}           Promise
 */
exports.publish = function (entity, images, userId, anonymous) {
    // 1.上传图片到服务器，并获得图片id列表
    // 2.插入新商品
    var sql1 = 'insert into entity(name, catalog_id, desc, quality, price, create_time, user_id, anonymous) values(?, ?, ?, ?, ?, ?, ?, ?)';

    var sql2 = 'update image set entity_id=? where id=?';
}

/**
 * 更新商品
 * @param  {[type]} entity 商品
 * @return {[type]}        Promise
 */
exports.update = function (entity) {

}

/**
 * 竞拍商品
 * @param  {[type]} entityId  商品id
 * @param  {[type]} price     竞价
 * @param  {[type]} userId    用户id
 * @param  {[type]} anonymous 是否匿名：true - 匿名，默认为false
 * @return {[type]}           Promise
 */
exports.auction = function (entityId, price, userId, anonymous) {
    var sql = 'insert into auction(entity_id, price, create_time, user_id, anonymous) values(?, ?, ?, ?, ?)';
}

/**
 * 评论商品
 * @param  {[type]} entityId  商品id
 * @param  {[type]} content   评论内容
 * @param  {[type]} userId    用户id
 * @param  {[type]} anonymous 是否匿名：true - 匿名，默认为false
 * @return {[type]}           Promise
 */
exports.comment = function (entityId, content, userId, anonymous) {
    var sql = 'insert into comment(entity_id, content, create_time, user_id, anonymous) values(?, ?, ?, ?, ?)';
}

/**
 * 收藏商品、或取消收藏
 * @param  {[type]} entityId 商品id
 * @param  {[type]} valid    收藏是否有效：true - 收藏，false - 取消收藏
 * @param  {[type]} userId   用户id
 * @return {[type]}          Promise
 */
exports.favorite = function (entityId, valid, userId) {
    var sql = 'insert into(entity_id, create_time, valid, user_id) values(?, ?, ?, ?) ON DUPLICATE KEY UPDATE valid=?';
}
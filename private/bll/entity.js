// 商品属性
// id、name、catalog_id、desc、quality、price、
// create_time、update_time、
// user_id、anonymous
// images

var dal = require('../dal')
  , Q = require('q');
/**
 * 发布转让信息
 * @param  {[type]} entity    商品 (name、catalog_id、desc、quality、price)
 * @param  {[type]} imageIds  图片id列表
 * @param  {[type]} userId    用户id
 * @param  {[type]} anonymous 是否匿名：true - 匿名，默认为false
 * @return {[type]}           Promise
 */
exports.publish = function(entity, imageIds, userId, anonymous) {
  // 1.上传图片到服务器，并获得图片id列表
  // 2.插入新商品
  var sql1 = 'insert into entity(name, catalog_id, desc, quality, price, create_time, user_id, anonymous) values(?, ?, ?, ?, ?, ?, ?, ?)';
  var sql2 = 'update image set entity_id=? where id=?';

  dal.getConnection(function(err, connnection) {
    var beginTransaction = Q.nbind(connection.beginTransaction, connection)
      , query = Q.nbind(connection.query, connection)
      , commit = Q.nbind(connection.commit, connection);
    // var errorHandler = function (err){
    //     connection.rollback(function() { throw err; });
    // };

    return beginTransaction()
      .thenResolve(query(sql1, [entity.name, entity.catalog_id, entity.desc, entity.quality, entity.price, new Date(), userId, anonymous]))
      .then(function(result) {
        var promises = [];
        imageIds.forEach(function(item, index) {
          promises.push(query(sql2, [result.insertId, item]));
        })
        return Q.all(promises).then(console.log('success!'));
      }).fail(function(err) {
        connection.rollback(function() {
          throw err;
        });
      })
  });
}

/**
 * 更新商品
 * @param  {[type]} entity 商品
 * @return {[type]}        Promise
 */
exports.update = function(entity) {
  var sql = 'update entity set name=?, catalog_id=?, desc=?, quality=?, price=?, update_time=? where id=?';
  return dal.query(sql, [entity.name, entity.catalog_id, entity.desc, entity.quality, entity.price, new Date(), entity.id])
}

/**
 * 获得某种分类下的所有商品
 * @param  {[type]} catalogId [description]
 * @return {[type]}           [description]
 */
exports.list = function(catalogId) {

}

/**
 * 竞拍商品
 * @param  {[type]} entityId  商品id
 * @param  {[type]} price     竞价
 * @param  {[type]} userId    用户id
 * @param  {[type]} anonymous 是否匿名：true - 匿名，默认为false
 * @return {[type]}           Promise
 */
exports.auction = function(entityId, price, userId, anonymous) {
  var sql = 'insert into auction(entity_id, price, create_time, user_id, anonymous) values(?, ?, ?, ?, ?)';
  return dal.query(sql, [entityId, price, new Date(), userId, anonymous])
}

/**
 * 评论商品
 * @param  {[type]} entityId  商品id
 * @param  {[type]} content   评论内容
 * @param  {[type]} userId    用户id
 * @param  {[type]} anonymous 是否匿名：true - 匿名，默认为false
 * @return {[type]}           Promise
 */
exports.comment = function(entityId, content, userId, anonymous) {
  var sql = 'insert into comment(entity_id, content, create_time, user_id, anonymous) values(?, ?, ?, ?, ?)';
  return dal.query(sql, [entityId, content, new Date(), userId, anonymous])
}

/**
 * 收藏商品、或取消收藏
 * @param  {[type]} entityId 商品id
 * @param  {[type]} valid    收藏是否有效：true - 收藏，false - 取消收藏
 * @param  {[type]} userId   用户id
 * @return {[type]}          Promise
 */
exports.favorite = function(entityId, valid, userId) {
  var sql = 'insert into(entity_id, create_time, valid, user_id) values(?, ?, ?, ?) ON DUPLICATE KEY UPDATE valid=?';
  return dal.query(sql, [entityId, new Date(), valid, userId])
}

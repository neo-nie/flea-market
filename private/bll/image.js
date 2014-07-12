// 图片属性 
// id、url、create_time、user_id、entity_id

var dal = require('../dal')
  , Q = require('q');
var fs = require('fs')
  , path = require('path');

/**
 * 上传图片
 * @param  {[type]} file 上传图片文件
 * @param  {[type]} userId 用户id
 * @return {[type]}        Promise
 */
exports.upload = function (file, userId){
  var deferred = Q.defer();

  var fileName = new Date().getTime().toString()+'.jpg'
    , savepath = path.join('./public/img/entity',fileName);
  var is = fs.createReadStream(file.path)
    , os = fs.createWriteStream(savepath);
  var sql = 'insert into image(user_id, create_time, url) values(?, ?, ?)';

  is.pipe(os);
  is.on('end',function() {
    fs.unlinkSync(file.path);

    var url = '/img/entity/'+fileName
      , create_time = new Date();
    dal.query(sql, [userId, create_time, url], function (err, result){
      if (err)
        deferred.reject(err);
      else
        deferred.resolve({ 'id': '123', 'url': url });
    })
  });

  return deferred.promise;
}
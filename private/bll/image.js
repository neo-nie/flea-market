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
  var sql = 'insert into image(user_id, create_time, url) values(?, ?, ?)';
  var deferred = Q.defer();

  if (!file) {
    res.send({ status: 'failed', message: 'no file' });
    return;
  }

  var fileName = new Date().getTime().toString()+'.jpg';
  var savepath = path.join('./public/img/entity',fileName);
  var is = fs.createReadStream(file.path);
  var os = fs.createWriteStream(savepath);
  is.pipe(os);
  is.on('end',function() {
   // fs.unlinkSync(file.path);
    //res.send({ status: 'success', id: '123', url:'/img/entity/'+fileName});
  });

 /* fs.rename(file.path, savepath, function (err) {
    if (err) {
      deferred.reject(err);
    }
    var url = '/upload/' + uid + '/' + encodeURIComponent(filename);
    res.send({ status: 'success', id: id, url: url });
  });*/

  return deferred.promise;
}
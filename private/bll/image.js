// 图片属性 
// id、url、create_time、user_id、entity_id

var dal = require('../dal'),
    Q = require('q');
var fs = require('fs'),
    path = require('path');

/**
 * 上传图片
 * @param  {[type]} file 上传图片文件
 * @param  {[type]} userId 用户id
 * @return {[type]}        Promise
 */
exports.upload = function (file, userId){
    var sql = 'insert into image(user_id, create_time, url) values(?, ?, ?)';
    var deferred = Q.defer();

    fs.rename(file.path, savepath, function (err) {
        if (err) {
            deferred.reject(err);
        }
        var url = '/upload/' + uid + '/' + encodeURIComponent(filename);
        res.send({ status: 'success', id: id, url: url });
    });

    return deferred.promise;
}
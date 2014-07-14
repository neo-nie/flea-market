var fs = require('fs')
  , path = require('path');
var bll = require('../private/bll/image');

var imageDir = path.join(__dirname, 'public', 'img', 'entity');

/**
 * 上传图片到服务器，返回图片id和url
 * @param  {[type]}   req  [description]
 * @param  {[type]}   res  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.upload = function (req, res, next) {
  var user = req.session && req.session.user;
  if (!user) {
    res.send({ status: 'forbidden' });
    return;
  }
  var file = req.files && req.files.Filedata;
  var img = bll.upload(file, user.uid);
}
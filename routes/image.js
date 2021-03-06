var bll = require('../private/bll/image');

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
  if (!file) {
    res.send({ status: 'failed', message: 'no file' });
    return;
  }

  bll.upload(file, user.id).then(function(image){
    res.send({status: 'success', data: image});
  }).fail(function (err){
    res.send({status: 'error', error: err});
  })
}
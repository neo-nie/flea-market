var fs = require('fs'),
  path = require('path');

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
  /*   if (!user) {
   res.send({ status: 'forbidden' });
   return;
   }*/

  var file = req.files && req.files.Filedata;
  console.log(req.files)
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
    fs.unlinkSync(file.path);
    res.send({ status: 'success', id: '123', url:'/img/entity/'+fileName});
  });

}
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
    if (!user) {
        res.send({ status: 'forbidden' });
        return;
    }

    var file = req.files && req.files.image;
    if (!file) {
        res.send({ status: 'failed', message: 'no file' });
        return;
    }

    // fs.readFile(file.path, function (err, data) {
    //     // ...
    //     var newPath = __dirname + "/uploads/uploadedFileName";
    //     fs.writeFile(newPath, data, function (err) {
    //     res.redirect("back");
    //     });
    // });
    fs.rename(file.path, savepath, function (err) {
        if (err) {
            return next(err);
        }
        var url = '/upload/' + uid + '/' + encodeURIComponent(filename);
        res.send({ status: 'success', id: id, url: url });
    });
}
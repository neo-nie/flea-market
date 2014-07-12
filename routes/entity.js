var bll = require('../private/bll/entity');

// 发布商品
exports.publish = function (req, res) {
  var user = req.session && req.session.user;
  if (!user) {
    res.send({ status: 'forbidden' });
    return;
  }

}

// 竞拍商品
exports.auction = function (req, res) {
  var user = req.session && req.session.user;
  if (!user) {
    res.send({ status: 'forbidden' });
    return;
  }

}

// 评论商品
exports.comment = function (req, res) {
  var user = req.session && req.session.user;
  if (!user) {
    res.send({ status: 'forbidden' });
    return;
  }
}

// 收藏商品
exports.favorite = function (req, res) {
  var user = req.session && req.session.user;
  if (!user) {
    res.send({ status: 'forbidden' });
    return;
  }
}
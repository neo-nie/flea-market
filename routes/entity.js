var bll = require('../private/bll/entity');

// 发布商品
exports.publish = function (req, res) {
  var user = req.session && req.session.user;
  if (!user) {
    res.send({ status: 'forbidden' });
    return;
  }

  var entity = {
      'name': req.body.name,
      'catalog_id': req.body.catalogId,
      'desc': req.body.desc,
      'quality': req.body.quality,
      'price': req.body.price,
      'create_time': new Date()
  };
  var userId = user.id 
    , anonymous = user.anonymous,
    , imageIds = req.body.imageIds;

  bll.publish(entity, imageIds, userId, anonymous)
    .then(function (entity){
      res.send({status:'success', data: entity});
    }).fail(function (err){
      res.send({status:'error', data: error});
    })
}

// 竞拍商品
exports.auction = function (req, res) {
  var user = req.session && req.session.user;
  if (!user) {
    res.send({ status: 'forbidden' });
    return;
  }

  var entityId = req.body.entityId
    , price = req.body.price;
    , userId = user.id 
    , anonymous = user.anonymous;

  bll.auction(entityId, price, userId, anonymous)
    .then(function (auction){
      res.send({status:'success', data: auction});
    }).fail(function (err){
      res.send({status:'error', data: error});
    })
}

// 评论商品
exports.comment = function (req, res) {
  var user = req.session && req.session.user;
  if (!user) {
    res.send({ status: 'forbidden' });
    return;
  }

  var entityId = req.body.entityId
    , content = req.body.content;
    , userId = user.id 
    , anonymous = user.anonymous;

  bll.comment(entityId, content, userId, anonymous)
    .then(function (comment){
      res.send({status:'success', data: comment});
    }).fail(function (err){
      res.send({status:'error', data: error});
    })
}

// 收藏商品
exports.favorite = function (req, res) {
  var user = req.session && req.session.user;
  if (!user) {
    res.send({ status: 'forbidden' });
    return;
  }

  var entityId = req.body.entityId
    , valid = req.body.valid;
    , userId = user.id 
    , anonymous = user.anonymous;

  bll.favorite(entityId, valid, userId, anonymous)
    .then(function (favorite){
      res.send({status:'success', data: favorite});
    }).fail(function (err){
      res.send({status:'error', data: error});
    })
}
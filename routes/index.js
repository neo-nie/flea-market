//首页
exports.index = function (req, res){
    res.render('index', { title: '跳蚤街' });
}

exports.login = function (req, res) {
    res.render('login', { title: '登录页' });
}

   res.render('index', { title: '爱售网 售（show）出你的二手货！' 
});

exports.entity = function (req, res){
    res.render('entity', { title: '商品页' });
}//发布页
exports.publish = function (req, res){
    res.render('publish', { title: '发布页' });
}

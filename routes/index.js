//首页
exports.index = function (req, res){
    res.render('index', { title: '跳蚤街' });
}

exports.login = function (req, res) {
    res.render('login', { title: '登录页' });
}

exports.entity = function (req, res){

}

//发布页
exports.publish = function (req, res){

}
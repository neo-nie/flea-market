exports.getItem = function (req, res, next) {

}

exports.getList = function (req, res, next) {

}

exports.publish = function (req, res, next) {
    if (!req.session || !req.session.user) {
        res.send({ status: 'forbidden' });
        return;
    }

}
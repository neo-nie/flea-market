exports.login = function (req, res){
    var username = req.body.username,
        password = req.body.password;

}

exports.list = function(req, res){
  res.send("respond with a resource");
};
/*
 * GET publish page.
 */

exports.publish = function(req, res){
    res.render('publish', { title: '发布页' });
};
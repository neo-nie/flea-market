var option = {
    host     : '10.1.72.154',
    port     : 3306,
    user     : 'root',
    password : 'root',
    database : 'flea',
    connectionLimit: 10
};
var mysql = require('mysql'),
    pool = mysql.createPool(option);
/*var Q = require('q');

pool.query('use ' + option.database);
exports.query = Q.nbind(pool.query, pool);
exports.getConnection = Q.nbind(pool.getConnection, pool);

console.log(module.parent.filename);*/

// connection.config.queryFormat = function (query, values) {
//     if (!values) return query;
//     return query.replace(/\:(\w+)/g, function (txt, key) {
//         if (values.hasOwnProperty(key)) {
//             return this.escape(values[key]);
//         }
//         return txt;
//     }.bind(this));
// };

// connection.connect();
// connection.query('use database');

// var sql = "select * from table";
// connection.query(sql, null, function(err, rows, fields) {
//     connection.end();
// })
// var mysql = require('mysql');

// var sql = 'insert into user(name, alias, login_at) values(?, ?, ?) on duplicate key update login_at=?';
// var name = 'niehl'
//   , alias = '聂红亮'
//   , login_at = new Date();
// values = [name, alias, login_at, login_at];

// console.log(mysql.format(sql, [name, alias, login_at, login_at]));

var option = {
    host     : '10.1.72.154',
    port     : 3306,
    user     : 'root',
    password : 'root',
    database : 'flea',
    connectionLimit: 10
};
var mysql      = require('mysql'),
    connection = mysql.createConnection(option);
var Q = require('q');

var beginTransaction = Q.nbind(connection.beginTransaction, connection),
    query = Q.nbind(connection.query, connection),
    commit = Q.nbind(connection.commit, connection),
    rollback = Q.nbind(connection.rollback, connection);

query('select * from user where id=1', function (err, result){
  if (result.length > 0)
  console.log(result[0]);
})

// beginTransaction().then()

// var xml2js = require('xml2js');

// var xml = "<cas:serviceResponse xmlns:cas='http://www.yale.edu/tp/cas'> \
//     <cas:authenticationSuccess> \
//         <cas:user>niehl</cas:user> \
//         <cas:attributes> \
//     \
//                     <cas:uid>niehl</cas:uid> \
// \
//                     <cas:username>niehl</cas:username> \
// \
//                     <cas:cnname>聂红亮</cas:cnname> \
// \
//         </cas:attributes> \
// \
// \
//     </cas:authenticationSuccess> \
// </cas:serviceResponse>";
// xml2js.parseString(xml, function (err, result){
//     console.log(result['cas:serviceResponse']['cas:authenticationSuccess']);
// })

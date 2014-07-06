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

beginTransaction().then()

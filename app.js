var express = require('express'),
    app = express();
var http = require('http'),
    path = require('path');

/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var login = require('./routes/login');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
// app.use(express.bodyParser());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.logger('dev'));
    app.use(express.errorHandler());
}

var routes = require('./routes');
var user = require('./routes/user'),
    entity = require('./routes/entity'),
    image = require('./routes/image');
    
app.get('/', routes.index);
app.get('/login',routes.login);
app.get('/entity', routes.entity);
app.get('/publish', routes.publish);
app.get('/users', user.list);
app.get('/publish',routes.publish);

var multipart = require('connect-multiparty');
app.post('/api/upload', multipart(),  image.upload);
app.post('/api/publish', entity.publish);
// app.get('/api/entity', entity.getItem);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var express = require('express');
var monk = require('monk');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');



var routes = require('./routes/registration');
var mongo = require('mongodb').mongodb;
var db = monk('localhost:27017/standup');


var expressSession = require('express-session');

var server = express();
server.set('port', process.env.PORT || 5000);
//Initialising session
server.use(cookieParser("jai", {signed : true}));

server.use(expressSession({secret: 'startup',
resave: false,
saveUninitialized: true}));

/*server.set('views', path.join(__dirname, 'public'));
server.set('view engine', 'jade');
*/
server.use(express.static(__dirname + '/public'));

server.use(bodyParser.urlencoded({'extended': 'true'}));
server.use(bodyParser.json());
server.use(bodyParser.json({type: 'application/vnd.api+json'}));

server.use(function(req, res, next){
	req.db = db;
	next();
});

server.use('/', routes);

/*server.use(function(req, res, next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});*/


server.listen(server.get('port'));
console.log("Server Listening on " + server.get('port'));
module.exports = server;

/* To-Do
1. Finish Back-end
2. Deploy on Heroku
3. Finish Front-end
4. Deploy on Heroku
5. Test Integration
6. Deploy on Heroku
*/
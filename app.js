
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , vacancy = require('./routes/vacancy')
  , http = require('http')
  , path = require('path')
  , config = require('config')
  , mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://'+config.mongoose.hostname+'/'+config.mongoose.dbname);
mongoose.connection.on('open', function() {
  console.log('Connected to Mongoose');
});

app.configure(function(){
  app.set('port', process.env.PORT || config.server.port);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

// Vacancy list
app.get('/vacancies.:format?',      vacancy.list);
app.post('/vacancies.:format?',     vacancy.add);
app.get('/vacancies/:id.:format?',  vacancy.get);
app.put('/vacancies/:id.:format?',  vacancy.update);
app.del('/vacancies/:id.:format?',  vacancy.delete);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

// exports for testing
module.exports = app;

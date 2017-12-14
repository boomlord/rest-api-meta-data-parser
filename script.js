var request = require('request'), 
	bodyParser = require('body-parser');
var og = require('open-graph');

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/parserRoute');
routes(app);


app.listen(port);

console.log('Server started on: ' + port);

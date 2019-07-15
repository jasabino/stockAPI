'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var db = require('./config/db');
var bodyParser = require('body-parser');
const yaml = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = yaml.load('./api/swagger/swagger.yaml');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

process.on('uncaughtException', function(err) {
    console.log( " UNCAUGHT EXCEPTION " );
    console.log( "[Inside 'uncaughtException' event] " + err.stack || err.message );
});

app.use(bodyParser.json());

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  console.log('curl http://127.0.0.1:' + port + '/');
});
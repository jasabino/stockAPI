'use strict';

// Bring Mongoose into the app
var mongoose = require( 'mongoose' );

var env = require('node-env-file');
env(__dirname + '/.env');

// Build the connection string
var server = process.env.DBSERVER;
var port = process.env.DBPORT;
var db = process.env.DBNAME;
var username = process.env.DBUSER;
var password = process.env.DBPASSW;
var auth='';
if (username !== undefined && username !== '') {
    auth = username+':'+password+'@';
}

var dbURI = 'mongodb://'+auth+server+':'+port+'/'+db;

// Create the database connection
mongoose.connect(dbURI, { useMongoClient: true });

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});

// BRING IN YOUR SCHEMAS & MODELS

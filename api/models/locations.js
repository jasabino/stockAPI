'use strict';

var mongoose = require('mongoose');

var locationsSchema = new mongoose.Schema(
    {
       // _id: mongoose.Schema.Types.ObjectId,
        id: Number,
        name: String,
        location: String,
        dimension: String
    }, {versionKey: false }
    
);

var locations = mongoose.model('locations', locationsSchema);
module.exports = locations;
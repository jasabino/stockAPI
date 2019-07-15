'use strict';

var mongoose = require('mongoose');

var itemsSchema = new mongoose.Schema(
    {
       // _id: mongoose.Schema.Types.ObjectId,
        id: Number,
        name: String,
        quantity: Number,
        unit: String,
        expirationDate: String,
        picture: String,
        location: Number,
        user: Number,
    }, {versionKey: false }
    
);

var items = mongoose.model('items', itemsSchema);
module.exports = items;
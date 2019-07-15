'use strict';

var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema(
    {
        //_id: mongoose.Schema.Types.ObjectId,
        id: Number,
        name: String
        email: String
    }, {versionKey: false }
);

var users = mongoose.model('users', usersSchema);
module.exports = users;
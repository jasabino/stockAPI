'use strict';

// Models
var sequences = require('../models/sequences');

module.exports = {
  getSuccessResponse:getSuccessResponse,
  getErrorResponse:getErrorResponse,
  getNextSequenceValue:getNextSequenceValue
}


// Generate a success response json
function getSuccessResponse(object){
    return {
        "success": true,
        "response": object,
        "errors": []
    };
}

// Generate an error response json
function getErrorResponse(errors){

    return {
        "success": false,
        "response": {},
        "errors": errors
    };
}

function getNextSequenceValue(sequenceName){
    return sequences.findOneAndUpdate({ "_id" : sequenceName }, {$inc:{sequence_value:1}},{returnOriginal: false});
}

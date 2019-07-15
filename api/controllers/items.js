'use strict';

// Models
var items = require('../models/items');
// Other imports
var utilFunctions = require('../functions/util');

module.exports = {
  addItem: addItem,
  getItem: getItem
};

function addItem(req, res){
	var item = req.swagger.params.item.value;

  utilFunctions.getNextSequenceValue("itemId").then(function (id) {
      item.id = id.sequence_value;
      item.location = null;
      item.user = null;

      items.create(item, function (err, row) {
          if (err) {
              console.error('#addItem: ', err);
              res.json(utilFunctions.getErrorResponse([{
                  "code": "1001",
                  "message": "Error adding the item " + item.name
              }]));
          }
          else {
              res.json(utilFunctions.getSuccessResponse({"id": row.id}));
          }
      });

  }).catch(function (err) {
      console.log("#addItem - getNextSequenceValue", err);
      res.json(utilFunctions.getErrorResponse([{
          "code": "1001",
          "message": "Error adding the item " + item.name
      }]));
  });
}

function getItem(req,res){
	var id = req.swagger.params.id.value;

	items.findOne({"id": id}, {_id: false }, function (err, item) {
      if (err) {
          res.json(utilFunctions.getErrorResponse([{
              "code": "1000",
              "message": "Item not found"
          }]));
      } else {
          res.json(utilFunctions.getSuccessResponse({"item": item}));

      }
  });
}

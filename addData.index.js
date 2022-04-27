
'use strict';

// Change Id from being uuid.v1() to event.Id
var AWS = require('aws-sdk'),
	//uuid = require('uuid'),
	documentClient = new AWS.DynamoDB.DocumentClient(); 

exports.addData = function(event, context, callback){
	var params = {
		Item : {
			"theDate" : event.theDate,
			"cases": event.cases,
			"hospitalized" : event.hospitalized,
			"inICU": event.inICU
		},
		TableName : process.env.TABLE_NAME
	};
	documentClient.put(params, function(err, data){
		callback(err, data);
	});
}

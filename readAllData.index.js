'use strict';

var AWS = require('aws-sdk'),
	documentClient = new AWS.DynamoDB.DocumentClient(); 

exports.readAllData = function(event, context, callback){
	if (event.Id) {
		var params = {
			TableName : process.env.TABLE_NAME,
			FilterExpression : 'theDate = :this_id',
			ExpressionAttributeValues : {':this_id' : event.Id}
		};
	} else {
		var params = {
			TableName : process.env.TABLE_NAME
		};
	};
	
	documentClient.scan(params, function(err, data){
		if(err){
		    callback(err, null);
		}else{
		    callback(null, data.Items);
		}
	});
}


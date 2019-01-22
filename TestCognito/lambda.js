let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
let SL_AWS = require('slappforge-sdk-aws');
const rds = new SL_AWS.RDS(connectionManager);
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
exports.handler = function (event, context, callback) {
	cognito_idp.listUsers({
		UserPoolId: process.env.UserPoolId_cognitoKTestCognito,
		Filter: 'email="kumudika+@adroitlogic.com"'
	}, function (error, data) {
		if (error) {
			// implement error handling logic here
			console.log("Error occured when list");
			throw error;
		}
		// your logic goes within this block
		else {
			console.log("Success list");
			console.log(data);
		}
	});
	cognito_idp.adminGetUser({
		UserPoolId: process.env.UserPoolId_cognitoKTestCognito, /* required */
		Username: "Kumudika" /* required */
	}, function (error, data) {
		if (error) {
			// implement error handling logic here
			console.log("Error occured when GET");
			throw error;
		}
		// your logic goes within this block
		else {
			console.log("Success GET");
			console.log(data);
		}
	});
	cognito_idp.adminEnableUser({
		UserPoolId: process.env.UserPoolId_cognitoKTestCognito, /* required */
		Username: "Kumudika" /* required */
	}, function (error, data) {
		if (error) {
			// implement error handling logic here
			console.log("Error occured when Enable");
			throw error;
		}
		// your logic goes within this block
		else {
			console.log("Success Enable");
			console.log(data);
		}
	});

	// You must always end/destroy the DB connection after it's used
	rds.beginTransaction({
		instanceIdentifier: 'KTestCognitor'
	}, function (error, connection) {
		if (error) { throw err; }
		connection.end();
	});

	callback(null, 'Successfully executed');
}
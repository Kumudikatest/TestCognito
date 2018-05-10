let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
exports.handler = function (event, context, callback) {
	cognito_idp.listUsers({
		UserPoolId: process.env.UserPoolId_cognitoKTestCognito, 
		Filter: 'email="kumudika@adroitlogic.com"'
	}, function (error, data) {
		if (error) {
			// implement error handling logic here
			throw error;
		}
		// your logic goes within this block
		else {
			console.log(data);
		}
	});



	callback(null, 'Successfully executed');
}
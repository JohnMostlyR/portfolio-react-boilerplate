const isEmail = require('validator/lib/isEmail');
const isLength = require('validator/lib/isLength');

exports.handler = function(event, context, callback) {
  const {
    subject = '',
    message = '',
    name = '',
    email = '',
  } = event.queryStringParameters;
  const validationResults = {};

  if (!isLength(subject, { min: 3, max: 50 })) {
    validationResults.subject = 'A subject is required.';
  }

  if (!isLength(message, { min: 3, max: 50 })) {
    validationResults.message = 'A message is required.';
  }

  if (!isLength(name, { min: 2, max: 50 })) {
    validationResults.name = 'Your name is required.';
  }

  if (!isEmail(email)) {
    validationResults.email = 'Your email address is required.';
  }

  if (Object.keys(validationResults).length) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify(validationResults),
    });
  } else {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    });
  }
};

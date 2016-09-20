'use strict';

// Your first function handler
module.exports.hello = (event, context, cb) => cb(null,
  { message: 'Go Serverless from Adrian' }
);

// You can add more handlers here, and reference them in serverless.yml

const AWS = require('aws-sdk');
// var S3 = require('aws-sdk/clients/s3'); // TODO: ???

require('dotenv').config();

const environment = process.env.NODE_ENV || 'local';

if (environment === 'test') {
  AWS.config.update({
    endpoint: 'http://localhost:9090',
    s3ForcePathStyle: true,
    signatureVersion: 'v3'
  });
} else if (environment === 'local') {
  AWS.config.update({
    region: '',
    credentials: new AWS.EnvironmentCredentials('AWS'),
  });
}

// connect
const s3 = new AWS.S3();
if (environment === 'test') {
  // create local Bucket
  console.log('Using test environment!');
  async () => await s3.createBucket({Bucket: 'testing'}, (err, data) => {
    if (err) console.error("Error", err); else console.log("Success, local Bucket was created!");
  }).promise();  
}

module.exports = s3;
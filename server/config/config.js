const path = require('path');
const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, '../../.env'),
});

module.exports = {
  aws_local_config: {
    region: 'us-east-1',
    endpoint: 'http://localhost:8000',
  },
  aws_remote_config: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ca-central-1',
  },
};

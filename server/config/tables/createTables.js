const aws = require('aws-sdk');
const fs = require('fs');
const config = require('../config.js');

aws.config.update(config.aws_local_config);

const ddb = new aws.DynamoDB();

const allTables = [];

allTables.forEach((table) => {
  ddb.createTable(table, (err, data) => {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Table Created', data);
    }
  });
});

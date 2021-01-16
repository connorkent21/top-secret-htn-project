const aws = require('aws-sdk');
const fs = require('fs');
const config = require('../config.js');

aws.config.update(config.aws_local_config);

const ddb = new aws.DynamoDB();

const credentialsTable = JSON.parse(
  fs.readFileSync('credentials.json', 'utf8')
);
const homiecirclesTable = JSON.parse(
  fs.readFileSync('homiecircles.json', 'utf8')
);
const usersTable = JSON.parse(
  fs.readFileSync('users.json', 'utf8')
);

const allTables = [credentialsTable, homiecirclesTable, usersTable];

allTables.forEach((table) => {
  ddb.createTable(table, (err, data) => {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Table Created', data);
    }
  });
});

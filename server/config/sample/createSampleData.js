const aws = require('aws-sdk');
const fs = require('fs');
const config = require('../config.js');
const path = require('path');

const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, '../../../.env'),
});

aws.config.update(config.aws_local_config);

const docClient = new aws.DynamoDB.DocumentClient();

console.log('Importing sample data into DynamoDB. Please wait...');

allEncounters.forEach((encounter) => {
  const params = {
    TableName: 'encounters',
    Item: { ...encounter },
  };

  docClient.put(params, (err, data) => {
    if (err) {
      console.error(
        'Unable to add encounter',
        encounter.ArchiveURI,
        '. Error JSON:',
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log('PutItem succeeded:', encounter.ArchiveURI);
    }
  });
});

allUnits.forEach((unit) => {
  const params = {
    TableName: 'units',
    Item: { ...unit },
  };

  docClient.put(params, (err, data) => {
    if (err) {
      console.error(
        'Unable to add unit',
        unit.SerialNumber,
        '. Error JSON:',
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log('PutItem succeeded:', unit.SerialNumber);
    }
  });
});

allUsers.forEach((user) => {
  const params = {
    TableName: 'users',
    Item: { ...user },
  };

  docClient.put(params, (err, data) => {
    if (err) {
      console.error(
        'Unable to add unit',
        user.FirstName,
        '. Error JSON:',
        JSON.stringify(err, null, 2)
      );
    } else {
      console.log('PutItem succeeded:', user.FirstName);
    }
  });
});

// Generate credentials based on environment variables
console.log('env variables: ', process.env.LOGIN_ID);
const params = {
  TableName: 'credentials',
  Item: {
    LoginId: process.env.LOGIN_ID,
    Password: process.env.PASSWORD,
    User: '0909d026-6b91-4230-9412-c927a995def3',
  },
};

docClient.put(params, (err, data) => {
  if (err) {
    console.error(
      'Unable to add unit',
      data,
      '. Error JSON:',
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log('PutItem succeeded:', data);
  }
});

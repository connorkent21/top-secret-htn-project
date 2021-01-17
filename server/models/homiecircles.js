const dynamoose = require('dynamoose');
const User = require('./users');
const { v4: uuidv4 } = require('uuid');

const HomieCircleSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      default: uuidv4(),
    },
    name: String,
    users: {
      type: Set,
      schema: [User], // Set is only valid if `User` does not have a `rangeKey`
    },
    genres: {
      type: Set,
      schema: [String]
    },
  },
  {
    timestamps: {
      createdAt: ['createDate', 'creation'],
      updatedAt: ['updateDate', 'updated'],
    },
  }
);

module.exports = dynamoose.model('homiecircles', HomieCircleSchema);

const dynamoose = require('dynamoose');
const { v4: uuidv4 } = require('uuid');

const UserSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
      default: uuidv4(),
    },
    firstName: String,
    lastName: String,
  },
  {
    timestamps: {
      createdAt: ['createDate', 'creation'],
      updatedAt: ['updateDate', 'updated'],
    },
  }
);

module.exports = dynamoose.model('users', UserSchema);

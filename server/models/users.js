const dynamoose = require('dynamoose');
const { v4: uuidv4 } = require('uuid');

const UserSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      hashKey: true,
    },
  },
  {
    timestamps: {
      createdAt: ['createDate', 'creation'],
      updatedAt: ['updateDate', 'updated'],
    },
  }
);

module.exports = dynamoose.model('users', UserSchema);

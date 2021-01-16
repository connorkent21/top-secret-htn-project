const dynamoose = require('dynamoose');
const User = require('./users');

const CredentialsSchema = new dynamoose.Schema(
  {
    loginId: {
      type: String,
      required: true,
      hashKey: true,
    },
    password: {
      type: String,
      required: true,
    },
    user: User,
  },
  {
    timestamps: {
      createdAt: ['createDate', 'creation'],
      updatedAt: ['updateDate', 'updated'],
    },
  }
);

module.exports = dynamoose.model('credentials', CredentialsSchema);

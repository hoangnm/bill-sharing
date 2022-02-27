const { getObjectId } = require('mongo-seeding');

const users = [
  {
    id: getObjectId('user1'),
    firstName: 'hoang',
    lastName: 'nguyen',
    email: 'test@gmail.com',
  },
  {
    id: getObjectId('user2'),
    firstName: 'kelvin',
    lastName: 'nguyen',
    email: 'abc@gmail.com',
  },
];

module.exports = users;

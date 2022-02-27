const { getObjectId, getObjectIds } = require('mongo-seeding');

const bills = [
  {
    id: getObjectId('bill1'),
    participants: getObjectIds(['user1', 'user2']),
    paidBy: getObjectId('user1'),
    description: 'pay for the trip 1',
    amount: 1000,
  },
];

module.exports = bills;

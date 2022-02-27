const { getObjectId } = require('mongo-seeding');

const bills = [
  {
    id: getObjectId('bill1'),
    participants: [
      {
        userId: getObjectId('user2'),
        paid: false,
      },
    ],
    owner: getObjectId('user1'),
    tripId: getObjectId('trip1'),
    description: 'pay for the trip 1',
    amount: 1000,
  },
];

module.exports = bills;

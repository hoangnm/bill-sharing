const { getObjectId } = require('mongo-seeding');

const trips = [
  {
    id: getObjectId('trip 1'),
    description: 'trip 1',
    bills: [
      {
        id: getObjectId('bill1'),
        participants: [
          {
            userId: getObjectId('user2'),
            paid: false,
          },
        ],
        owner: getObjectId('user1'),
        description: 'bill for the trip 1',
        amount: 1000,
      },
    ],
  },
];

module.exports = trips;

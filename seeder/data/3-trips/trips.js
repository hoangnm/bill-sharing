const { getObjectId, getObjectIds } = require('mongo-seeding');

const trips = [
  {
    id: getObjectId('trip 1'),
    description: 'trip 1',
  },
];

module.exports = trips;

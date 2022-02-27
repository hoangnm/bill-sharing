const { Seeder } = require('mongo-seeding');
const path = require('path');

const config = {
  database: {
    protocol: 'mongodb',
    host: '127.0.0.1',
    port: 27017,
    name: 'bill-sharing',
    username: 'hoangnm',
    password: '123456',
    options: {
      authSource: 'admin',
    },
  },
  dropDatabase: true,
};
const seeder = new Seeder(config);

const collections = seeder.readCollectionsFromPath(
  path.resolve('./seeder/data'),
  {
    extensions: ['js', 'json', 'ts'],
    transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
  },
);

const init = async () => {
  console.log('initializing seed data');
  try {
    await seeder.import(collections);
  } catch (err) {
    console.error(err);
  }
};

init();

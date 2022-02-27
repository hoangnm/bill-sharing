## Description

Bill sharing service

## Installation

```bash
$ npm install
```

## Required env files
Create the .db.env file in the root folder of the project. The example config of the file:
```
MONGO_INITDB_ROOT_USERNAME=hoangnm
MONGO_INITDB_ROOT_PASSWORD=123456
MONGO_INITDB_DATABASE=admin
```

Create the .env file in the root folder of the project. The example config of the file:
```
DB_HOST=mongodb
DB_PORT=27017
DB_USER=hoangnm
DB_PASS=123456
DB_NAME=bill-sharing
```
## Running mongodb using docker
```bash
$ mkdir data/db
$ docker-compose -f docker-compose.db.yml up
```

## Initializing seed data
Go to seeder/index.js to modify the database configurations before running the commands. This should be improved later to get the config from env file instead.
```bash
$ npm run seed:init
```
The seed data helps to build up some users data from the beginning, while the service is not having the api to create a user at the moment.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Exploring APIs with swagger
Opening http://localhost:3000/api to explore the APIs after running the app from localhost.

To temporary mimic the authenticated user, the userid header is used as a jwt token.

## TODO
- [ ] Splitting bills to a seperate module

- [ ] Api to get trips of a user id

- [ ] Api to pay the debt of a bill

- [ ] Add more test cases

- [ ] Building authentication flow and generate a jwt token
 
- [ ] Adding logging to monitor the service

- [ ] Adding healthcheck api

- [ ] Applying clean architecture

- [ ] Setting up CI/CD pipeline
## Description

Bill sharing service

## Installation

```bash
$ npm install
```

## Running mongodb using docker
```bash
$ mkdir data/db
$ docker-compose -f docker-compose.db.yml up
```

## Initializing seed data
```bash
$ npm run seed:init
```

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

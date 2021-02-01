Middleware API used by API Particulier to transform legacy API keys into their hash before reaching Gravitee.

## Installation

```bash
$ npm install
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

## Migrations

```bash
# Generate a migration named TokenTable
$ npm run typeorm migration:generate -- -n TokenTable

# Run migrations
$ npm run typeorm migration:run
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

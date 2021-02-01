API used by API Particulier to process legacy API keys.

## Goal

The aim of this small API is to be able to control which API keys Gravitee can receive.

Since we don't know the legacy API keys values, we check if we know them by their hash, and if it's the case, we replace the API Key with its hash.

This way, we can configure in Gravitee the new API keys directly, and the legacy API keys hashes.

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

## Installation

```bash
$ npm install
```

## Running the Database

```bash
docker run --name test_app -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -e POSTGRES_DB=postgresdb -d -v "$(pwd)":/app postgres
```

## Running the app

```bash
# init env
cp .env-example .env

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Init db

```bash
# run first migration
$ npx prisma migrate dev --name init  
```

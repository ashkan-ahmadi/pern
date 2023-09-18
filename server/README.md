# Server

This includes all the server files.

## Requirements

- Nodejs: https://nodejs.org/en
- Postgres: https://www.postgresql.org/

## Set up

1. Duplicate `env-example.json` and rename to `env.json` (MUST NOT BE COMMITTED TO GIT). Fill out with your Postgres details
1. Run `npm install` to install all dependencies and packages
1. Open `db` folder in terminal and run `knex migrate:up` until you reach the top
1. Add NODE_ENV to your environment variables:

   - Windows: Go to System Properties > Environment Variables > System Variables > New > Name: 'NODE_ENV' with the value 'development' (without '')
   - Macintosh: Go to
   - Linux: Go to

1. Run `npm start` to start the server

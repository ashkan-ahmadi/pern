const env = require('./env.json')
const pg = require('pg')

const pool = new Pool({
  user: env?.db?.user,
  password: env?.db?.password,
  host: env?.db?.host,
  port: env?.db?.port,
  database: env?.db?.database,
})

module.exports = pool

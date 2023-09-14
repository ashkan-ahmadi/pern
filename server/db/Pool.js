const env = require('../env.json')
const Pool = require('pg').Pool

const pool = new Pool({
  user: env?.db?.user,
  password: env?.db?.password,
  host: env?.db?.host,
  port: env?.db?.port,
  database: env?.db?.database,
})

module.exports = pool

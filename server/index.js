const env = require('./env.json')

/* EXPRESS INITIATION */
const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

/* EXPRESS MIDDLEWARES */
app.use(cors())
app.use(express.json())

/* APP ROUTES */
/* CREATE a todo */

/* GET all todos */

/* GET a todo */

/* UPDATE a todo */

/* DELETE a todo */

const SERVER_PORT = env?.port || 5000
app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`)
})

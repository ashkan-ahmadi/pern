const env = require('./env.json')

/* EXPRESS INITIATION */
const express = require('express')
const app = express()
const cors = require('cors')

/* EXPRESS MIDDLEWARES */
app.use(cors())
app.use(express.json())

const SERVER_PORT = env?.port || 5000
app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`)
})

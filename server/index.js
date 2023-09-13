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

app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body

    if (!description) {
      res.status(400).json({
        success: false,
        message: 'Invalid data',
      })
    }
    const newTodo = await pool.query('INSERT INTO todo (description) VALUES ($1)', [description])

    res.status(201).json({
      success: true,
      ...newTodo,
    })
  } catch (error) {
    console.error(error.message)
  }
})

/* GET all todos */

/* GET a todo */

/* UPDATE a todo */

/* DELETE a todo */

const SERVER_PORT = env?.port || 5000
app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`)
})

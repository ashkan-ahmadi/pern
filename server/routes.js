const express = require('express')
const router = express.Router()
const pool = require('./db')

/* CREATE a new todo */
router.post('/todos', async (req, res) => {
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

router.get('/todos', async (req, res) => {
  try {
    const todos = await pool.query('SELECT * from todo')

    res.status(200).json({
      success: true,
      ...todos,
    })
  } catch (error) {
    console.error(error.message)
  }
})
/* GET a todo */

/* UPDATE a todo */

/* DELETE a todo */

module.exports = router

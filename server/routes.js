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
    const newTodo = await pool.query('INSERT INTO todo (description) VALUES ($1) RETURNING todo_id, description', [description])

    res.status(201).json({
      success: true,
      count: newTodo?.rowCount,
      data: newTodo?.rows,
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
      count: todos?.rowCount,
      data: todos?.rows,
    })
  } catch (error) {
    console.error(error.message)
  }
})

/* GET a todo */
router.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params // this must match whatever you put as dynamic route
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id])

    res.status(200).json({
      success: true,
      count: todo?.rowCount,
      data: todo?.rows,
    })
  } catch (error) {
    console.error(error.message)
  }
})

/* UPDATE a todo */
router.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params // this must match whatever you put as dynamic route
    const { description } = req.body
    if (!description) {
      res.status(400).json({
        success: false,
        message: 'Invalid data',
      })
    }
    const todo = await pool.query('UPDATE todo SET description=$1 WHERE todo_id = $2 RETURNING *', [description, id])

    res.status(200).json({
      success: true,
      count: todo?.rowCount,
      data: todo?.rows,
    })
  } catch (error) {
    console.error(error.message)
  }
})

/* DELETE a todo */
router.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params // this must match whatever you put as dynamic route
    const todo = await pool.query('DELETE FROM todo WHERE todo_id = $1 RETURNING *', [id])

    res.status(200).json({
      success: true,
      count: todo?.rowCount,
    })
  } catch (error) {
    console.error(error.message)
  }
})

module.exports = router

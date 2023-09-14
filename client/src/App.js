import { useState, useEffect } from 'react'

import ListTodos from './components/ListTodos'

import InputTodo from './components/InputTodo'
import env from './env'

const App = () => {
  const [todos, setTodos] = useState([])

  const getTodos = async () => {
    try {
      const host = `${env?.api?.host}/todos`
      const request = await fetch(host)
      const response = await request.json()

      if (!response?.success) throw Error('There was a problem fetching the todos.')

      setTodos(response?.data)
    } catch (error) {
      console.error('error onSubmit', error)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <>
      <main className="container">
        <h1 className="text-center mt-5">TODO</h1>
        <InputTodo todos={todos} setTodos={setTodos} getTodos={getTodos} />
        <ListTodos todos={todos} />
      </main>
    </>
  )
}

export default App

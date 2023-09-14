import { useState } from 'react'
import env from '../env'

const InputTodo = props => {
  const { getTodos } = props
  const [description, setDescription] = useState('')

  const onSubmit = async e => {
    e.preventDefault()

    try {
      const host = `${env?.api?.host}/todos`
      const request = await fetch(host, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          description,
        }),
      })
      const response = await request.json()
      if (!response?.success) throw Error('Failed')
      setDescription('')
      getTodos()
    } catch (error) {
      console.error('error onSubmit', error)
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" className="form-control" placeholder="name@example.com" value={description} onChange={e => setDescription(e.target.value)} required />
        <button className="btn btn-primary">+ Add</button>
      </form>
    </>
  )
}

export default InputTodo

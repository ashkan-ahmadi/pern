import { useState } from 'react'
import env from './env'

const App = () => {
  const onSubmit = async e => {
    e.preventDefault()

    try {
      const host = `${env?.api?.host}/todos`
      const request = await fetch(host, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description }),
      })
      const response = await request.json()
      console.log(response)
    } catch (error) {
      console.error('error onSubmit', error)
    }
  }

  const [description, setDescription] = useState('')

  return (
    <>
      <main className="container">
        <h1 className="text-center mt-5">TODO</h1>
        <form onSubmit={onSubmit}>
          <input type="text" className="form-control" id="description" placeholder="name@example.com" value={description} onChange={e => setDescription(e.target.value)} />
          <button className="btn btn-primary">+ Add</button>
        </form>
      </main>
    </>
  )
}

export default App

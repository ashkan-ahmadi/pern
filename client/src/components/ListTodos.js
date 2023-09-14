const ListTodos = props => {
  const { todos } = props
  return (
    <>
      <h2>List Todos</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.todo_id}>
              <th scope="row">{todo.todo_id}</th>
              <td>{todo.description}</td>
              <td>
                <button className="btn">EDIT</button>
              </td>
              <td>
                <button className="btn">DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ListTodos

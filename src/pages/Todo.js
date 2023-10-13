import React, { useState } from 'react'

function generateId() {
  return Math.floor(Math.random() * 1000)
}

function Todo() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    setTodo((todo)=>
      todo.concat({
        text:input,
        id: generateId()
      })
    )
    setInput('')
  }

  const removeTodo = (id) => setTodo((todo) => todo.filter((t) => t.id !== id))
  return (
    <div>
        <input 
        type="test"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='New Todo'
        />
        <button onClick={handleSubmit}>Submit</button>
        <ul>
          {
            todo.map(({text, id}) => (
              
                <li key={id}>
                <span>{text}</span>
                <button onClick={() => removeTodo(id)}>X</button>
              </li>
              
            ))
          }
        </ul>
    </div>
  )
}

export default Todo
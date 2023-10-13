import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  return (
    <div className='container'>
      <h1 className='number'>{count}</h1>

      <h3>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </h3>
    </div>
  )
}

export default Counter
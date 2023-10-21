import React from 'react'
import data from './data'

const TabButton = ({buttonLabel, filterItems, setItem}) => {
    const btns = [...buttonLabel]
  return (
    <div>
        <button onClick={() => setItem(data)}>All</button>
        {
           btns.map(item=>(
            <button onClick={() => filterItems(item)}>{item}</button>
           ))
        }

    </div>
  )
}

export default TabButton
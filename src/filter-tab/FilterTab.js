import React, { useState } from 'react'
import data from './data'
import Card from './Card';
import './FilterTab.css'
import TabButton from './TabButton';

const FilterTab = () => {
    const [item, setItem] = useState(data);
    // const ButtonLabel = [...new Set(data.map((val)) => val.category)]
    const buttonLabel = new Set(data.map((val) => val.category));

    const filterItems = (cat) => {
        const newItems = data.filter((val)  => val.category === cat )
        setItem(newItems)
    }

  return (
    <div className='item-container'>
        <h1>Filter Tab</h1>
        <div className='item-col'>
            <TabButton buttonLabel = {buttonLabel} filterItems={filterItems} setItem={setItem} />
            <Card item={item} />
        </div>
    </div>
  )
}

export default FilterTab
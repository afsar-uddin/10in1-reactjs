import React from 'react'

import './style.css';
import {items} from './data'
import { useState } from 'react';
import { useEffect } from 'react';

const MultiSelect = () => {

    const [selectedFilter, setSelectedFilter] = useState([]); 
    const [filteredItems, setFilteredItems] = useState(items);
    let filters = ["Bags", "Watches", "Sports", "Sunglasses"];

    const handleFilteredBtnOnClick = (selectedCategory) => {
        if(selectedFilter.includes(selectedCategory)) {
            let filterItems = selectedFilter.filter((el) => el !== selectedCategory) 
            setSelectedFilter(filterItems)
        } else {
            setSelectedFilter([...selectedFilter, selectedCategory])
        }
    }
    

    useEffect(() => {
        filteredItemsData();
    }, [selectedFilter]);

    const filteredItemsData = () => {
        if(selectedFilter.length > 0) {
            let tempItems = selectedFilter.map((selectedCategory) => {
                let temp = items.filter((item) => item.category === selectedCategory)
                return temp;
            });
            setFilteredItems(tempItems.flat())
        } else {
            setFilteredItems([...items])
        }
    }

  return (
    <div>
        <div className='buttons-container'>
            {
                filters.map((category, idx) => (
                    // console.log(category);
                    <button onClick={() => handleFilteredBtnOnClick(category)} className={`button ${selectedFilter?.includes(category) ? "active" : ""}`} key={`filters-${idx}`}>
                        {category}
                    </button>

                ))
            }
        </div>
        <div className='items-container'>
            {
                filteredItems.map((item, idx) => (
                    <div key={`items-${idx}`} className='item'>
                        <p>{item.name}</p>
                        <p className='category'>{item.category}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MultiSelect
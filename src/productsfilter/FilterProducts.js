import React from 'react'
import Nav from './Nav/Nav'
import Products from './products/Products'
import Recommended from './recommended/Recommended'
import Sidebar from './sidebar/Sidebar'

const FilterProducts = () => {
  return (
    <div>
        <Nav />
        <Sidebar />
        <Recommended />
        <Products />
    </div>
  )
}

export default FilterProducts
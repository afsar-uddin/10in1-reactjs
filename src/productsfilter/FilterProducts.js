import React from 'react'
import Nav from './Nav/Nav'
import Products from './products/Products'
import Recommended from './recommended/Recommended'

const FilterProducts = () => {
  return (
    <div>
        <Nav />
        <Products />
        <Recommended />
    </div>
  )
}

export default FilterProducts
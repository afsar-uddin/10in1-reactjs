import React, { useState } from 'react'
import Nav from './Nav/Nav'
import Products from './products/Products'
import Recommended from './recommended/Recommended'
import Sidebar from './sidebar/Sidebar'

import products from './db/data'

const FilterProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  // Input search filter
  const [query, setQuery] = useState("");

  const handleSearchFilter = event => {
    setQuery(event.target.value)
  }

  const filtereredItem = products.filter((product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1));

  




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
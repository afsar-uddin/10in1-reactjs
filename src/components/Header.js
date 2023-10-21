import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/counter">Coutner</NavLink>
            <NavLink to="/todo">Todo</NavLink>
            <NavLink to="/meal">Meal</NavLink>
            <NavLink to="/calculator">Calculator</NavLink>
            <NavLink to="/togglebuttoncolor">Toggle Theme Color</NavLink>
            <NavLink to="/searchbar">Hidden search</NavLink>
            <NavLink to="/testimonial">Testimonial</NavLink>
            <NavLink to="/accordion">Accordion</NavLink>
            <NavLink to="/form-validate">Form Validate</NavLink>
            <NavLink to="/filter-products">Filter Products</NavLink>
            <NavLink to="/filter-tab">Filter Tab</NavLink>
        </nav>
    </header>
  )
}

export default Header
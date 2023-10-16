import React from 'react'
import './Nav.css'
import {AiOutlineHeart, AiOutlineUser, AiOutlineShopping} from 'react-icons/ai'
// import {AiOutlineUser,CiShoppingCart } from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <div className='nav-container'>
        <input type="text" className='search-input' placeholder='Enter your search shoes' />
      </div>
      <div className='profile-container'>
        <a href="#"><AiOutlineHeart className="nav-icons" /></a>
        <a href="#"><AiOutlineShopping className="nav-icons" /></a>
        <a href="#"><AiOutlineUser className="nav-icons" /></a>
      </div>
    </nav>
  )
}

export default Nav
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BsFillBagDashFill } from 'react-icons/bs'

const Card = () => {
  return (
    <section className='card'>
      <img className='card-img' src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="jutha" />
      <div className='card-detail'>
        <h3 className='card-title'>Shoe</h3>
        <div className='card-reviews'>
          <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
          <span className='total-reviews'>4</span>
        </div>
        <div className='card-price'>
          <div className='price'>
            <del>$300</del> 200 
          </div>
          <div className='bag'>
            <BsFillBagDashFill className='bag-icon' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Card
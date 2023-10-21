import React from 'react'

const Card = ({item}) => {
  return (
    <div className='item-inner'>
        {
            item.map((val) => (
                <div key={Math.random()}>
                    <img src={val.img} />
                    <h3>{val.title}</h3>
                    <h5>{val.category}</h5>
                </div>
            ))
        }
    </div>
  )
}

export default Card
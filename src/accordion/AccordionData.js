import React, { useState } from 'react'


function AccordionData({title, content}) {
    const [isActive, setIsActive] = useState(false)

  return (
    <section className='accordion-card'>
        <div className='header'>
            <h3><button onClick={() => setIsActive(!isActive)}>{title}</button></h3>
            <p className='icon'>{isActive ? "-" : "+"}</p>
        </div>

        <div className='content'>
            {isActive && <p className='card-info'>{content}</p>}
        </div>
    </section>
  )
}

export default AccordionData
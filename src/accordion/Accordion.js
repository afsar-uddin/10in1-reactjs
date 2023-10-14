import React from 'react'
import {accordionItems} from '../utls/content'
import AccordionData from './AccordionData'

const Accordion = () => {

    return (
        <div className='accordion'>
            {accordionItems.map(({title, content}) => (
                <AccordionData title={title} content = {content} key={Math.random() * 100} />
            ))}
        </div>
      )
}

export default Accordion
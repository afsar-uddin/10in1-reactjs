import React, { useState } from 'react'

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = [
        {
          quote: "This is the best product I've ever used!",
          author: "Jane Doe",
        },
        {
          quote: "I highly recommend this product to everyone!",
          author: "John Smith",
        },
        {
          quote: "This product has completely changed my life!",
          author: "Bob Johnson",
        },
      ];
      const handlePrev = () => {
        setCurrentIndex(
            (currentIndex + testimonials.length - 1) % testimonials.length
        )
      }

      const handleNext = () => {
        setCurrentIndex(
            (currentIndex + 1) % testimonials.length
        )
      }

  return (
    <div className='testimonials'>
        <div className='testimonial-quote'>
            <h4>{testimonials[currentIndex].quote}</h4>
        </div>
        <div className='testimonial-author'>
            <h5>{testimonials[currentIndex].author}</h5>
        </div>
        <div className='testimonial-btns'>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default Testimonial
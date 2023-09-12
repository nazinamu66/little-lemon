import React from 'react'
import testi from './assets/images/testi.png'
import './styles.css'


function Testimonials() {
  return (
    <>
    <div className='testimonials-container'>
      <h1 className='testimonials-title'>Testimonials</h1>
      <div className='testimonial-cards'>
        {/* Testimonial Card 1 */}
        <div className='testimonial-card'>
          <img src={testi} alt='mamman' className='testimonial-image' />
          <div className='testimonial-info'>
            <h4>Mamman</h4>
            <p>Little Lemon was recommended by a friend of mine, suffice it to say we are now best friends</p>
          </div>
        </div>
        <div className='testimonial-card'>
          <img src= {testi} alt='alhassan' className='testimonial-image'/>
          <h4>Al-Hassan</h4>
          <p>I had the Bruschetta and it was so wonderful </p>
        </div>
        <div className='testimonial-card'>
          <img src= {testi} alt='alhussain' className='testimonial-image'/>
          <h4>Alhussain</h4>
          <p>I was there for a friend's birthday party, the food was amazing and the service was top-notch.</p>
        </div>
        <div className='testimonial-card'>
          <img src= {testi} alt='ibrahim' className='testimonial-image'/>
          <h4>Ibrahim</h4>
          <p>It was well beyond my imagination. If you are a Vegetarian, you really should try the Salad.</p>
        </div>
      </div>
    </div>

        {/* Repeat the structure for the other testimonial cards */}



    </>
  )
}

export default Testimonials
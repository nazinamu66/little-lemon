import React from 'react';
import salad from './assets/images/greek salad.jpg';
import bruschetta from './assets/images/bruchetta.svg';
import lemon from './assets/images/lemon dessert.jpg';
import './styles.css'

function Specials() {
  return (
    <div className='specials-container'>
      <div className='specials-header'>
      <h2 className='specials'>Specials</h2>
      <button className='specials-button'>Online Menu</button>
      </div>
      <div className='cards-container'>
        <div className='card'>
          <img src= {salad} alt='greek-salad' />
          <h3>Greek Salad </h3><h4>$12.99</h4>
          <p>The famous greek salad of crispy lettuce, peppers, 
            olives and our Chicago style feta cheese, 
            garnished with crunchy garlic and rosemary croutons. </p>
          <a href='#'>Order Delivery <i className='motorcycle-icon'></i></a>
        </div>
        <div className='card'>
          <img src= {bruschetta} alt='bruschetta' />
          <h3>Bruschetta</h3> <h4> $5.99</h4>
          <p>Our Bruschetta is made from grilled bread that has been smeared
             with garlic and seasoned with salt and olive oil. </p>
          <a href='#'>Order Delivery <i className='motorcycle-icon'></i></a>
        </div>
        <div className='card'>
          <img src= {lemon} alt='lemon-dessert' />
          <h3>Lemon Dessert</h3> <h4>$ 5.00</h4>
          <p>This comes straight from grandma’s recipe book, every last 
            ingredient has been sourced and is as authentic as can be imagined.</p>
          <a href='#'>Order Delivery <i className='motorcycle-icon'></i></a>
        </div>
      </div>
    </div>
  );
}

export default Specials;

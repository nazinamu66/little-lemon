import React from 'react';
import './styles.css';
import rest from './assets/images/restaurant.jpg';
import Specials from './Specials';

function Main() {
  return (
    <div className='main-container'>
      <div className='main-text'>
        <h1>Little Lemon</h1>
        <h3 className='chicago'>Chicago</h3>
        <p>
          Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
          The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that
          they rotate seasonally.
          The restaurant has a rustic and relaxed atmosphere with moderate prices,
          making it a popular place for a meal any time of the day.
        </p>
        <button className='reserve-button'>Reserve a Table</button>
      </div>
      <div className='main-image'>
        <img src={rest} alt='the restaurant setting' />
      </div>
    
    </div>
  );
}

export default Main;

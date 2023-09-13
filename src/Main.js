import React, { useState, useReducer } from 'react';
import './styles.css';
import rest from './assets/images/restaurant.jpg';
import Specials from './Specials';
import BookingPage from './BookingPage';

function updateTimes(state, action) {
  const updatedTimes = state;
  return updatedTimes;
}
function initializeTimes() {
  return [];
}

function Main() {
  const [availableTimes, dispatchTimes] = useReducer(updateTimes, [], initializeTimes);
  const [showBookingPage, setShowBookingPage] = useState(false);
  const [formData, setFormData] = useState({
    resDate: '',
    resTime: '17:00',
    guests: 1,
    occasion: 'Birthday',
  });
  const toggleBookingPage = () => {
    setShowBookingPage(!showBookingPage);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    dispatchTimes({ type: 'UPDATE_TIMES', date: value }); 
  };

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
        <button className='reserve-button' onClick={toggleBookingPage}>Reserve a Table</button>
      </div>
      <div className='main-image'>
        <img src={rest} alt='the restaurant setting' />
      </div>
      {showBookingPage && <BookingPage formData={formData} setFormData={setFormData} />}
    </div>
  );
}

export default Main;

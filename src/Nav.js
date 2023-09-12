import React, { useState} from 'react'
import ham from './assets/images/hamburger.svg'
import './styles.css'
import { Routes, Route } from 'react-router-dom';


function Nav() {
    const [isNavOpen, SetIsNavOpen] = useState(false); // create a variable called isNavOpen useState Hook to toggle links on mobile

    const toggleNav = () => {
        console.log('Toggle Clicked');
        SetIsNavOpen(!isNavOpen)
    };
  return (
    <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
        <div>
        <img src={ham} className='hamburger' alt="hamburger-menu" onClick={toggleNav} />
        </div>
      <ul className={`links ${isNavOpen ? 'open' : ''} `}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order-online">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav
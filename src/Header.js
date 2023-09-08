import React from 'react';
import logo from './assets/images/Logo .svg';
import Nav from './Nav';
import './styles.css';

function Header() {
  return (
    <div className="navigation">
      <img src={logo} className='logo' alt="logo little lemon" />
      <Nav />
    </div>
  );
}

export default Header;

import React from 'react'
import foot from'./assets/images/footer.png'

function Footer() {
  return (
    <>
    <div className='footer-container'>
    <img src= {foot} className='footer-logo' alt ='footer-logo'/>
    <div className='foot-nav'>
    <ul className= 'foot-links'>
        <h3>Quicklinks</h3>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order-online">Order Online</a></li>
        <li><a href="/login">Login</a></li>
        </ul>
    </div>
    <ul className='contact-foot'>
      <h3>Contact</h3>
      <li className='address'>Address: 234 H Avenue Chicago, Illinois</li>
      <li className='tel'>+234-803-116-5185</li>
      <li className='e-mail'>delicious@littlelemon.com</li>
    </ul>
    <ul className='social'>
      <h3>Social</h3>
     <li> <a href='www.facebook.com/'>Facebook</a></li>
    <li><a href='www.twitter.com'>Twitter X</a></li>  
     <li> <a href='www.instagram.com/'>Instagram</a></li>  
    </ul>
    </div>
    </>
  )
}

export default Footer
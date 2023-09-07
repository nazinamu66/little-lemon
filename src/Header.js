import React from 'react'
import logo from "./assets/images/Logo .svg"
import Nav from './Nav'


function Header() {
  return (
    <>
    <img src={logo} alt='logo little lemon'/>
    <Nav/>
    </>
  )
}

export default Header
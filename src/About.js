import React from 'react'
import manda1 from'./assets/images/manda 1.jpg'
import './styles.css'


function About() {
  return (

    <>
    <div className='about-main-container'>
    <h1 className='about-title'> Little Lemon</h1>
    <h2 className='about-sub'>Chicago</h2>
    <p className='about-main-text'> Little Lemon is owned by two Italian 
    brothers, Mario and Adrian, who moved to the United States to pursue 
    their shared dream of owning a restaurant. To craft the menu, Mario
     relies on family recipes and his experience as a chef in Italy. 
     Adrian does all the marketing for the restaurant and led the effort 
     to expand the menu beyond classic Italian to incorporate additional 
     cuisines from the Mediterranean region.  </p>
     <div className='about-images'>
        <img src=  {manda1} className = 'pic1' alt= "Mario and Adrian"/> 
     </div>
    </div>
    </>
  )
}

export default About
import React from 'react'
import manda1 from'./assets/images/manda 1.jpg'
import manda2 from'./assets/images/manda 2.jpg'


function About() {
  return (

    <>
    <div className='about-main-container'>
    <div className='about-title'> Little Lemon</div>
    <div className='about-sub'>Chicago</div>
    <div className='about-main-text'> Little Lemon is owned by two Italian 
    brothers, Mario and Adrian, who moved to the United States to pursue 
    their shared dream of owning a restaurant. To craft the menu, Mario
     relies on family recipes and his experience as a chef in Italy. 
     Adrian does all the marketing for the restaurant and led the effort 
     to expand the menu beyond classic Italian to incorporate additional 
     cuisines from the Mediterranean region.  </div>
     <div className='about-images'>
        <img src=  {manda1} className = 'pic1' alt= "Mario and Adrian"/> 
        <img src = {manda2} className = 'pic2' alt= "Mario and Adrian"/>
     </div>
    </div>
    </>
  )
}

export default About
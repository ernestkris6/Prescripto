import React from 'react';

import head from '../assets/group_profiles.png';
import arrow from '../assets/arrow_icon.svg'
import headimg from '../assets/header_img.png'

export default function Header() {
  return (
    <div  className='flex'>
      {/*---------Left side ----------- */}
      <div>
        <p>Book Appointment  <br /> With Trusted Doctors</p>
        <div>
          <img src={head} alt="" />   
          <p>Simply browse through our extensive list of trusted doctors<br /> Schedule an appointment today...</p>   
        </div>
        <a href="">Book Appointment <img src={arrow} alt="" /></a>
      </div>
      
      {/*---------Right side ----------- */}
      <div>
        <img src={headimg} alt="" />
      </div>
    </div>
  )
}

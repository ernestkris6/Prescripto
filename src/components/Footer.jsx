import React from 'react'
import logo from '../assets/logo.svg'

export default function Footer() {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 my-10 text-sm'>
        {/*---------Left Section-----------*/}
          <div>
              <img className='w-32' src={logo} alt="" />
              <div>
                <p>Lorem ipsum dolor sit amet 
                  consectetur adipisicing elit. 
                  Nemo autem impedit asperiores soluta iusto necessitatibus magnam, 
                  repellat maiores omnis molestiae quasi iste delectus, 
                  harum voluptatibus 
                  consequuntur nisi rerum maxime est.</p>
              </div>
          </div>

           {/*---------Center Section-------*/}
           <div>
            <p className='font-bold'>COMPANY</p>
            <ul className=''>
              <li>Home</li>
              <li>About Us</li> 
              <li>Contact Us</li>
              <li>Privacy policy</li>
            </ul>
          </div>

            {/*---------Right Section--------*/}
            <div>
                <p className='font-bold'>GET IN TOUCH</p>
                <ul className='leading-tight'>
                  <li>+1-212-456-7980</li>
                  <li>prescripto@gmail.com</li>
                </ul>
            </div>
      </div>

      <div>
        {/* -----Copyright Section------ */}
        <hr className='h-4 py-1 font-3xl' />
        <p className='text-center my-4'>Copyright 2024 &copy; Prescripto - All Rights Reserved.</p>
      </div>
    </div>
  )
}

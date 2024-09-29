import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { assets } from '../assets/assets'
// import {assets} from '../assets/assets'
import logo from "../assets/logo.svg"


export default function Navbar() {

  const [isLogin, setIsLogin] = useState(false)
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
       {/* <img src={assets.doc1} alt='logo' /> */}
       <img className='w-44 cursor-pointer' src={logo} alt='logo'/>
       <ul className='hidden md:flex items-center justify-around gap-6'>
        <NavLink>
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/>
        </NavLink>

        <NavLink>
            <li className='py-1'>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/>
        </NavLink>

        <NavLink>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/>
        </NavLink>

        <NavLink>
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto'/>
        </NavLink>

       </ul>

       <div className='bg-blue-500 p-3 rounded-full text-white'>
        {isLogin? <button>Book Appointment</button> : <button>LOGIN</button>}
       </div>
    </div>
  )
}

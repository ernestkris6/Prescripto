import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import { assets } from '../assets/assets'
// import {assets} from '../assets/assets'
import logo from "../assets/logo.svg"


export default function Navbar() {

  const [isLogin, setIsLogin] = useState(false)
  return (
    <div className='flex items-center justify-around mt-4'>
       {/* <img src={assets.doc1} alt='logo' /> */}
       <img className='w-16 h-16' src={logo} alt='logo'/>
       <ul className='flex items-center justify-around gap-6'>
        <NavLink>
            <li>HOME</li>
            <hr />
        </NavLink>

        <NavLink>
            <li>ALL DOCTORS</li>
            <hr />
        </NavLink>

        <NavLink>
            <li>ABOUT</li>
            <hr />
        </NavLink>

        <NavLink>
            <li>CONTACT</li>
            <hr />
        </NavLink>

       </ul>

       <div className='bg-blue-500 p-3 rounded-full text-white'>
        {isLogin? <button>Book Appointment</button> : <button>LOGIN</button>}
       </div>
    </div>
  )
}

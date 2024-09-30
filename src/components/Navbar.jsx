import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
// import { assets } from '../assets/assets'
import logo from "../assets/logo.svg";
import drop from "../assets/dropdown_icon.svg";
import profile from "../assets/profile_pic.png"

1
export default function Navbar() {

  const [showMenu, setshowMenu] = useState(false);
  const [token, setToken] =useState(true);

  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
       {/* <img src={assets.doc1} alt='logo' /> */}
       <img className='w-44 cursor-pointer' src={logo} alt='logo'/>
       <ul className='hidden md:flex items-center justify-around gap-6'>
        <NavLink to='/'>
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>

        <NavLink to='doctors'>
            <li className='py-1'>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>

        <NavLink to='about'>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>

        <NavLink to='contact'>
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
        </NavLink>

       </ul>

       <div  className='flex items-center gap-4'>
        {token ?
        <div className='flex items-center gap-2 cursor-pointer group relative'>
          <img className='w-8 rounded-full' src={profile} />
          <img className='w-2.5' src={drop} />
          <div>
            <div>
              
            </div>
          </div>
        </div>
        :
          <button 
        className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'
        onClick={()=> navigate('login')}>Create account</button> }
       </div>
    </div>
  )
}

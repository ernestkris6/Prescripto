import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
// import { assets } from '../assets/assets'
import logo from "../assets/logo.svg";
import drop from "../assets/dropdown_icon.svg";
import profile from "../assets/profile_pic.png"
import menu from '../assets/menu_icon.svg';
import cross from '../assets/cross_icon.png';

1
export default function Navbar() {

  const [showMenu, setshowMenu] = useState(false);
  const [token, setToken] = useState(true);
  // const [isOpen, setIsOpen] = useState(false);

  // function handleOpen(){
  //   setIsOpen((is)=> !is)
  // }

  const navigate = useNavigate();

  
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
          <img onClick={()=> navigate('/')} className='w-32 md:w-44 cursor-pointer' src={logo} alt='logo'/>
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

       {/* <div className='flex md:hidden'>
        <button className='bg-primary w-8 h-8 text-white outline-none rounded-2xl ml-24 items-center' onClick={handleOpen}>{isOpen ? "x" : "="}</button>
         {isOpen && <div className='absolute bg-white/80 h-[100vh] w-full top-[70px] right-[32px] left-0 pt-14 text-base font-medium text-gray-800 z-20 transition-x-full transition-transform translate-x-0 duration-300 ease-in-out'>
            <ul className='md:flex items-center justify-around gap-6 m-auto py-12 text-center'>
            <NavLink onClick={handleOpen} to='/'>
                <li className='py-1 hover:text-stone-500'>HOME</li>
            </NavLink>

            <NavLink onClick={handleOpen} to='doctors'>
                <li className='py-1 hover:text-stone-500'>ALL DOCTORS</li>
            </NavLink>

            <NavLink onClick={handleOpen} to='about'>
                <li className='py-1 hover:text-stone-500'>ABOUT</li>
            </NavLink>

            <NavLink onClick={handleOpen} to='contact'>
                <li className='py-1 hover:text-stone-500'>CONTACT</li>
            </NavLink>
            </ul>
          </div>}
       </div> */}

       <div  className='flex items-center gap-4'>
        {token ?
        <div className='flex items-center gap-2 cursor-pointer group relative'>
          <img className='w-8 rounded-full' src={profile} />
          <img className='w-2.5' src={drop} />
         <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
          <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
              <div className='hover:bg-blue-300 rounded p-1'>
                <p className='hover:text-black cursor-pointer' onClick={()=> navigate('my-profile')}>My Profile</p>
              </div>
              <div className='hover:bg-blue-300 rounded p-1'>
                <p className='hover:text-black cursor-pointer' onClick={()=> navigate('my-appointments')}>My Appointment</p>
              </div>
              <div className='hover:bg-blue-300 rounded p-1'>
                <p className='hover:text-black cursor-pointer' onClick={()=> setToken(false)}>Logout</p>
              </div>
            </div>
          </div>
        </div>
        :
          <button 
        className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'
        onClick={()=> navigate('login')}>Create account</button> }

        <img onClick={()=> setshowMenu(true)} className='w-6 md:hidden' src={menu} alt="" />

        
        {/*----------mobile menu----------*/}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between py-6'>
            <img className='w-32 ml-4' src={logo} alt="" />
            <img className='w-7 mr-4' onClick={()=> setshowMenu(false)} src={cross} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 text-lg font-medium'>
            <NavLink  onClick={()=> setshowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
            <NavLink  onClick={()=> setshowMenu(false)} to='doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
            <NavLink  onClick={()=> setshowMenu(false)} to='about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
            <NavLink  onClick={()=> setshowMenu(false)} to='contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
            <NavLink onClick={()=> setshowMenu(false)} to='login'><p className='px-4 py-2 rounded inline-block'>SIGN UP</p></NavLink>
          </ul>
        </div>
       </div>
    </div>
  )
}


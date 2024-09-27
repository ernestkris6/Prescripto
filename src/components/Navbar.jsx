import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

  const [isLogin, setIsLogin] = useState(false)
  return (
    <div>
       <img src="" alt='' />
       <ul>
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

       <div>
        {isLogin? <button>Book Appointment</button> : <button>LOGIN</button>}
       </div>
    </div>
  )
}

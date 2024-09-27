import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
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

        <NavLink>
            <button>LOGIN</button>
        </NavLink>
       </ul>
    </div>
  )
}

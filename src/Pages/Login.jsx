import React, { useState } from 'react'

export default function Login() {

  const [state, setState] = useState("Sign Up")

  function handleSubmit(e){
      e.preventDefault();
  }


  return (
    <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center m-auto p-8'>
        <div className=''>
          <p>{state === "Sign Up" ? "Sign Up" : "Login"}</p>
        </div>

        {state === "Sign Up" && <div>
            <p>Name:</p>
            <input type="text" placeholder='Enter name' />
        </div>}

        <div>
            <p>Email:</p>
            <input type="email" placeholder='Enter name' />
        </div>

        <div>
            <p>Password:</p>
            <input type="password" placeholder='Enter name' />
        </div>
        
        <button className='bg-primary w-full text-white'>{state === "Sign Up" ? "Sign Up" : "Login"}</button>

        <p>{state === "Sign Up" ? "Already have an account": "Don't have an account" } <span className='underline text-primary'>{state === "Sign Up" ? "Login" : "Sign Up"}</span></p>
    </form>
  )
}

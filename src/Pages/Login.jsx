import React, { useState } from 'react'

export default function Login() {

  const [state, setState] = useState("Sign Up")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e){
      e.preventDefault();
  }


  return (
    <form onSubmit={handleSubmit} className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border shadow-xl rounded-xl text-zinc-600 text-sm'>
          <p className='text-2xl font-semibold'>{state === "Sign Up" ? "Create Account" : "Login"}</p>
          <p className='text-sm flex'>{state === 'Sign Up' ? "Please sign up to book an appointment" : "Please login to book an appointmenty"}</p>

        {state === "Sign Up" && <div className='w-full'>
            <p>Full Name</p>
            <input onChange={(e)=> setName(e.target.value)} value={name} className='border border-zinc-300 rounded p-2 mt-1 w-full outline-none' type="text" />
        </div>}

        <div className='w-full'>
            <p>Email</p>
            <input onChange={(e)=> setEmail(e.target.value)} value={email} className='border border-zinc-300 rounded p-2 mt-1 w-full outline-none' type="email" />
        </div>

        <div className='w-full'>
            <p>Password</p>
            <input onChange={(e)=> setPassword(e.target.value)} value={password} className='border border-zinc-300 rounded p-2 mt-1 w-full outline-none' type="password" />
        </div>
        
        <button className='bg-primary rounded w-full text-white text-base py-1 mt-4 mb-4'>{state === "Sign Up" ? "Sign Up" : "Login"}</button>

          {state ===  "Sign Up" ? 
          <p>Already have an account? <span onClick={()=> setState('Login')} className='text-primary underline cursor-pointer'>Login</span></p> : 
          <p>Dont't have an account? <span onClick={()=> setState('Sign Up')} c className='text-primary underline cursor-pointer'>Sign up</span></p> }
        
        </div>
    </form>
  )
}


{/* <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center m-auto p-8 w-[320px] shadow-lg rounded gap-4'>
        <div className=''>
          <p className='text-2xl mb-4 font-medium'>{state === "Sign Up" ? "Create Account" : "Login"}</p>
          <p className='text-sm flex'>{state === 'Sign Up' ? "Please sign up to book an appointment" : "Please login to book an appointmenty"}</p>
        </div>

        {state === "Sign Up" && <div className=''>
            <p>Full Name</p>
            <input className='border rounded py-1 px-6 outline-none' type="text" />
        </div>}

        <div>
            <p>Email</p>
            <input className='border rounded py-1 px-6 outline-none' type="email" />
        </div>

        <div>
            <p>Password</p>
            <input className='border rounded py-1 px-6 outline-none' type="password" />
        </div>
        
        <button className='bg-primary rounded w-full text-white text-sm py-1 mt-4 mb-4'>{state === "Sign Up" ? "Sign Up" : "Login"}</button>

        <p>{state === "Sign Up" ? "Already have an account?": "Don't have an account?" } <span className='underline text-primary'>{state === "Sign Up" ? "Login" : "Sign Up"}</span></p>
    </form> */}
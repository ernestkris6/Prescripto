import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error() {

  const navigate = useNavigate();

  return (
    <div className='bg-black/80 m-auto justify-center items-center rounded py-8 max-w-96 shadow-2xl mt-24 hover:bg-[#c1630b] transition-all hover:translate-x-[10px] duration-500'>
     <p className='text-center font-bold m-auto justify-center py-16 text-2xl text-white/80 hover:text-black/80'>Error: page not found !!!</p>
     <p onClick={()=> navigate('/')} className='text-white/80 text-center underline mt-[-24px] pb-8 hover:text-blue-400'>Click here to go back to the home page</p>
    </div>
  )
}

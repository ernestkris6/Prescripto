import React from 'react'

export default function Error() {
  return (
    <div className='bg-black/80 m-auto justify-center items-center rounded py-8 max-w-96 shadow-2xl mt-24 hover:bg-primary transition-all hover:translate-x-[10px] duration-500'>
     <p className='text-center font-bold m-auto justify-center py-16 text-2xl text-white/80 hover:text-black/80'>Error: page not found !!!</p>
     <p>Click here to go back to the home page</p>
    </div>
  )
}

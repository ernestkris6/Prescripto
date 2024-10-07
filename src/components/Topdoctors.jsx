import React from 'react'

import { doctors } from '../items'

export default function Topdoctors() {
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3'>Simply browse through our extensive list of trusted Doctors</p>
            <div>
                {doctors.slice(0,10).map((item, index)=> (
                    <div>
                        <img src={item.image} alt="" />
                        <div>
                            <div>
                                <p>*<p>Available</p></p>
                            </div>
                            <p>{item.name}</p>
                            <p>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className='bg-primary py-2 px-8 rounded-full text-white '>more</button>
    </div>
  )
}

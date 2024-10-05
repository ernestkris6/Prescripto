import React from 'react';

import { specialityData } from '../items';


export default function SpecialityMenu() {
  return (
    <div id='#speciality'>
        <h1 className='text-2xl text-center font-bold mt-8 justify'>
            Find by Speciality
        </h1>
        <p className='text-center font-bold mt-4'>Simply browse through our list of trusted doctors, schedule your appointment hassle free</p>
        <div className='grid grid-cols-2 items-center justify-center gap-4 md:flex'>
        {specialityData.map((item, index)=> (
          <div className='mt-8 mx-auto'>
            <img className='p-6' src={item.image} alt="" />
            <p className='font-bold text-center mt-2' key={index}>{item.speciality}</p>
          </div>
        ))}
        </div>
    </div>
  )
}

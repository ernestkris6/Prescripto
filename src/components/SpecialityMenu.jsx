import React from 'react';

import { specialityData } from '../items';


export default function SpecialityMenu() {
  return (
    <div id='#speciality'>
        <h1 className='text-2xl text-center font-bold mt-8 justify'>
            Find by Speciality
        </h1>
        <p className='text-center font-bold mt-4'>Simply browse through our list of trusted doctors, schedule your appointment hassle free</p>
        <div>
        {specialityData.map((item, index)=> (
          <p key={index}>{item.speciality}</p>
        ))}
        </div>
    </div>
  )
}

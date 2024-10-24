import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { Link } from 'react-router-dom';
// import { specialityData } from '../items';



export default function SpecialityMenu() {

  const {specialityData} = useContext(AppContext)

  return (
    <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-gray-500'>
        <h1 className='text-3xl font-md'>
            Find by Speciality
        </h1>
        <p className='sm:w-1/3 text-center text-md'>Simply browse through our list of trusted doctors, schedule your appointment hassle free</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {specialityData.map((item, index)=> (
          <Link onClick={()=> scrollTo(0,0)} key={index} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' to={`doctors/${item.speciality}`}>
            <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
            <p className='font-bold text-center mt-2' key={index}>{item.speciality}</p>
          </Link >
        ))}
        </div>
    </div>
  )
}

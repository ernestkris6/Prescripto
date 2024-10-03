import React from 'react';
// import { specialityData } from '../assets/assets';
// import { Link } from 'react-router-dom';

export default function SpecialityMenu() {
  return (
    <div id='#speciality'>
        <h1>
            Find by Speciality
        </h1>
        <p>Simply browse through our list of trusted doctors, schedule your appointment hassle free</p>
        <div>
            {/* {specialityData.map((item, index)=> (
                <Link to={`/doctors/${item.speciality}`}>
                    <img src={item.image} alt="" />
                    <p>{item.speciality}</p>
                </Link>
            ))} */}
        </div>
    </div>
  )
}

import React from 'react'

import { doctors } from '../items'

export default function Topdoctors() {
  return (
    <div>
            <h1>Top Doctors to Book</h1>
            <p>Simply browse through our extensive list of trusted Doctors</p>
            <div>
                {doctors.slice().map((item, index)=> (
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
            
    </div>
  )
}

import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
// import {checked} from '../assets/tick_icon.svg'

export default function Appointment() {

  const {doctors} = useContext(AppContext);
  const {docId} = useParams();


  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {
      const docInfo = doctors.find(doc => doc.id === docId)
      setDocInfo(docInfo)
      console.log(docInfo);
      
  }

  useEffect(function(){
    fetchDocInfo()
  }, [doctors, docId])


  if(!docInfo) return <div>LOADING...</div>

  return (
    <div className=''>
      
      {/*---------Doc Info----------*/}
      <div className=''>
        <div className='bg-primary w-1/3 rounded-lg flex flex-row'>
          {docInfo.image && <img src={docInfo.image} alt="" />}
          <div className='border mx-4 w-[90vw]'>
            <h2>{docInfo.name}</h2>
            {/* <img src={checked} alt='' /> */}

          </div>
                  
                            
        </div>
      
      </div>

    </div>
  )
}

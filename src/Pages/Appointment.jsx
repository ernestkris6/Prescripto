import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';

export default function Appointment() {

  const {docId} = useParams();
  const {doctors} = useContext(AppContext);

  

  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = () => {
      const docInfo = doctors.find(doc => doc.id === docId)
      setDocInfo(docInfo)
      console.log(docInfo);
      
  }

  useEffect(function(){
    fetchDocInfo()
  }, [doctors, docId])

  return (
    <div className=''>
      {/*---------Doc Info----------*/}
      <div>
        <div>
          <img src={docInfo} alt="" />                   
        </div>
      
      </div>

    </div>
  )
}

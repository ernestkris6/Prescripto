import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext';
import verified from '../assets/verified_icon.svg';
import info from '../assets/info_icon.svg'
import RelatedDoctors from '../components/RelatedDoctors';

export default function Appointment() {

  const {docId} = useParams();
  const {doctors, currency} = useContext(AppContext);
  const daysOfTheWeek = ["SUN","MON", "TUE", "WED", "THUR", "FRI", "SAT" ]


  const [docInfo, setDocInfo] = useState(null);
  const [docSlot, setDocSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDocInfo = async () => {
      const docInfo = doctors.find(doc => doc.id === docId)
      setDocInfo(docInfo)
      // console.log(docInfo);
      
  }
  
  const getAvailableSlot = async () => {
    setDocSlot([]);

    //getting current date
    let today = new Date()

    for(let i = 0; i < 7; i++){
      //getting date with index
      let currDate = new Date(today)
      currDate.setDate(today.getDate() + i)

      //setting end of time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)

      //setting hours
      if(today.getDate() === currDate.getDate()){
        currDate.setHours(currDate.getHours() > 10 ? currDate.getHours() + 1 : 10)
        currDate.setMinutes(currDate.getMinutes() > 30 ? 30 : 0)
      }
      else{
          currDate.setHours(10)
          currDate.setMinutes(0)
      }

      let timeSlot = []

      while(currDate < endTime){
        let formattedTime = currDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    

      //add slot to array
      timeSlot.push({
        dateTime: new Date(currDate),
        time: formattedTime
      })

      //increment current time by 30mins
      currDate.setMinutes(currDate.getMinutes() + 30)

    }

      setDocSlot(prev => ([...prev, timeSlot]))

    }

  }
  
  
  useEffect(function(){
    fetchDocInfo()
  }, [doctors, docId])


  useEffect(function(){
    getAvailableSlot()
  }, [docInfo])
  

  useEffect(function(){
    console.log(docSlot);
    
  }, [docSlot])

  if(!docInfo) return <div>LOADING...</div>

  return (
    <div>
      
      {/*---------Doc Info----------*/}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          {docInfo.image && <img  className='bg-primary w-full sm:max-w-72 rounded-lg flex flex-row gap-4' src={docInfo.image} alt="" />}
        </div>

          {/*---------Doc Info: name, degree, experience----------*/}
          <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80] sm:mt-0'>
             <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name} 
              <img className='w-5' src={verified} alt="" />
            </p>
            <div className='flex items-center gap-2 text-sm text-gray-600'> 
              <p>{docInfo.degree} - {docInfo.speciality}</p>
              <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
            </div>

            {/*---------Doc About----------*/}
            <div>
              <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>About <img src={info} alt="" /></p>
             <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
            </div>
            <p className='text-gray-500 font-medium mt-4'>Appointment fee: <span className='text-gray-600'>{currency}{docInfo.fees}</span></p>
          </div>
      </div>
      {/*---------Booking Slot----------*/}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
            <p>Booking slot</p>
            <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
              {
                docSlot.length && docSlot.map((item, index)=> (
                  <div onClick={()=> setSlotIndex(index)} className={`text-center py-6 rounded-full cursor-pointer min-w-16 ${slotIndex === index ? "bg-primary text-white" : "border border-gray-200"}`} key={index}>
                      <p>{item[0] && daysOfTheWeek[item[0].dateTime.getDay()]}</p>
                      <p>{item[0] && item[0].dateTime.getDate()}</p>
                      
                  </div>
                ))
              }
            </div>
      </div>
      
      <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
        {docSlot.length && docSlot[slotIndex].map((item, index) => (
          <p onClick={()=> setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? "bg-primary text-white" : "border border-gray-200"}`} key={index}>{item.time.toLowerCase()}</p>
        ))}
            <button className='bg-primary py-3 px-16 rounded-full text-white text-sm mt-8'>Book your appointement</button>
      </div>

      <RelatedDoctors />
    </div>
  )
}

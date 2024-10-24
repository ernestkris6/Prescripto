import React from 'react';
import abt from '../assets/about_image.png'
export default function About() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={abt} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Prescripto. Your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto we understand the challenges individuals face when it comes to scheduling doctor's appointment and managing their healthcare records.</p>

          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform. Integrating the latest advancements to improve user experience and deliver superior services. Whether you are booking your first appointment or managing ongoing care. Prescripto is here to support you every step of the way.</p>

          <b className='text-gray-800'><p>Our Vision</p></b>

          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white duration-500 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined Appointment Scheduling That fits into Your Busy Lifestyle</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white duration-500 text-gray-600 cursor-pointer'>
        <b>CONVENIENCE:</b>
        <p>Access to A Network Of Trusted
        Healthcare Professionals In Your Area.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white duration-500 text-gray-600 cursor-pointer'>
        <b>PERSONALIZATION:</b>
        <p>Tailored Recommendations and Reminders
        To Help You Stay On Top of Your Health.</p>
        </div>
      </div>
    </div>

  )
}

import React from 'react'
import contactImg from '../assets/contact_image.png'

export default function Contact() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='flex flex-col md:flex-row my-10 justify-center gap-10 mb-28 text-sm'>
          <img className='w-full md:max-w-[360px]' src={contactImg} alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
            <p className='text-gray-500'>547109 Williams Station <br /> Suite 350, Washington USA</p>
            <p className='text-gray-500'>Tel: (415) 555-0312 <br /> Email: prescripto@gmail.com</p>
            <p  className='text-lg font-semibold text-gray-600'>CAREERS AT PRESCRIPTO</p>
            <p className='text-gray-500'>Learn more about our teams and openings.</p>
            <button className='border py-3 px-6 bg-white hover:bg-primary hover:text-white duration-500 transition-all'>Explore Jobs</button>
          </div>
        </div>
    </div>
  )
}

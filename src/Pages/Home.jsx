import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import Topdoctors from '../components/Topdoctors'
import Banner from '../components/Banner'


export default function Home() {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <Topdoctors />
      <Banner />
   
    </div>
  )
}

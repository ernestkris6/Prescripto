import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Doctors from './Pages/Doctors'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Appointment from './Pages/Appointment';
import Navbar from './components/Navbar';



export default function App() {
  return (
    <div>
      <Navbar />
       <Routes>
          <Route index element={<Home />}/>
          <Route path='doctors' element={<Doctors />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='create' element={<Doctors />} />
          <Route path='doctors' element={<Doctors />} />
          <Route path='doctors' element={<Doctors />} />
          <Route path='doctors' element={<Doctors />} />
          <Route path='appointment' element={<Appointment />} />
       </Routes>
    </div>
  )
}



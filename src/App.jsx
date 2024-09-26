import React from 'react';
import Home from './Pages/Home';
import Doctors from './Pages/Doctors'
import { Route, Routes } from 'react-router-dom';
import Appointment from './Pages/Appointment';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='doctors' element={<Doctors />} />
          <Route path='appointment' element={<Appointment />} />
       </Routes>
    </div>
  )
}



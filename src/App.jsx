import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Doctors from './Pages/Doctors'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Appointment from './Pages/Appointment';
import Create from './Pages/Create';
import Login from './Pages/Login';
import Error from './Pages/Error';


export default function App() {
  return (
    <div className='mx-[10%]'>
      <Navbar />
       <Routes>
          <Route index element={<Home />}/>
          <Route path='doctors' element={<Doctors />} />
          <Route path='doctors/:appointment' element={<Appointment />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='create' element={<Create />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Routes>
    </div>
  )
}



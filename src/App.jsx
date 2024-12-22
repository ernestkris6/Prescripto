import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Doctors from './Pages/Doctors'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Appointment from './Pages/Appointment';
import Appointments from './Pages/Appointments';
import Create from './Pages/Create';
import Login from './Pages/Login';
import Error from './Pages/Error';
import Footer from './components/Footer';




export default function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
       <Routes>
          <Route index element={<Home />}/>
          <Route path='doctors' element={<Doctors />} />
          {/*Protected Routes*/}
          <Route path='doctors/:speciality' element={<Doctors />}/>
          <Route path='login' element={<Login />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='my-profile' element={<Create />} />
          <Route path='my-appointments' element={<Appointments />}/>
          <Route path='appointment/:docId' element={<Appointment />} />
          <Route path='*' element={<Error />} />
        </Routes>
      <Footer />
    </div>
  )
}



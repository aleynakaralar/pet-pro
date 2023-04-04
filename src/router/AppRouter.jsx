import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import AboutUs from '../pages/AboutUs'
import Home from '../pages/Home'
import AnimalMate from '../pages/AnimalMate'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Signup from '../pages/Signup'


const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutus' element={<AboutUs/>}/>
            <Route path='/animalMate' element={<AnimalMate/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter
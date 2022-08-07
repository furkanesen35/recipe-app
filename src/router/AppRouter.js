import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalStyles } from '../components/globalStyles/Global.styles'
import Navbar from '../components/navbar/Navbar'
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import About from "../pages/about/About"

const AppRouter = () => {
 return (
  <BrowserRouter>
   <GlobalStyles/>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/about' element={<About/>} />
   </Routes>
  </BrowserRouter>
 )
}

export default AppRouter
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx' 
import Login from './pages/Login.jsx'
import Signup from './pages/SignUp.jsx'
import ListingPage1 from './pages/ListingPage1.jsx'
import ListingPage2 from './pages/ListingPage2.jsx'

function App() {
 

  return (
    <>
     <Routes> 
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/listingpage1' element={<ListingPage1/>}/>
          <Route path='/listingpage2' element={<ListingPage2/>}/>
     </Routes>
    </>
  )
}

export default App

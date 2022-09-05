import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Components/Home'
import About from './Components/About'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
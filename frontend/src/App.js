import React from 'react'
import './sass/main.scss'

import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx';

import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App


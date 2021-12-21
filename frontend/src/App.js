import React from 'react'
import './sass/app.scss'

import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx';
import Explore from './components/explore/Explore.jsx';
import Collection from './components/collection/Collection.jsx';
import Contact from './components/contact/Contact.jsx';

import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/explore' element={<Explore/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App


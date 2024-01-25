
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'
import Project from './components/Projects/Project'
import About from './components/About/About'
import Skills from './components/skills/Skills'
import React from 'react'
import Hero from './components/Hero/Hero'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {RemoveScrollBar} from 'react-remove-scroll-bar';

function App() {
  

  return (
    <>
    
  <BrowserRouter basename='/portfolio'>
  <Navbar/>
  
  <Routes>
  
    <Route  path='/' element={<Hero/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route  exact path='/contact' element={<Contact/>}/>
    <Route  exact path='/project' element={<Project/>}/>
    <Route exact path='/skills' element={<Skills/>} />

  </Routes>
  </BrowserRouter>
 
      </>
      
    
  )
}

export default App

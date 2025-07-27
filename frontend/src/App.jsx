import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import About from './templates/About';
import Projects from './templates/Projects';
import Contacts from './templates/Contacts';
import Home from './templates/Home';

function AppContent() {
  return (
    <nav className='p-4 flex text-white justify-between items-center bg-transparent fixed top-0 left-0 right-0 z-50 backdrop-blur-xs'>
    <div >
      <h1 className='text-2xl font-bold hover:text-gray-400'><Link to="/">Portfolio</Link></h1>
    </div>
    <div>
      <ul className='flex space-x-12'>
        <li><Link to="/about"  className="
      relative text-white hover:text-gray-400 transition duration-300  
      after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
      after:h-[2px] after:w-0 after:bg-white
      hover:after:w-full
      after:transition-all after:duration-300
      hover:after:bg-purple-600
    ">About Me</Link></li>
        <li><Link to="/projects" className="
      relative text-white hover:text-gray-400 transition duration-300
      after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
      after:h-[2px] after:w-0 after:bg-white
      hover:after:w-full
      after:transition-all after:duration-300
        hover:after:bg-purple-600
    ">Projects</Link></li>
    <li><Link to="/certification" className="
      relative text-white hover:text-gray-400 transition duration-300
      after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
      after:h-[2px] after:w-0 after:bg-white
      hover:after:w-full
      after:transition-all after:duration-300
        hover:after:bg-purple-600
    ">Resume</Link></li>
        <li><Link to="/contact" className="
      relative text-white hover:text-gray-400 transition duration-300
      after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
      after:h-[2px] after:w-0 after:bg-white
      hover:after:w-full
      after:transition-all after:duration-300
        hover:after:bg-purple-600
    ">Contact</Link></li>
      </ul>
    </div>
    </nav>

  )
}

function App() {
  return (
   <Router>
      <div className="min-h-screen bg-[url('./assets/bg.jpg')] bg-cover bg-center">
        <div className="p-4 flex text-white justify-between items-center bg-transparent"></div>
    <AppContent />
     <AnimatePresence mode="wait">
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Contact" element={<Contacts />} />
    </Routes>
    </AnimatePresence>
    </div>
   </Router>
  )
}
export default App;

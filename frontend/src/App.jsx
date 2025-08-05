import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";

import About from './templates/About';
import Projects from './templates/Projects';
import Contacts from './templates/Contacts';
import Home from './templates/Home';

// -------------------- Background Animation --------------------
function Background() {
  return (
    <div className="fixed inset-0 overflow-hidden z-[-1]">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-950 opacity-90" />
      <div className="absolute top-1/2 left-0 w-[300%] h-[20px] bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 opacity-70 blur-3xl rotate-[40deg] animate-wave" />

      <style jsx>{`
        @keyframes pingpong {
          0%   { transform: translateX(-66%) rotate(40deg); }
          45%  { transform: translateX(0%) rotate(40deg); }
          50%  { transform: translateX(0%) rotate(40deg); }
          95%  { transform: translateX(-66%) rotate(40deg); }
          100% { transform: translateX(-66%) rotate(40deg); }
        }
        .animate-wave {
          animation: pingpong 36s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// -------------------- Navbar --------------------
function AppContent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="p-4 flex justify-between items-center bg-transparent fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
    >
      <h1 className="text-2xl font-bold text-white hover:text-gray-400">
        <Link to="/">Portfolio</Link>
      </h1>

      {/* Hamburger - mobile only */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-12 text-white">
        <li><NavLinkItem to="/about">About Me</NavLinkItem></li>
        <li><NavLinkItem to="/projects">Projects</NavLinkItem></li>
        <li><NavLinkItem to="/certification">Resume</NavLinkItem></li>
        <li><NavLinkItem to="/contact">Contact</NavLinkItem></li>
      </ul>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="md:hidden absolute top-full left-0 w-full bg-black bg-opacity-80 backdrop-blur-md text-white flex flex-col space-y-4 py-6 px-8"
          >
            <li><NavLinkItem onClick={() => setIsOpen(false)} to="/about">About Me</NavLinkItem></li>
            <li><NavLinkItem onClick={() => setIsOpen(false)} to="/projects">Projects</NavLinkItem></li>
            <li><NavLinkItem onClick={() => setIsOpen(false)} to="/certification">Resume</NavLinkItem></li>
            <li><NavLinkItem onClick={() => setIsOpen(false)} to="/contact">Contact</NavLinkItem></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLinkItem({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="
        relative inline-block
        hover:text-gray-400 transition duration-300
        after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
        after:h-[2px] after:w-0 after:bg-white
        hover:after:w-full
        after:transition-all after:duration-300
        hover:after:bg-purple-600
      "
    >
      {children}
    </Link>
  );
}

// -------------------- Main App --------------------

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Background />
        <div className="p-4 flex text-white justify-between items-center bg-transparent"></div>
        <AppContent />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;

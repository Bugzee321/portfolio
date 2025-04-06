import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">Hossam Ahmed</Link>
        
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <Link to="/" className="font-medium hover:text-primary">Home</Link>
          <Link to="/about" className="font-medium hover:text-primary">About</Link>
          <Link to="/experience" className="font-medium hover:text-primary">Experience</Link>
          <Link to="/skills" className="font-medium hover:text-primary">Skills</Link>
          <Link to="/education" className="font-medium hover:text-primary">Education</Link>
          <Link to="/contact" className="font-medium hover:text-primary">Contact</Link>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="container py-2 pb-4 flex flex-col space-y-3">
            <Link to="/" className="font-medium hover:text-primary">Home</Link>
            <Link to="/about" className="font-medium hover:text-primary">About</Link>
            <Link to="/experience" className="font-medium hover:text-primary">Experience</Link>
            <Link to="/skills" className="font-medium hover:text-primary">Skills</Link>
            <Link to="/education" className="font-medium hover:text-primary">Education</Link>
            <Link to="/contact" className="font-medium hover:text-primary">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 
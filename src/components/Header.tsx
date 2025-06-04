import React, { useState, useEffect } from 'react';
import { Crown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-900/95 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 text-amber-500">
          <Crown className="h-8 w-8" />
          <span className="font-serif text-2xl">MAHARAJA</span>
        </a>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-16 6h16" />
          </svg>
        </button>
        
        <nav className={`
          ${isMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-zinc-900 p-4' : 'hidden'} 
          md:flex md:static md:w-auto md:bg-transparent md:p-0
        `}>
          <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8">
            <li><a href="#" className="text-white hover:text-amber-400 transition-colors">Home</a></li>
            <li><a href="#about" className="text-white hover:text-amber-400 transition-colors">About</a></li>
            <li><a href="#gallery" className="text-white hover:text-amber-400 transition-colors">Gallery</a></li>
            <li><a href="#menu" className="text-white hover:text-amber-400 transition-colors">Menu</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
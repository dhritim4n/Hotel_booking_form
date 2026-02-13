import React, { useState } from 'react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-(--bg-light)">
      {/* NAVIGATION BAR */}
      <nav className="bg-(--primary-color) text-white py-5 px-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-serif font-bold tracking-widest text-(--secondary-color) uppercase">
            Grand Horizon
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium hover:text-(--secondary-color) transition-colors">Home</a>
            <a href="#book-hotel" className="text-sm font-medium hover:text-(--secondary-color) transition-colors">Book</a>
            <a href="#about" className="text-sm font-medium hover:text-(--secondary-color) transition-colors">About</a>

          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-2xl focus:outline-none text-(--secondary-color)"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Nav Links (Dropdown) */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col gap-4 pb-4 border-t border-white/10 pt-4">
            <a href="#home" className="text-sm font-medium hover:text-(--secondary-color)">Home</a>
            <a href="#book-hotel" className="text-sm font-medium hover:text-(--secondary-color)">Book</a>
            <a href="#about" className="text-sm font-medium hover:text-(--secondary-color)">About</a>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="grow">
        {children}
      </main>

      {/* FOOTER (Remains the same as before) */}
      <footer className="bg-(--primary-color) text-white pt-16 pb-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-(--secondary-color) font-serif text-xl mb-4 italic">Grand Horizon</h3>
            <p className="text-(--text-muted) text-sm leading-relaxed">
              Crafting unforgettable memories through refined hospitality and timeless luxury since 1924.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-(--secondary-color) cursor-pointer">Privacy Policy</li>
              <li className="hover:text-(--secondary-color) cursor-pointer">Terms of Service</li>
              <li className="hover:text-(--secondary-color) cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Location</h4>
            <p className="text-sm text-gray-400">Kolkata, West Bengal, India</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-xs text-gray-500 uppercase tracking-widest">
          © {new Date().getFullYear()} Grand Horizon Hotels. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
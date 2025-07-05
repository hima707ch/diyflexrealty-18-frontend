import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center" id="Header_1">
            <Link to="/" className="flex items-center">
              <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" />
              <span className="ml-2 text-2xl font-bold text-white hover:text-blue-200 transition-colors duration-300">PropertyHub</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8" id="Header_2">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="Search properties..."
                className="px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors duration-300">
                Search
              </button>
            </form>
          </div>

          <nav className="hidden md:flex items-center space-x-6" id="Header_3">
            <Link
              to="/"
              className={`text-white hover:text-blue-200 transition-colors duration-300 ${location.pathname === '/' ? 'border-b-2 border-white' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/propertydetailpage"
              className={`text-white hover:text-blue-200 transition-colors duration-300 ${location.pathname === '/propertydetailpage' ? 'border-b-2 border-white' : ''}`}
            >
              Property Details
            </Link>
            <Link
              to="/loginpage"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-300"
            >
              Login
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            id="Header_4"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4" id="Header_5">
            <form onSubmit={handleSearch} className="mb-4">
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-white hover:text-blue-200 transition-colors duration-300 ${location.pathname === '/' ? 'border-b-2 border-white' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/propertydetailpage"
                className={`text-white hover:text-blue-200 transition-colors duration-300 ${location.pathname === '/propertydetailpage' ? 'border-b-2 border-white' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Property Details
              </Link>
              <Link
                to="/loginpage"
                className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
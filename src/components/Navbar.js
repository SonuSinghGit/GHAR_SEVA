"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Separator - Left side */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link 
              href="/" 
              className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-blue-600 transition-colors whitespace-nowrap"
              onClick={() => setIsOpen(false)}
            >
              SEVA EXPRESS
            </Link>
            <div className="hidden sm:flex items-center">
              <span className="h-6 w-px bg-gray-400"></span>
              <span className="ml-2 sm:ml-4 text-gray-400 text-xs sm:text-sm whitespace-nowrap">
                DoorStep Service provider
              </span>
            </div>
          </div>

          {/* Centered Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-4 md:space-x-6 lg:space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-blue-600 font-medium transition-colors text-sm md:text-base"
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-white hover:text-blue-600 font-medium transition-colors text-sm md:text-base"
            >
              Service
            </Link>
            <Link 
              href="/about-us" 
              className="text-white hover:text-blue-600 font-medium transition-colors text-sm md:text-base"
            >
              About
            </Link>
            <Link 
              href="/become-partner" 
              className="text-white hover:text-blue-600 font-medium transition-colors text-sm md:text-base"
            >
              Become Partner
            </Link>
          </div>

          {/* Book Now Button - Right side */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/book-service" 
              className="bg-yellow-600 hover:bg-yellow-800 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md font-medium transition-colors whitespace-nowrap text-sm md:text-base"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                // Close icon (X)
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                href="/" 
                className="text-white hover:text-blue-600 font-medium transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className="text-white hover:text-blue-600 font-medium transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Service
              </Link>
              <Link 
                href="/about-us" 
                className="text-white hover:text-blue-600 font-medium transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/become-partner" 
                className="text-white hover:text-blue-600 font-medium transition-colors px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Become Partner
              </Link>
              <div className="pt-2">
                <Link 
                  href="/book-service" 
                  className="block text-center bg-yellow-600 hover:bg-yellow-800 text-white px-4 py-2 rounded-md font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
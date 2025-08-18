"use client";

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Separator - Left side */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link 
              href="/" 
              className="text-lg sm:text-xl md:text-2xl font-bold text-white hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Ghar Seva
            </Link>
            <div className="hidden sm:flex items-center">
              <span className="h-6 w-px bg-gray-400"></span>
              <span className="ml-2 sm:ml-4 text-gray-400 text-xs sm:text-sm whitespace-nowrap">
                Third party Service provider
              </span>
            </div>
          </div>

          {/* Centered Navigation Links */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-4 md:space-x-6 lg:space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-blue-600 font-medium transition-colors text-sm md:text-base"
            >
              Home
            </Link>
            <Link 
              href="/service" 
              className="text-white hover:text-blue-600 font-medium transition-colors text-sm md:text-base"
            >
              Service
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-blue-600 font-medium transition-colors text-sm md:text-base"
            >
              About
            </Link>
            <Link 
              href="/testimonial" 
              className="text-white hover:text-blue-600 font-medium transition-colors text-sm md:text-base"
            >
              Book Now
            </Link>
          </div>

          {/* Book Now Button - Right side */}
          <div className="flex items-center">
            <Link 
              href="/booknow" 
              className="bg-yellow-600 hover:bg-yellow-800 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md font-medium transition-colors whitespace-nowrap text-sm md:text-base"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
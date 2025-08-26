import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Company Info */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold">Dr. Iphone Repair</h3>
          <p className="text-gray-300 text-sm">
            We, Ghar Seva situated at Siwan (Bihar) are leading service providers providing various services Which Is Very Helpful to get your life Easy.
          </p>
          <div className="flex space-x-3">
            <a href="#" className="text-gray-300 hover:text-blue-400 transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-600 transition">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="text-gray-300 hover:text-pink-500 transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-700 transition">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold">Useful Links</h3>
          <ul className="space-y-1">
            <li><Link href="/about" className="text-gray-300 hover:text-white transition text-sm">About Us</Link></li>
            <li><Link href="/services" className="text-gray-300 hover:text-white transition text-sm">Services We Provide</Link></li>
            <li><Link href="/brands" className="text-gray-300 hover:text-white transition text-sm">Contact Us</Link></li>
            <li><Link href="/blogs" className="text-gray-300 hover:text-white transition text-sm">Blogs</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold">Company</h3>
          <ul className="space-y-1">
            <li><Link href="/testimonials" className="text-gray-300 hover:text-white transition text-sm">Testimonials</Link></li>
            <li><Link href="/privacy" className="text-gray-300 hover:text-white transition text-sm">Privacy Policy</Link></li>
            <li><Link href="/contact" className="text-gray-300 hover:text-white transition text-sm">Get In Touch</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-3">
          <h3 className="text-xl font-bold">Newsletter</h3>
          <p className="text-gray-300 text-sm">
            Subscribe to our newsletter to get updates. We don't send spam emails.
          </p>
          <form className="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-3 py-1.5 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500 text-sm"
              required
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-4 rounded transition text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Ghar Seva. All rights reserved.</p>
      </div>
      <div className='text-sm'>
        **All product names, logos, and brands are the property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement. GHAR SEVA is a delivery company and is not affiliated with any brand listed on our website
      </div>
    </footer>
  );
}

export default Footer;
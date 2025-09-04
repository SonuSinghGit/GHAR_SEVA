"use client";

import { useState } from 'react';

function AboutUs() {
  const [activeTab, setActiveTab] = useState('mission');

  // Team members data
  const teamMembers = [
    {
      name: 'Vivek Rai',
      role: 'Founder & CEO',
      image: '/team/rajesh.jpg', // Replace with actual image path
      description: 'With over 10 years of experience in service industry.'
    },
    {
      name: 'Sonu Singh',
      role: 'Technical Head',
      image: '/team/priya.jpg', // Replace with actual image path
      description: 'Leads our team of skilled technicians and trainers.'
    },
    {
      name: 'Hariom Singh',
      role: 'Operational Manager',
      image: '/team/amit.jpg', // Replace with actual image path
      description: 'Expert in managing field operations and customer satisfaction..'
    },
    {
      name: 'Golu Rai',
      role: 'Admin Executive',
      image: '/team/amit.jpg', // Replace with actual image path
      description: 'Leads our team of skilled technicians and trainers.'
    }
  ];

  // Service areas
  const serviceAreas = [
    'Gorakhpur',
    'Patna',
    'Siwan',
    'Mairwa',
    'Chhapra',
    'Gopalganj',
  ];

  // Services offered
  const services = [
    {
      title: 'Appliance Repair',
      icon: '🔧',
      description: 'Expert repair for all home appliances'
    },
    {
      title: 'Plumbing Services',
      icon: '🚿',
      description: 'Fix leaks, clogs, and installation'
    },
    {
      title: 'Electrical Work',
      icon: '💡',
      description: 'Safe and reliable electrical solutions'
    },
    {
      title: 'Home Cleaning',
      icon: '🧹',
      description: 'Thorough cleaning for your home'
    },
    {
      title: 'Pest Control',
      icon: '🐜',
      description: 'Effective pest elimination'
    },
    {
      title: 'AC Services',
      icon: '❄️',
      description: 'Installation, repair, and maintenance'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-yellow-400 to-green-400 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About DoorStep Service</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your trusted partner for all doorstep services in Eastern Uttar Pradesh
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600">5000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Skilled Professionals</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-gray-600">Services Offered</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600">6</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          
          <div className="flex flex-wrap justify-center mb-8">
            <button 
              className={`px-6 py-2 font-medium ${activeTab === 'mission' ? 'bg-blue-600 text-white' : 'bg-gray-200'} rounded-t-lg mr-2`}
              onClick={() => setActiveTab('mission')}
            >
              Our Mission
            </button>
            <button 
              className={`px-6 py-2 font-medium ${activeTab === 'vision' ? 'bg-blue-600 text-white' : 'bg-gray-200'} rounded-t-lg mr-2`}
              onClick={() => setActiveTab('vision')}
            >
              Our Vision
            </button>
            <button 
              className={`px-6 py-2 font-medium ${activeTab === 'values' ? 'bg-blue-600 text-white' : 'bg-gray-200'} rounded-t-lg`}
              onClick={() => setActiveTab('values')}
            >
              Our Values
            </button>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
            {activeTab === 'mission' && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-700 mb-4">
                  To provide reliable, high-quality doorstep services that make our customers' lives easier and more convenient. 
                  We strive to be the most trusted service provider in Eastern Uttar Pradesh by delivering exceptional value 
                  and building lasting relationships with our community.
                </p>
                <p className="text-gray-700">
                  We at DoorStep Service are your dependable partners for all of your home service needs. 
                  Our goal is to deliver convenience right to your door.
                </p>
              </div>
            )}
            
            {activeTab === 'vision' && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To revolutionize the service industry in smaller cities and towns by bringing professional, 
                  standardized services to every doorstep. We envision a future where quality home services are 
                  accessible and affordable for everyone, regardless of their location.
                </p>
              </div>
            )}
            
            {activeTab === 'values' && (
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li><strong>Quality:</strong> We never compromise on service standards</li>
                  <li><strong>Reliability:</strong> We show up on time and deliver what we promise</li>
                  <li><strong>Trust:</strong> We understand that trust takes years to build</li>
                  <li><strong>Innovation:</strong> We continuously improve our services</li>
                  <li><strong>Community:</strong> We're committed to the growth of our local communities</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            We offer a comprehensive range of doorstep services to meet all your home maintenance needs
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Cities We Serve</h2>
          <p className="text-gray-600 text-center mb-12">
            Currently providing our premium doorstep services in these cities
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceAreas.map((city, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
                <div className="font-semibold text-blue-800">{city}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              We're expanding rapidly! Want our services in your city?
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
              Request Service in Your City
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-3xl font-bold text-center mb-4">Our Leadership Team</h2>
          <p className="text-gray-600 text-center mb-12">
            Meet the passionate individuals driving our mission forward
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md text-center">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for team member image */}
                  <span className="text-6xl">👤</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <div className="text-blue-600 mb-3">{member.role}</div>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">✓</span>
                Trained Professionals
              </h3>
              <p className="text-gray-600">
                Our technicians undergo rigorous training and background checks. We don't compromise with our standards 
                and provide efficient results as expected by our customers.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">✓</span>
                Quick Response Time
              </h3>
              <p className="text-gray-600">
                We understand that emergencies don't wait. That's why we guarantee a quick response time 
                and often same-day service for urgent requests.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">✓</span>
                Affordable Pricing
              </h3>
              <p className="text-gray-600">
                Quality service doesn't have to break the bank. We offer transparent, competitive pricing 
                with no hidden charges.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">✓</span>
                100% Satisfaction Guarantee
              </h3>
              <p className="text-gray-600">
                If you're not happy with our service, we'll make it right. Your satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Services?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book a service today and let our experts take care of your home needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100">
              <a href='/book-service'>Book Now </a>
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700">
              <a href='/services'>Contact Us </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
"use-client";
import React from 'react'

function FeatureServices() {

     // Featured services section
const featuredServices = [
  {
    name: "AC Service",
    description: "Professional AC repair, servicing, installation, and gas refill by certified technicians. We ensure optimal cooling performance and energy efficiency.",
    icon: "❄️"
  },
  {
    name: "Hotel Rooms",
    description: "Book comfortable, clean, and affordable hotel rooms with premium amenities. Best deals guaranteed for both business and leisure travelers.",
    icon: "🏨"
  },
  {
    name: "Food Delivery",
    description: "Get your favorite meals delivered fast from top restaurants in your area. Wide variety of cuisines available for lunch, dinner, and special occasions.",
    icon: "🍕"
  },
  {
    name: "Washing Machine Service",
    description: "Expert repair and maintenance for all washing machine brands. Our technicians fix mechanical issues, electrical problems, and leakage concerns.",
    icon: "🧺"
  },
  {
    name: "Electrician",
    description: "Certified electricians for all your electrical needs - wiring, fixture installation, switch repairs, and electrical safety inspections for your home or office.",
    icon: "⚡"
  },
  {
    name: "Plumber Service",
    description: "Professional plumbing solutions for leaks, clogged drains, pipe installation, bathroom fittings, and all other plumbing emergencies at your doorstep.",
    icon: "🔧"
  }
];
  return (
    <>
    {/* Featured Services */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Featured Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
      
    
  )
}

export default FeatureServices

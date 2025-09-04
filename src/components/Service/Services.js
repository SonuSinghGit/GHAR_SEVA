"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FeatureServices from './FeatureServices';
import StatsSection from './StatsSection';

function Services() {
  const router = useRouter();
  // State for search functionality
  const [searchTerm, setSearchTerm] = useState('');
  // State to track how many services to show
  const [servicesToShow, setServicesToShow] = useState(20);
  
  // Services data
  const services = [
    { name: "AC Repair & Service", category: "Appliances" },
    { name: "Food Delivery", category: "Home Improvement" },
    { name: "Grocery Delivery", category: "Home Improvement" },
    { name: "Partial Home Painting Consult", category: "Consultation" },
    { name: "Disinfection Services", category: "Cleaning" },
    { name: "Microwave Video Consult", category: "Consultation" },
    { name: "Talk To Expert", category: "Consultation" },
    { name: "Air Cooler Repair", category: "Appliances" },
    { name: "Atomberg", category: "Appliances" },
    { name: "Inverter Repair & Service", category: "Electrical" },
    { name: "Laser Doctor Consultation", category: "Health" },
    { name: "Nail Studio For Women", category: "Beauty" },
    { name: "Laser Hair Reduction", category: "Beauty" },
    { name: "Bed Bugs Control", category: "Pest Control" },
    { name: "Hotels & Rooms Book", category: "Home Improvement" },
    { name: "Chimney Repair & Service", category: "Appliances" },
    { name: "Geyser Repair & Service", category: "Plumbing" },
    { name: "Furniture Assembly", category: "Home Improvement" },
    { name: "Wall Beautification", category: "Home Improvement" },
    { name: "Carpenter", category: "Home Improvement" },
    { name: "Electrician", category: "Electrical" },
    { name: "Cockroach, Ant & General Pest Control", category: "Pest Control" },
    { name: "Kitchen Cleaning", category: "Cleaning" },
    { name: "Plumber", category: "Plumbing" },
    { name: "Spa For Women", category: "Beauty" },
    { name: "Water Purifier Repair & Service", category: "Plumbing" },
    { name: "Massage For Men", category: "Health" },
    { name: "Salon Prime For Kids & Men", category: "Beauty" },
    { name: "Bathroom & Kitchen Cleaning", category: "Cleaning" },
    { name: "Salon Prime", category: "Beauty" },
    { name: "Washing Machine Repair", category: "Appliances" },
    { name: "Television Repair", category: "Appliances" },
    { name: "Full Home Cleaning", category: "Cleaning" },
    { name: "Refrigerator Repair", category: "Appliances" },
    { name: "Microwave Repair", category: "Appliances" },
    { name: "Sofa & Carpet Cleaning", category: "Cleaning" },
    { name: "Gas Stove Repair & Service", category: "Appliances" },
    { name: "Salon Classic", category: "Beauty" },
    { name: "Ikea Furniture Assembly", category: "Home Improvement" },
    { name: "Hair Studio For Women", category: "Beauty" },
    { name: "Salon Luxe", category: "Beauty" },
    { name: "Spa Luxe", category: "Health" },
    { name: "Salon Royale For Kids & Men", category: "Beauty" },
    { name: "Massage Therapy For Men Royale", category: "Health" },
    { name: "Massage For Men Ayurveda", category: "Health" },
    { name: "Spa Ayurveda", category: "Health" },
    { name: "Weekly Bathroom Cleaning", category: "Cleaning" },
    { name: "Fan Installation", category: "Electrical" },
    { name: "Mixer & Grinder Repair", category: "Appliances" },
    { name: "Partial Home Fulfilment", category: "Home Improvement" },
    { name: "Makeup & Styling Studio", category: "Beauty" },
    { name: "Painting Services", category: "Home Improvement" },
    { name: "Massage For Men", category: "Health" },
    { name: "Smart Locks", category: "Home Improvement" },
    { name: "Home On Rent", category: "Real Estate" },
    { name: "Pest Control", category: "Pest Control" },
    { name: "Air Purifier Service", category: "Appliances" },
    { name: "Water Tank Cleaning", category: "Cleaning" },
    { name: "Termite Control", category: "Pest Control" },
    { name: "Pest Control Follow Up Service", category: "Pest Control" },
  ];

  // Categories for filtering
  const categories = ["All", "Appliances", "Home Improvement", "Cleaning", "Plumbing", "Electrical", "Pest Control", "Beauty", "Health", "Consultation", "Real Estate"];

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter services based on search and category
  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get services to display (first 20 or all if show more is clicked)
  const servicesToDisplay = filteredServices.slice(0, servicesToShow);

  // Function to handle booking
  const handleBookService = (serviceName) => {
    router.push(`/book-service?service=${encodeURIComponent(serviceName)}`);
  };

  // Function to show more services
  const showMoreServices = () => {
    setServicesToShow(filteredServices.length);
  };

  // Function to reset to initial view
  const showLessServices = () => {
    setServicesToShow(20);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className=" text-black bg-amber-200 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hum Hain Na!!</h1>
          <p className="text-xl mb-8">India's Largest Service Marketplace</p>
          
          <div className="max-w-2xl mx-auto relative bg-white rounded-3xl">
            <input 
              type="text" 
              placeholder="Search for a Service" 
              className="w-full py-4 px-6 rounded-full text-black shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-2 top-2 bg-blue-600 text-black py-2 px-6 rounded-full hover:bg-blue-700 transition">
              Search
            </button>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
            <span className="bg-white text-blue-600 font-semibold py-1 px-4 rounded-full">Siwan & GorkhaPur</span>
            <span className="bg-white text-blue-600 font-semibold py-1 px-4 rounded-full">24/7 Availability</span>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Services Offered - Doorstep India</h2>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black hover:bg-gray-300'}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setServicesToShow(20); // Reset to initial view when category changes
                }}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Services Count */}
          <div className="text-center mb-6">
            <p className="text-gray-600">
              Showing {servicesToDisplay.length} of {filteredServices.length} services
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {servicesToDisplay.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
                <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full mb-4">
                  {service.category}
                </span>
                <button 
                  onClick={() => handleBookService(service.name)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                >
                  Book Service
                </button>
              </div>
            ))}
          </div>

          {/* Show More/Less Button */}
          {filteredServices.length > 20 && (
            <div className="text-center mt-8">
              {servicesToShow < filteredServices.length ? (
                <button 
                  onClick={showMoreServices}
                  className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
                >
                  Show More Services ({filteredServices.length - servicesToShow} more)
                </button>
              ) : (
                <button 
                  onClick={showLessServices}
                  className="bg-gray-600 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition"
                >
                  Show Less
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      <StatsSection/>
      <FeatureServices/>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Grow your service business with DoorStepIndia</h2>
          <p className="text-xl mb-8">Getting 4 service requests within 1 minute</p>
          <p className="mb-8">*As per previous year data.</p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition">
            Join Our Professional Network
          </button>
        </div>
      </section>
    </div>
  );
}

export default Services;
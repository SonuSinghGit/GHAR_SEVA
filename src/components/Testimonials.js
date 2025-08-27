"use client";

import { useState } from 'react';

function Testimonials() {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      image: "/api/placeholder/80/80",
      review: "The plumbing service was exceptional! They arrived on time and fixed our leaky faucet in no time. Highly recommend their doorstep services.",
      rating: 5,
      service: "Plumbing Repair"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Office Manager",
      image: "/api/placeholder/80/80",
      review: "Our office needed deep cleaning before reopening. The team did an amazing job and followed all safety protocols. Very professional!",
      rating: 4,
      service: "Commercial Cleaning"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Senior Citizen",
      image: "/api/placeholder/80/80",
      review: "As a senior, I appreciate services that come to my doorstep. The technician was patient, kind, and solved my electrical issue quickly.",
      rating: 5,
      service: "Electrical Repair"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Busy Parent",
      image: "/api/placeholder/80/80",
      review: "Between work and kids, I have no time for home repairs. Your handyman service was a lifesaver! Quality work at reasonable prices.",
      rating: 5,
      service: "Handyman Services"
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "Restaurant Owner",
      image: "/api/placeholder/80/80",
      review: "The appliance repair service saved us during a busy weekend. Quick response and expert fix of our commercial refrigerator.",
      rating: 4,
      service: "Appliance Repair"
    },
    {
      id: 6,
      name: "James Thompson",
      role: "Property Manager",
      image: "/api/placeholder/80/80",
      review: "We use their services across multiple properties. Consistent quality, reliable technicians, and great customer service every time.",
      rating: 5,
      service: "Multiple Services"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % (testimonials.length - testimonialsPerPage + 1)
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - testimonialsPerPage : prevIndex - 1
    );
  };

  // Render star ratings
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 ">
          What Our Clients Say About Our Services
        </h2>
        <p className="text-center text-black mb-10 max-w-3xl mx-auto">
          Hear from our satisfied customers who have experienced our quality doorstep services
        </p>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(currentIndex, currentIndex + testimonialsPerPage).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                      {/* In a real app, you would use next/image */}
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-2">"{testimonial.review}"</p>
                <div className="mt-4 pt-2 border-t border-gray-100">
                  <span className="text-sm font-medium text-blue-600">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: testimonials.length - testimonialsPerPage + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full mx-1 ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
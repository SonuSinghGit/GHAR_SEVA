"use client";
import React from 'react';
import { useForm } from 'react-hook-form';

function Location() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend or email service
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Reduced height */}
      <div className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Get in touch with us for any queries or service requests. We're here to help!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Flex container for equal height sections */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Contact Form - Reduced padding and spacing */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-5">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Send us a Message</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    {...register("firstName", { required: "First name is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-600">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    {...register("lastName", { required: "Last name is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-600">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <select
                  id="subject"
                  {...register("subject", { required: "Please select a subject" })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                >
                  <option value="">Select a subject</option>
                  <option value="service-request">Service Request</option>
                  <option value="general-inquiry">General Inquiry</option>
                  <option value="complaint">Complaint</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-600">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={9}
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium text-sm"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map and Contact Info - Reduced spacing and padding */}
          <div className="flex-1 flex flex-col gap-5">
            {/* Map - Reduced height */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <h2 className="text-xl font-bold p-4 text-gray-800">Our Location</h2>
              <div className="px-4 pb-4">
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.102257667909!2d83.373614575997!3d26.84181716263075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a351d59a7%3A0x679ff7f23523115b!2sGorakhpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1691592345678!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Location in Gorakhpur"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Information - Reduced padding */}
            <div className="bg-white rounded-lg shadow-md p-5">
              <h2 className="text-xl font-bold mb-2 text-gray-800">Contact Information</h2>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 11111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">Address</h3>
                    <p className="text-gray-600 text-sm">Mahadeva Road , Siwan(Bihar) & Gorakhpur, Uttar Pradesh 273001</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">Phone</h3>
                    <p className="text-gray-600 text-sm">+91 8210599619</p>
                    <p className="text-gray-600 text-sm">+91 9708769102</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">Email</h3>
                    <p className="text-gray-600 text-sm">vivekray1996@gmail.com</p>
                    <p className="text-gray-600 text-sm">sonucse103@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm">Business Hours</h3>
                    <p className="text-gray-600 text-sm">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-600 text-sm">Sunday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Areas Banner - Reduced padding */}
      <div className="bg-white py-8 mt-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Areas We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
            {['Gorakhpur', 'Siwan', 'Deoria', 'Maharajganj'].map((city, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                <div className="font-medium text-black bg-amber-300 px-2 py-2 rounded-lg text-sm">{city}</div>
              </div>
            ))}
          </div>
          <p className="text-center mt-4 text-black text-sm">
            We're expanding to more cities soon!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Location;
import React from 'react';
import Head from 'next/head';

function OurSelf() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>GharSEVA - Your Doorstep Service Provider</title>
        <meta name="description" content="Professional doorstep services including food delivery, electronics repair, AC servicing, technicians, and daily needs" />
      </Head>

    
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-black800 leading-tight mb-6">
          <spna className="text-amber-500"> SEVA EXPRESS </spna>  Professional Services Provider <span className="text-indigo-600">At Your Doorstep</span>
          </h1>
          <p className="text-black600 text-lg mb-8">
            From food delivery to appliance repair, GharSEVA brings expert services right to your home. 
            Experience convenience, quality, and reliability with just a few clicks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Explore Services
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
              Download App
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-indigo-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-pink-600 rounded-full opacity-20 animate-pulse"></div>
            <div className="relative bg-white p-2 rounded-2xl shadow-xl">
              <img 
                src="/images/images.png" 
                alt="Doorstep Service" 
                className="rounded-xl w-full h-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black800 mb-2">Our Services</h2>
            <p className="text-black max-w-6xl mx-auto text-2xl">
              We offer a wide range of services to make your life easier. All services are provided by verified professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-yellow-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-200 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black800 mb-2">Food Delivery</h3>
              <p className="text-black600">
                Get your favorite meals from top restaurants delivered right to your doorstep, hot and fresh.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-yellow-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-200 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black800 mb-2">Electronics Repair</h3>
              <p className="text-black600">
                Expert technicians for all your electronic device repairs - phones, laptops, TVs, and more.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-yellow-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-200 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black800 mb-2">AC Services</h3>
              <p className="text-black600">
                Professional AC installation, maintenance, and repair services to keep you cool all year round.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-yellow-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-pugreen-200 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black800 mb-2">Technician Services</h3>
              <p className="text-black600">
                Skilled technicians for plumbing, electrical, appliance repair, and other household needs.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-yellow-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-yegreen-200 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black800 mb-2">Daily Needs</h3>
              <p className="text-black600">
                Groceries, medicines, and other daily essentials delivered to your home quickly and reliably.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="bg-yellow-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-200 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black800 mb-2">Home Cleaning</h3>
              <p className="text-black600">
                Professional home cleaning services to keep your living space sparkling clean and hygienic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-green-200">
        <div className="container max-w-7xl mx-auto px-4 ">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">How It Works</h2>
            <p className="text-black max-w-2xl mx-auto">
              Getting services at your doorstep has never been easier. Just follow these simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <span className="text-3xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Book a Service</h3>
              <p className="text-black">
                Select from our wide range of services and book through our app, website, or phone call.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <span className="text-3xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Confirm Professional</h3>
              <p className="text-black">
                We'll match you with a verified professional and share their details before they arrive.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                <span className="text-3xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Enjoy the Service</h3>
              <p className="text-black">
                Relax while our expert provides quality service at your doorstep. Payment is easy and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to experience convenience?</h2>
          <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
            Download our app now and get all services at your fingertips with exclusive app-only offers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Download for iOS
            </button>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
              Download for Android
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default OurSelf;
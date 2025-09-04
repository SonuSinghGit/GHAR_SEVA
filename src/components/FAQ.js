"use client";
import React, { useState } from 'react';

function FAQ() {
  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState(0);
  // State to track if all FAQs are shown or just the first 5
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  // FAQ data
  const faqItems = [
    {
      question: "How quickly can you provide service?",
      answer: "We typically provide same-day or next-day service depending on your location and service type. For emergency services like plumbing leaks or electrical issues, we can often dispatch a technician within 2-4 hours."
    },
    {
      question: "Are your technicians verified and trained?",
      answer: "Yes, all our technicians undergo thorough background checks, verification, and training. They are experienced professionals with expertise in their respective fields. We also provide regular training to keep them updated with the latest techniques and technologies."
    },
    {
      question: "What areas do you serve?",
      answer: "We currently serve Gorakhpur, Siwan, Deoria, Maharajganj and surrounding areas. We're continuously expanding to more cities to make our services accessible to more customers."
    },
    {
      question: "How do I book a service?",
      answer: "You can book a service through our website, mobile app, or by calling our customer support. The process is simple: select your service, choose a convenient time slot, provide your address, and confirm your booking."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept multiple payment methods including cash, UPI payments (Google Pay, PhonePe, Paytm), credit/debit cards, and net banking. Payment is typically made after service completion."
    },
    {
      question: "Do you provide warranty on your services?",
      answer: "Yes, we provide a 30-day service warranty on most repairs and installations. The specific warranty details will be provided before you confirm the service. For recurring services like pest control, we offer follow-up visits if needed."
    },
    {
      question: "What safety measures do you follow?",
      answer: "All our technicians follow strict safety protocols including wearing masks, using sanitizers, maintaining social distancing, and sterilizing tools before and after each service. We also offer contactless service options if preferred."
    },
    {
      question: "Can I reschedule or cancel my booking?",
      answer: "Yes, you can reschedule or cancel your booking free of charge up to 2 hours before the scheduled service time. For cancellations after this window, a nominal fee may apply depending on the service type."
    },
    {
      question: "How are your pricing determined?",
      answer: "Our pricing is transparent and based on the type of service, time required, and materials needed. You'll receive a clear estimate before we begin any work, with no hidden charges."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "Customer satisfaction is our priority. If you're not happy with the service provided, please contact us within 24 hours and we'll send another technician to address your concerns at no additional cost."
    }
  ];

  // Get the FAQs to display based on showAllFaqs state
  const displayedFaqs = showAllFaqs ? faqItems : faqItems.slice(0, 5);

  // Stats data
  const stats = [
    { value: "10,000+", label: "Happy Clients" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "45+", label: "Services Offered" },
    { value: "15+", label: "Cities Served" },
    { value: "24/7", label: "Customer Support" },
    { value: "30 Days", label: "Service Warranty" }
  ];

  // Toggle FAQ item
  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Toggle showing all FAQs
  const toggleShowAllFaqs = () => {
    setShowAllFaqs(!showAllFaqs);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers to common questions about our doorstep services. Can't find what you're looking for? Contact our support team.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Services?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-3">Common Questions</h2>
            
            <div className="space-y-4">
              {displayedFaqs.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleItem(index)}
                  >
                    <span className="font-semibold text-lg">{item.question}</span>
                    <svg
                      className={`w-5 h-5 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Read More / Show Less Button */}
            {faqItems.length > 5 && (
              <div className="text-center mt-8">
                <button
                  onClick={toggleShowAllFaqs}
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {showAllFaqs ? 'Show Less' : `Read More FAQs (${faqItems.length - 5} more)`}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">Still Have Questions?</h2>
          <p className="text-xl mb-4 max-w-5xl mx-auto">
            Our customer support team is available 24/7 to help you with any queries or concerns.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Contact Support
            </button>
            <button className="bg-white text-blue-600 border border-blue-600 py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              Book a Service
            </button>
          </div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 text-2xl mb-3">📞</div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+91 9708769102</p>
              <p className="text-gray-600">+91 8210599619</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 text-2xl mb-3">✉️</div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">vivekray1996@gmail.com</p>
              <p className="text-gray-600">sonucse103@gmail.com</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 text-2xl mb-3">💬</div>
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600">Available 24/7 on our website and app</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Popular Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-3xl mb-3">🔧</div>
              <h3 className="font-semibold mb-2">Home Repairs</h3>
              <p className="text-gray-600 text-sm">Plumbing, electrical, carpentry, and appliance repairs</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-3xl mb-3">🧹</div>
              <h3 className="font-semibold mb-2">Cleaning Services</h3>
              <p className="text-gray-600 text-sm">Home, office, and specialized cleaning services</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-3xl mb-3">💅</div>
              <h3 className="font-semibold mb-2">Beauty & Wellness</h3>
              <p className="text-gray-600 text-sm">Salon, spa, and massage services at home</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-3xl mb-3">🐜</div>
              <h3 className="font-semibold mb-2">Pest Control</h3>
              <p className="text-gray-600 text-sm">Professional pest control for homes and offices</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
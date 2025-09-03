"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
// Replace these values with your actual EmailJS credentials
emailjs.init("YOUR_PUBLIC_KEY"); // From Account → API Keys

function BecomePartner() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  // Available services
  const availableServices = [
    { id: 'cleaning', name: 'Home Cleaning' },
    { id: 'plumbing', name: 'Plumbing' },
    { id: 'electrical', name: 'Electrical' },
    { id: 'appliance', name: 'Appliance Repair' },
    { id: 'delivery', name: 'Food Delivery' },
    { id: 'carpentry', name: 'Carpentry' },
    { id: 'painting', name: 'Painting' },
    { id: 'ac', name: 'AC Service' },
    { id: 'beauty', name: 'Beauty Services' },
    { id: 'salon', name: 'Salon at Home' }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        business_name: data.businessName,
        contact_person: data.contactPerson,
        email: data.email,
        phone: data.phone,
        address: data.address,
        city: data.city,
        zip_code: data.zipCode,
        services: Array.isArray(data.services) ? data.services.join(', ') : data.services,
        experience: data.experience,
        description: data.description,
        to_email: 'your-email@example.com', // Replace with your email address
        to_name: 'Partnership Team',
        from_name: data.businessName,
        reply_to: data.email
      };

      // Send email using EmailJS
      // Replace these values with your actual EmailJS credentials
      const response = await emailjs.send(
        'YOUR_SERVICE_ID', // From Email Services → Service ID
        'YOUR_TEMPLATE_ID', // From Email Templates → Template ID
        templateParams
      );

      console.log('Email sent successfully:', response);
      
      // Show success message
      setSubmitStatus({ 
        success: true, 
        message: 'Application submitted successfully! We will contact you shortly.' 
      });
      
      // Reset form
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Show error message
      setSubmitStatus({ 
        success: false, 
        message: 'There was an error submitting your application. Please try again or contact us directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Become a Service Partner
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our network of trusted professionals and bring quality doorstep services to customers in your area.
          </p>
        </div>

        {/* Status Message */}
        {submitStatus.message && (
          <div className={`mb-6 p-4 rounded-md ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {submitStatus.message}
          </div>
        )}

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Business Information Section */}
              <div className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Business Information</h2>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Name *
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      {...register("businessName", { required: "Business name is required" })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.businessName && (
                      <p className="mt-1 text-sm text-red-600">{errors.businessName.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Person *
                    </label>
                    <input
                      id="contactPerson"
                      type="text"
                      {...register("contactPerson", { required: "Contact person is required" })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.contactPerson && (
                      <p className="mt-1 text-sm text-red-600">{errors.contactPerson.message}</p>
                    )}
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
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone", { 
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9+\s()-]{10,}$/,
                          message: "Please enter a valid phone number"
                        }
                      })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Address Information Section */}
              <div className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Business Location</h2>
                
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address *
                    </label>
                    <input
                      id="address"
                      type="text"
                      {...register("address", { required: "Address is required" })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {errors.address && (
                      <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        id="city"
                        type="text"
                        {...register("city", { required: "City is required" })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.city && (
                        <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-70 mb-1">
                        ZIP Code *
                      </label>
                      <input
                        id="zipCode"
                        type="text"
                        {...register("zipCode", { 
                          required: "ZIP code is required",
                          pattern: {
                            value: /^[0-9]{5}(-[0-9]{4})?$/,
                            message: "Please enter a valid ZIP code"
                          }
                        })}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      {errors.zipCode && (
                        <p className="mt-1 text-sm text-red-600">{errors.zipCode.message}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Services Selection Section */}
              <div className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Services Offered</h2>
                <p className="text-sm text-gray-600 mb-6">Select the services you would like to offer through our platform:</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {availableServices.map(service => (
                    <div key={service.id} className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id={service.id}
                          type="checkbox"
                          value={service.name}
                          {...register("services", { 
                            required: "Please select at least one service" 
                          })}
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor={service.id} className="font-medium text-gray-700">
                          {service.name}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
                {errors.services && (
                  <p className="mt-2 text-sm text-red-600">{errors.services.message}</p>
                )}
              </div>

              {/* Experience and Description Section */}
              <div className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Experience & Description</h2>
                
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                      Years of Experience *
                    </label>
                    <select
                      id="experience"
                      {...register("experience", { required: "Please select your experience level" })}
                      className="mt-1 block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="">Select experience</option>
                      <option value="0-1">Less than 1 year</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                    {errors.experience && (
                      <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Description
                    </label>
                    <textarea
                      id="description"
                      rows={4}
                      {...register("description")}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your business, specialties, and what makes you unique..."
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    {...register("terms", { 
                      required: "You must accept the terms and conditions" 
                    })}
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-gray-700">
                    I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">Terms and Conditions</a> and <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a> *
                  </label>
                  {errors.terms && (
                    <p className="mt-1 text-sm text-red-600">{errors.terms.message}</p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ${
                    isSubmitting 
                      ? 'bg-blue-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>Have questions about becoming a partner? <a href="mailto:partnerships@example.com" className="text-blue-600 font-medium">Contact our partnership team</a></p>
        </div>
      </div>
    </div>
  );
}

export default BecomePartner;
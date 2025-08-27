"use-client"

function AboutUs() {
  return (
    <>
      {/* About Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Who We Are</h3>
              <p className="text-gray-600">
                We at DoorStepIndia are your dependable partners for all of your home kitchen appliances demands and services. 
                Our goal is to deliver convenience right to your door in order to make your life easier.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <p className="text-gray-600">
                We understand that trust takes years to build and forever to repair. We stand for the highest standards of skills in all our professionals.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Quality Commitment</h3>
              <p className="text-gray-600">
                Our Professionals are trained in the manner that we don't compromise with our standards and provide efficient results as expected by the customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs

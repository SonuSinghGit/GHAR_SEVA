"use-client";

function StatsSection() {
  return (
    <>
      {/* Stats Section */}
      <section className="py-12 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Every customer hires DoorStepIndia As Its Service Partner Every 24.2 Seconds</h2>
          <p className="mb-8">*As per the previous year data.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <p>Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p>Services</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2000+</div>
              <p>Experts</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <p>Rating</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StatsSection;

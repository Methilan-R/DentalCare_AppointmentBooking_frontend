import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="px-6 relative bg-white py-40   lg:h-[90vh]  ">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Your <span className="text-blue-500">Smile</span> Matters to us
          </h1>
          <p className="text-gray-600 max-w-md">
            Specially designed for patients seeking dentistry abroad, we offer you bespoke expertise at a price that is unbelievably.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Book Appointment
          </button>

          {/* Two Small Images Below Button */}
          <div className="grid grid-cols-2 gap-4 pt-6">
            {/* Image 1 with badge */}
            <div className="relative rounded-xl overflow-hidden shadow-md w-full h-60">
              <img
                src="/image/d2.jpeg"
                alt="Dental tools"
                width={320}
                height={160}
                className="w-full h-72 object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-white px-3 py-1 text-xs rounded-full shadow font-medium flex items-center space-x-2">
                <img
                  src="/image/product_5.png"
                  alt="Users"
                  width={20}
                  height={20}
                  className="h-5 w-5 rounded-full"
                />
                <span>15K+ Happy customers</span>
              </div>
            </div>

            {/* Image 2 - Smiling woman */}
            <div className="rounded-xl overflow-hidden shadow-md w-full h-60">
              <img
                src="/image/d1.jpeg"
                alt="Happy Customer"
                width={320}
                height={160}
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Large Image with Overlay */}
        <div className="relative rounded-xl overflow-hidden shadow-lg w-full h-[500px]">
          <img
            src="/image/doct.png"
            alt="Dental Treatment"
            width={600}
            height={500}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-white/90 rounded-lg p-4 text-gray-800 text-sm shadow-md">
            <p className="font-semibold">A Modern Approach to World - Class Care</p>
            <p className="text-xs mt-1">
              We’re here to provide exceptional service that meets your needs and exceeds your expectations. Whether you're looking for expert solutions, personalized care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from 'react';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Service = () => {
  return (
    <div className="bg-white">
      {/* Our Services Section */}
      <div className="py-4 lg:py-10">
        <h2 className="text-2xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-gray-700 mb-6 text-center w-full max-w-2xl mx-auto">
          With over 15 years of experience, we are committed to delivering exceptional dental care tailored to your needs.
          Our dedicated team ensures a comfortable, stress-free experience for every patient.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 text-gray-800 font-medium">
            <span className="text-blue-600">✔</span> 24/7 Support
          </div>
          <div className="flex items-center gap-2 text-gray-800 font-medium">
            <span className="text-blue-600">✔</span> 10+ Doctors
          </div>
          <div className="flex items-center gap-2 text-gray-800 font-medium">
            <span className="text-blue-600">✔</span> Pet Friendly
          </div>
        </div>
      </div>

       
    </div>
  );
};

export default Service;

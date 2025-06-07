'use client'; 
import React from 'react';
import { motion } from 'framer-motion';


const HeroSection: React.FC = () => {
  return (
    <section className="px-6 relative bg-white py-40 lg:h-[90vh] overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold leading-tight">
            Your <span className="text-blue-500">Smile</span> Matters to us
          </h1>
          <p className="text-gray-600 max-w-md">
            Specially designed for patients seeking dentistry abroad, we offer you bespoke expertise at a price that is unbelievably.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Book Appointment
          </motion.button>

          {/* Two Small Images Below Button */}
          <div className="grid grid-cols-2 gap-4 pt-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative rounded-xl overflow-hidden shadow-md w-full h-60"
            >
              <img
                src="/image/d2.jpeg"
                alt="Dental tools"
                className="w-full h-72 object-cover"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-2 left-2 bg-white px-3 py-1 text-xs rounded-full shadow font-medium flex items-center space-x-2"
              >
                <img
                  src="/image/product_5.png"
                  alt="Users"
                  className="h-5 w-5 rounded-full"
                />
                <span>15K+ Happy customers</span>
              </motion.div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-xl overflow-hidden shadow-md w-full h-60"
            >
              <img
                src="/image/d1.jpeg"
                alt="Happy Customer"
                className="w-full h-72 object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Large Image with Overlay */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-xl overflow-hidden shadow-lg w-full h-[500px]"
        >
          <img
            src="/image/doct.png"
            alt="Dental Treatment"
            className="w-full h-full object-cover"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute bottom-4 left-4 right-4 bg-white/90 rounded-lg p-4 text-gray-800 text-sm shadow-md"
          >
            <p className="font-semibold">A Modern Approach to World - Class Care</p>
            <p className="text-xs mt-1">
              We’re here to provide exceptional service that meets your needs and exceeds your expectations. Whether you're looking for expert solutions, personalized care.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

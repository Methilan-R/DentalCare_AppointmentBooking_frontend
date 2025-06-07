'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Service = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white"
    >
      <motion.div
        variants={fadeUpItem}
        className="py-4 lg:py-4 text-center"
      >
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-700 mb-6 w-full max-w-2xl mx-auto">
          With over 15 years of experience, we are committed to delivering exceptional dental care tailored to your needs.
          Our dedicated team ensures a comfortable, stress-free experience for every patient.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap justify-center gap-6"
      >
        {[
          '24/7 Support',
          '10+ Doctors',
          'Pet Friendly'
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUpItem}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-gray-800 font-medium bg-gray-50 px-4 py-2 rounded-full shadow hover:shadow-md transition"
          >
            <span className="text-blue-600">✔</span> {item}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Service;

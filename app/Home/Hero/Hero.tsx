'use client';

import React from 'react';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section className="  bg-blue-50 relative w-full h-[100vh] py-40">
  <div className="w-[90%]  xl:w-[80%]  mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Left Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800 mb-6">
            Find the right <span className="text-cyan-600">doctor</span> get the <br />
            best care
          </h1>
          <p className="text-gray-500 text-sm md:text-base mb-6">
            Get latest news in your inbox. Consectetur adipiscing elit,adipiscing elit.sed do
          </p>

          {/* Ratings + Buttons */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-white p-3 rounded-lg shadow-md flex items-center space-x-2">
              <div className="text-sm font-semibold text-gray-800">4.3k Plus</div>
              <div className="flex -space-x-2">
                <Image
                  src="/image/p_img34.png"
                  alt="user1"
                  width={24}
                  height={24}
                  className="rounded-full border border-white"
                />
                <Image
                  src="/image/product_5.png"
                  alt="user2"
                  width={24}
                  height={24}
                  className="rounded-full border border-white"
                />
                <Image
                  src="/image/product_7.png"
                  alt="user3"
                  width={24}
                  height={24}
                  className="rounded-full border border-white"
                />
              </div>
              <div className="text-xs text-gray-500 ml-2">Satisfied Patients</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-md text-sm font-medium transition">
              Make Appointment
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition">
              Download app
            </button>
          </div>
        </div>

        {/* Right Doctor Image Section */}
        <div className="relative flex-1 grid grid-cols-2 gap-4  ">
          <div className="absolute top-[20px] left-[10px] w-56 h-[380px] bg-yellow-500  rounded-tl-[40px] rounded-br-[40px]  z-0  opacity-70"></div>
            <Image
            src="/image/doctor.png" // Replace with your doctor image
            alt="Doctor"
            width={400}
            height={400}
            className="relative z-10 h-[400px] w-[500px]"
            priority
          />
   
  <Image
    src="/image/dental.png"
    alt="Doctor"
     
    className="object-contain rounded-xl z-10"
    priority
  />
 


        </div>
      </div>
    </section>
  );
}

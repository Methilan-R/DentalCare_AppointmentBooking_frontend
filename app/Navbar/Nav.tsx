'use client';

import { navLinks } from '@/app/constant/constant';
import Link from 'next/link';
import React from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { TbDental } from 'react-icons/tb';

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  return (
    <header className="fixed top-0 left-0 z-[1000] w-full bg-white shadow-sm">
      <div className="flex items-center justify-between h-[12vh] w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <TbDental className="w-6 h-6 text-cyan-200" />
          <span className="text-xl font-semibold text-cyan-300">dental</span>
          <span className="text-xl font-semibold text-sky-500">health</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex space-x-8 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className="relative hover:text-cyan-600 transition-colors duration-200 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-0 before:bg-sky-500 hover:before:w-full before:transition-all before:duration-300">
                {link.label}
              </p>
            </Link>
          ))}
        </nav>

        {/* Book Now Button + Mobile Menu */}
        <div className="flex items-center space-x-4">
          <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition">
            Book Now
          </button>
          <HiBars3BottomRight
            onClick={openNav}
            className="w-7 h-7 cursor-pointer text-gray-700 lg:hidden"
          />
        </div>
      </div>
    </header>
  );
};

export default Nav;

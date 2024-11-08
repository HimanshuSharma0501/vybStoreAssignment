"use client";
import React, { useState } from "react";
import { CiMenuBurger as BurgerIcon } from "react-icons/ci";
import { FaRegUser as UserIcon } from "react-icons/fa";
const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-primaryText p-4 text-[32px] bg-gray-900">
      <div className="hidden md:flex items-center justify-between">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-xl font-semibold">Logo</p>

          <div className="flex-grow max-w-md mx-4 hidden md:flex relative">
            <input
              type="text"
              placeholder="Search Creator/Product"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none"
            />
            <img
              src="/images/search.png"
              alt="Search Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            />
          </div>

          <div className="flex space-x-8">
            <p>Fav Creators</p>
            <p>Merchandise</p>
            <p>Brand</p>
            <p>Digital</p>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="focus:outline-none"
            >
              <UserIcon className="h-8 w-8 text-primaryText" />
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black text-white rounded-md shadow-lg py-2">
                <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                  Profile
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                  Dashboard
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                  My Store
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <button
        className="md:hidden focus:outline-none text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="material-icons text-white text-2xl">
          <BurgerIcon />
        </span>
      </button>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-2 bg-black text-white">
          <div className="px-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-gray-800 text-white"
            />
          </div>
          <p className="px-4">Fav Creators</p>
          <p className="px-4">Merchandise</p>
          <p className="px-4">Brand</p>
          <p className="px-4">Digital</p>
          <div className="px-4">
            <a
              href="#"
              className="block py-2 text-white hover:bg-gray-700 rounded-md"
            >
              Profile
            </a>
            <a
              href="#"
              className="block py-2 text-white hover:bg-gray-700 rounded-md"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="block py-2 text-white hover:bg-gray-700 rounded-md"
            >
              My Store
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

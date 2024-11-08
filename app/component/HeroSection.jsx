import React from "react";
import Image from "next/image";
import heroImage from "../../public/images/stockPictures/HeroSection/image.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-4 bg-gray-900">
      <div className="flex-1 p-0 mt-0 text-[40px]">
        <div className="font-semibold mb-4 text-[90px] flex flex-wrap">
          <p className="bg-white text-black inline-block px-4 py-2 m-1 rounded-md">
            One
          </p>
          <p className="bg-white text-black inline-block px-4 py-2 m-1 rounded-md">
            Stop
          </p>
          <p className="bg-white text-black inline-block px-4 py-2 m-1 rounded-md">
            Marketplace
          </p>
          <p className="bg-white text-black inline-block px-4 py-2 m-1 rounded-md">
            For
          </p>
          <p className="bg-[#00dc82] inline-block px-4 py-2 m-1 text-white rounded-md">
            Influencers
          </p>
        </div>
        <p className="text-[32px] text-white mb-4">
          &quot;Unleash Your Influence: Sell Itineraries, Build Your Brand,
          Create Merch, and Share Content - All in One Hub.&quot;
        </p>
        <div className="flex gap-4 text-[27px]">
          <button className="bg-[#00dc82] text-white py-2 px-6 rounded-lg shadow-md">
            Demo Store
          </button>
          <button className="border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text py-2 px-6 rounded-lg hover:bg-opacity-10 transition-colors duration-200">
            Join Waitlist
          </button>
        </div>
      </div>

      <div className="flex-1 mt-8 md:mt-0">
        <Image
          src={heroImage}
          alt="Hero Image"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;

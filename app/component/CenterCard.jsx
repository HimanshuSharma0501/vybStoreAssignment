"use client";
import React from "react";
import mountain from "../../public/images/stockPictures/travelSection/mountain.png";
import indiaGate from "../../public/images/stockPictures/travelSection/our curated travel itineraries/Frame 1182.png";
import munnar from "../../public/images/stockPictures/travelSection/our curated travel itineraries/Frame 1183.png";
import darjeeling from "../../public/images/stockPictures/travelSection/our curated travel itineraries/Frame 1575.png";
import Image from "next/image";

const CenterCard = () => {
  return (
    <div className="text-white ">
      <nav className="flex justify-around p-10 bg-black text-white text-[32px] rounded-2xl">
        <a href="#" className="hover:underline hover:decoration-[#00dc82]">
          Travel
        </a>
        <a href="#" className="hover:underline hover:decoration-[#00dc82]">
          Digital
        </a>
        <a href="#" className="hover:underline hover:decoration-[#00dc82]">
          Brand
        </a>
        <a href="#" className="hover:underline hover:decoration-[#00dc82]">
          Merch
        </a>
      </nav>

      <section
        className="relative text-center py-20 bg-gray-800 rounded-2xl"
        style={{
          backgroundImage: `url(${mountain.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-9xl font-bold mb-4 ">TRAVEL</h1>
        <p className="text-3xl max-w-xl mx-auto">
          Turn your travel experience into itinerary, travel package with VYB
          Store and share it with your true followers.
        </p>
        <section className="text-center py-40 ">
          <h2 className="text-3xl font-semibold mb-8">
            Explore Our Curated Travel Itineraries
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={darjeeling}
                alt="Darjeeling"
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full p-4">
                <h3 className="text-xl font-semibold">India Darjeeling</h3>
                <p className="text-sm">Serene Hotel</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={munnar}
                alt="Munnar"
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full p-4">
                <h3 className="text-xl font-semibold">Munnar Itinerary</h3>
                <p className="text-sm">Serene Hotel</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={indiaGate}
                alt="Delhi"
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full p-4">
                <h3 className="text-xl font-semibold">Delhi Itinerary</h3>
                <p className="text-sm">Serene Hotel</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src={indiaGate}
                alt="Delhi"
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full p-4">
                <h3 className="text-xl font-semibold">Delhi Itinerary</h3>
                <p className="text-sm">Serene Hotel</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <h2 className="text-center text-3xl font-semibold mb-8">
            How to list?
          </h2>
          <div className="flex justify-center items-center space-x-10 px-6 md:px-10">
            <div className="text-center">
              <div className="text-5xl mb-2">✈️</div>
              <p className="font-semibold">01</p>
              <p>Create Itinerary</p>
            </div>
            <div className="text-3xl">➔</div>
            <div className="text-center">
              <div className="text-5xl mb-2">✈️</div>
              <p className="font-semibold">02</p>
              <p>Convert into Travel Package</p>
            </div>
            <div className="text-3xl">➔</div>
            <div className="text-center">
              <div className="text-5xl mb-2">✈️</div>
              <p className="font-semibold">03</p>
              <p>Earn by sharing</p>
            </div>
          </div>
        </section>
        <footer className="text-center py-4 text-4xl text-white">
          <p>You Curate Experience. We Make It Happen</p>
        </footer>
      </section>
    </div>
  );
};

export default CenterCard;

import Image from "next/image";
import React from "react";
import a from "../../public/images/stockPictures/howToGetStarted/1.png";
import b from "../../public/images/stockPictures/howToGetStarted/2.png";
import c from "../../public/images/stockPictures/howToGetStarted/3.png";
import d from "../../public/images/stockPictures/howToGetStarted/4.png";

const GetStartedSection = () => {
  return (
    <div className="relative z-10 flex flex-col items-center py-12 bg-black text-white h-screen overflow-hidden w-screen px-4 md:px-8">
      <h2 className="text-6xl font-semibold text-center text-teal-400 mb-8">
        How to get started?
      </h2>

      <div className="relative w-full max-w-4xl h-[calc(100vh-160px)] overflow-y-scroll scrollbar-hide space-y-6 py-4">
        <div className="relative bg-red-600 p-8 rounded-lg flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 z-10">
          <div className="flex-1 text-left">
            <h3 className="text-2xl font-semibold mb-4">
              Sign Up and create your own store hassle-free.
            </h3>
            <p className="text-gray-300">
              Join us via Google sign-in and verify your influencer status by
              entering your social media ID and unlock your store at zero cost.
            </p>
          </div>
          <div className="flex-1 p-6  text-white flex items-center justify-center">
            <Image
              src={a}
              alt="Step 1"
              width={200}
              height={200}
              className="object-contain max-w-full"
            />
          </div>
        </div>
        <div
          className="relative bg-green-600 p-8 rounded-lg flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 z-20"
          style={{ transform: "rotate(-2deg)" }}
        >
          <div className="flex-1 text-left">
            <h3 className="text-2xl font-semibold mb-4">
              "Monetize your Influencer Status: Earn money adding real value to
              your true followers!"{" "}
            </h3>
            <p className="text-gray-300">
              Let VYB the money now !! Its here and withdraw it periodically.
            </p>
          </div>
          <div className="flex-1 p-6  text-white flex items-center justify-center">
            <Image
              src={b}
              alt="Step 2"
              width={200}
              height={200}
              className="object-contain max-w-full"
            />
          </div>
        </div>

        <div
          className="relative bg-blue-600 p-8 rounded-lg flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 z-30"
          style={{ transform: "rotate(2deg)" }}
        >
          <div className="flex-1 text-left">
            <h3 className="text-2xl font-semibold mb-4">
              "Call Audience to your store. Easily integrate links into content"
            </h3>
            <p className="text-gray-300">
              After setting up your products, its time to go public. Put your
              store link in insta bio and lets make first post together!
            </p>
          </div>
          <div className="flex-1 p-6   text-white flex items-center justify-center">
            <Image
              src={c}
              alt="Step 3"
              width={200}
              height={200}
              className="object-contain max-w-full"
            />
          </div>
        </div>

        <div
          className="relative bg-blue-400 p-8 rounded-lg flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 z-40"
          style={{ transform: "rotate(-2deg)" }}
        >
          <div className="flex-1 text-left">
            <h3 className="text-2xl font-semibold mb-4">
              "Build and Customize your store front"
            </h3>
            <p className="text-gray-300">
              Simply fill in the details to Build your digital store. Once Done,
              start selling your products to your audience
            </p>
          </div>
          <div className="flex-1 p-6  text-white flex items-center justify-center">
            <Image
              src={d}
              alt="Step 4"
              width={200}
              height={200}
              className="object-contain max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;

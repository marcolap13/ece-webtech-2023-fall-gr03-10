import React, { useState } from "react";

export default function Page() {
  return (
    <div className=" max-w-6xl min-h-screen font-sans text-gray-800">
      <div className="text-left md:max-w-3xl items-center py-12 px-10 ">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to AliBobo</h1>
        <p className="text-xl mb-8">
          Dive into a universe of innovative products and unmatched offers. The
          future of online shopping starts here.
        </p>
        <button className="bg-orange-700 text-white py-3 px-8 rounded-lg hover:bg-orange-600 focus:outline-none focus:bg-orange-600">
          Explore Today
        </button>
      </div>

      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200">
          <h2 className="text-2xl font-semibold text-orange-700 mb-6">
            Diverse Choices
          </h2>
          <p className="text-gray-700">
            Explore our expansive product list, from high-tech gadgets to
            artistic home ornaments.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200">
          <h2 className="text-2xl font-semibold text-orange-700 mb-6">
            Swift Shipments
          </h2>
          <p className="text-gray-700">
            Benefit from our prompt and efficient delivery network, ensuring
            your items always arrive on time.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200">
          <h2 className="text-2xl font-semibold text-orange-700 mb-6">
            24/7 Support
          </h2>
          <p className="text-gray-700">
            Our round-the-clock support team is eager to assist, ensuring a
            smooth shopping experience.
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";

export default function Page() {
  const { theme } = useTheme();

  const Layoutstyle = {
    backgroundColor:
      theme === "dark"
        ? "var(--background-color-dark)"
        : "var(--background-color-light)",
    color:
      theme === "dark" ? "var(--text-color-dark)" : "var(--text-color-light)",
    padding: "20px",
    textAlign: "center",
  };

  return (
    <div className=" max-w-6xl min-h-screen font-sans text-gray-800">
      <div className="text-left md:max-w-3xl items-center py-12 px-10 ">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to AliBobo</h1>
        <p className="text-xl mb-8">
          Dive' into a universe of innovative products and unmatched offers. The
          future of online shopping starts here.
        </p>
        <Link href="/articles" passHref>
          <button className="bg-orange-700 text-white py-3 px-8 rounded-lg hover:bg-orange-600 focus:outline-none focus:bg-orange-600">
            Explore Today
          </button>
        </Link>
      </div>

      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto">
        <div
          className="p-8 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200"
          style={Layoutstyle}
        >
          <h2 className="text-2xl font-semibold text-orange-700 mb-6">
            Diverse Choices
          </h2>
          <p>
            Explore our expansive product list, from high-tech gadgets to
            artistic home ornaments.
          </p>
        </div>
        <div
          className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200"
          style={Layoutstyle}
        >
          <h2 className="text-2xl font-semibold text-orange-700 mb-6">
            Swift Shipments
          </h2>
          <p>
            Benefit from our prompt and efficient delivery network, ensuring
            your items always arrive on time.
          </p>
        </div>
        <div
          className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200"
          style={Layoutstyle}
        >
          <h2 className="text-2xl font-semibold text-orange-700 mb-6">
            24/7 Support
          </h2>
          <p>
            Our round-the-clock support team is eager to assist, ensuring a
            smooth shopping experience.
          </p>
        </div>
      </div>
    </div>
  );
}

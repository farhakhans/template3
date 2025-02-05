
"use client";
import Link from "next/link";
import React from "react";

type HeroSectionProps = {
  params: {
    allDetailPage: string;
  };
};

export default function HeroSection({ params }: HeroSectionProps) {
  return (
    <div className="relative bg-gray-100 h-[670vh] mt-8">
      <div className="items-center justify-center p-5 font-bold">
        <p className="flex items-center justify-center">Hello Nike App</p>
        <p className="flex items-center justify-center">
          Download the app to access everything Nike. Get Your Great
        </p>
      </div>

      {/* Hero Section Container */}
      <div className="container mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-2/2 flex justify-center items-center -mt-9">
          <img
            src="/1st shoe image.png"
            alt="Hero Image"
            className="w-full max-w-8xl h-auto object-cover rounded-lg shadow-lg ml-4"
          />
        </div>
      </div>

      <div className="flex items-center justify-center font-bold text-lg">
        <h1>First Look</h1>
      </div>

      <div className="flex items-center justify-center text-6xl font-bold">
        <h1>Nike Air Max Pulse</h1>
      </div>

      <div className="flex items-center justify-center mt-5 text-sm">
        <p>
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse — designed to push you past your limits and help you go to the
          max.
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4 justify-center md:justify-start translate-x-96 ml-40">
        <button className="px-6 py-3 bg-black text-white rounded-full shadow-lg hover:bg-blue-800 transition-all">
          Notify Me
        </button>
        <button className="px-6 py-3 bg-black text-white rounded-full shadow-lg hover:bg-blue-800 transition-all">
          <Link href="/joinUs">Shop Air Max</Link>
        </button>
      </div>

      <p>{params.allDetailPage}</p>
    </div>
  );
}



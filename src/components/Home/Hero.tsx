"use client";
import React from "react";

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Full-screen video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 h-full w-full object-cover">
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 h-full flex flex-col container mx-auto px-6 md:px-12 lg:px-24">
        {/* Main content */}
        <div className="flex-grow flex flex-col justify-center text-white max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Proven, Singular
            <br />
            Technology for Your
            <br />
            Staffing Business
          </h1>
          <p className="text-lg md:text-xl mb-8">
            JobDiva&apos;s commitment to innovation demonstrated by decades of
            product leadership, results in transformation technologies for your
            business. More than 40,000+ recruiters at companies of all sizes and
            staffing verticals use JobDiva to drive their success.
          </p>
          <button className="bg-red-500 hover:bg-background px-6 py-3 rounded-md font-medium transition w-fit">
            Get a Live Demo
          </button>
        </div>
      </div>
    </div>
  );
}

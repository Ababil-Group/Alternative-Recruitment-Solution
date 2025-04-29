"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function Hero() {
  const router = useRouter();

  const HandleClick = (path: string) => {
    router.push(path);
  };
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
            Empowering Your
            <br />
            Staffing Business
            <br />
            with Innovative Technology
          </h1>
          <p className="text-lg md:text-xl mb-8">
            At Recruitment An Alternative Solution, innovation isn’t just a
            goal, it&apos;s our tradition. With decades of industry leadership,
            we deliver transformative staffing technologies designed to drive
            real success. Today, recruiters across diverse industries and
            business sizes trust Recruitment An Alternative Solution to
            streamline their staffing operations and achieve outstanding
            results.
          </p>
          <button
            onClick={() => HandleClick("/contact")}
            className="bg-red-500 cursor-pointer hover:bg-background px-6 py-3 rounded-md font-medium transition w-fit">
            Get Contacted
          </button>
        </div>
      </div>
    </div>
  );
}

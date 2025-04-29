"use client";
import React from "react";

export default function SolutionHero() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute left-0 top-0 h-full w-full object-cover">
          <source src="/video/solutionhero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content Container - Centered */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6 max-w-3xl mx-auto">
          <span className="text-sm bg-[#001F6C] py-2 px-4 font-semibold tracking-widest text-white uppercase mb-4 inline-block">
            SOLUTIONS
          </span>
          <h1 className="text-3xl md:text-3xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Staffing is at the Core of What We Do
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            Recruitment An Alternative Solution’s core technologies, developed
            specifically for staffing, empower teams to focus and streamline
            their productivity on a single platform. With seamless collaboration
            at every stage, your teams can scale their hiring efforts more
            efficiently. Our user-friendly product is continuously evolving,
            helping you stay ahead of the competition and drive ongoing growth.
          </p>
        </div>
      </div>
    </div>
  );
}

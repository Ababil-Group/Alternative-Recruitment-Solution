"use client";
import React from "react";
import Image from "next/image";
import social from "../../../public/images/socialdesgin.png";

export default function BusinessGrow() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <span className="text-sm bg-[#001F6C] py-2 px-4 font-semibold tracking-widest text-text-color uppercase mb-4">
              INTEGRATIONS
            </span>
            <h1 className="text-4xl mt-4 md:text-5xl font-bold text-text-color mb-6 leading-tight">
              Expand Your Business with
              <br />a Powerful, Open Platform
            </h1>
            <p className="text-lg text-text-color mb-8">
              Recruitment An Alternative Solution’s robust, end-to-end
              recruitment solution is equipped with everything your organization
              needs to thrive including seamless partnerships with major job
              boards and specialized products. Committed to an open and flexible
              approach, Recruitment An Alternative Solution offers built-in
              integrations with a wide range of trusted products and services.
              For development teams seeking to extend functionality even
              further, our comprehensive open API suite unlocks endless
              opportunities for innovation and growth.
            </p>
            {/* <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition">
              Browse 100+ integrations
            </button> */}
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <Image
                src={social}
                alt="Integration partners and social connections"
                width={600}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

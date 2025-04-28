"use client";
import React from "react";
import Image from "next/image";
import social from "../../../public/images/socialdesgin.svg";

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
              Grow your business with
              <br />a strong, open platform
            </h1>
            <p className="text-lg text-text-color mb-8">
              Our rich, end-to-end solution comes equipped with everything your
              organization needs—including partnerships with major job boards
              and specialty products. As part of our open approach, JobDiva
              provides built-in integrations to 300+ products and services.
              Development teams looking to extend functionality even further can
              use our comprehensive open API suite to explore endless
              possibilities.
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

"use client";
import React from "react";
import Image from "next/image";
import { FiMail, FiPhone } from "react-icons/fi";
export default function Support() {
  return (
    <div className="relative w-full py-16 h-full overflow-hidden bg-[#001F6C]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/support.png"
          alt="Background"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-16 grid md:grid-cols-2 justify-between gap-x-20">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Support
          </h1>
          <p className="text-lg text-white mb-6">
            We&apos;re serious about providing fast and comprehensive help to
            our user community. Our support team is available to all users by
            email or phone.
          </p>

          {/* Achievements Badges */}
          <div className="flex flex-wrap gap-6 mt-8">
            <div>
              <span className=" h-24 w-24 bg-white rounded-full flex items-center justify-center">
                <FiMail className="w-10 h-10 text-[#002A7C]" />
              </span>
              <p className="mt-10 text-white font-semibold text-[20px] ">
                Email us at
              </p>
              <h4 className="mt-1 text-white font-bold text-[32px] ">
                support@gmail.com
              </h4>
            </div>
            <div>
              <span className=" h-24 w-24 bg-white rounded-full flex items-center justify-center">
                <FiPhone className="w-10 h-10 text-[#002A7C]" />
              </span>
              <p className="mt-10 text-white font-semibold text-[20px] ">
                Call us at
              </p>
              <h4 className="mt-1 text-white font-bold text-[32px] ">
                +1 (123) 456-7890
              </h4>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-[#002A7C]/40 max-w-[500px] p-8 rounded-3xl border border-gray-200 shadow-lg">
          <form className="flex flex-col gap-4">
            <label className="text-white">First Name</label>
            <input
              type="text"
              placeholder="First name"
              className="p-3 rounded  bg-gray-200 "
            />
            <label className="text-white">Last Name</label>
            <input
              type="text"
              placeholder="Last name"
              className="p-3 rounded bg-gray-200 "
            />
            <label className="text-white">Email</label>
            <input
              type="email"
              placeholder="Email*"
              className="p-3 rounded bg-gray-200 "
            />
            <label className="text-white">Phone</label>
            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 rounded bg-gray-200 "
            />
            <label className="text-white">Message</label>
            <textarea
              rows={4}
              className="p-3 rounded bg-gray-200 placeholder:text-gray-800"></textarea>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white py-3 rounded font-bold">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

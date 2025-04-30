"use client";
import React from "react";
import Image from "next/image";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Support() {
  return (
    <div className="relative w-full py-8 md:py-16 h-full overflow-hidden bg-[#001F6C]">
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 md:py-16 grid md:grid-cols-2 justify-between gap-8 md:gap-x-20">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Support
          </h1>
          <p className="text-base md:text-lg text-white mb-6">
            We&apos;re serious about providing fast and comprehensive help to
            our user community. Our support team is available to all users by
            email or phone.
          </p>

          {/* Contact Information - Stacked vertically */}
          <div className="flex flex-col gap-6 md:gap-8 mt-6 md:mt-8">
            {/* Email Section */}
            <div className="flex items-start gap-4">
              <span className="h-8 w-8 md:h-16 md:w-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FiMail className="w-4 h-4 md:w-8 md:h-8 text-[#002A7C]" />
              </span>
              <div>
                <p className="text-white font-semibold text-base md:text-lg lg:text-xl">
                  Email us at
                </p>
                <h4 className="text-white font-bold text-lg md:text-xl lg:text-2xl break-all">
                  info@alternativerecruitmentsolution.com
                </h4>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex items-start gap-4">
              <span className="h-8 w-8 md:h-16 md:w-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FiPhone className="w-4 h-4 md:w-8 md:h-8 text-[#002A7C]" />
              </span>
              <div>
                <p className="text-white font-semibold text-base md:text-lg lg:text-xl">
                  Call us at
                </p>
                <h4 className="text-white font-bold text-lg md:text-xl lg:text-2xl">
                  +4407459610723, +4407943642473
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-[#002A7C]/40 w-full max-w-[500px] mx-auto p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-200 shadow-lg">
          <form className="flex flex-col gap-3 md:gap-4">
            <label className="text-white text-sm md:text-base">
              First Name
            </label>
            <input
              type="text"
              placeholder="First name"
              className="p-2 md:p-3 rounded bg-gray-200 text-sm md:text-base"
            />
            <label className="text-white text-sm md:text-base">Last Name</label>
            <input
              type="text"
              placeholder="Last name"
              className="p-2 md:p-3 rounded bg-gray-200 text-sm md:text-base"
            />
            <label className="text-white text-sm md:text-base">Email</label>
            <input
              type="email"
              placeholder="Email*"
              className="p-2 md:p-3 rounded bg-gray-200 text-sm md:text-base"
            />
            <label className="text-white text-sm md:text-base">Phone</label>
            <input
              type="text"
              placeholder="Phone Number"
              className="p-2 md:p-3 rounded bg-gray-200 text-sm md:text-base"
            />
            <label className="text-white text-sm md:text-base">Message</label>
            <textarea
              rows={4}
              className="p-2 md:p-3 rounded bg-gray-200 placeholder:text-gray-800 text-sm md:text-base"></textarea>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white py-2 md:py-3 rounded font-bold text-sm md:text-base">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

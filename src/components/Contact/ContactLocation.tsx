import React from "react";
import Image from "next/image";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
export default function ContactLocation() {
  return (
    <div className="relative  w-full py-16 h-full">
      <div className="absolute top-[-35px] inset-0 z-0">
        <Image
          src="/images/location.png"
          alt="Background"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="container mx-auto px-6 py-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Location Boxes */}
            <div className="lg:w-3/6 space-y-8">
              {/* UARE Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">UARE</h1>
                <div className="h-1 w-20 bg-blue-600"></div>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-2xl">
                <div className="flex sm:flex-row flex-col gap-4">
                  {/* Headquarters Box */}
                  <div className="bg-white p-6 rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <FiMapPin className="text-blue-600" />
                      Office
                    </h2>
                    <p className="text-gray-600 mb-2">
                      Recruitment An Alternative Solution, Inc.
                    </p>
                    <p className="text-gray-600 mb-2">
                      23 Basedale Road,Dagenham,
                    </p>
                    <p className="text-gray-600 mb-2">Essex RM9 4QA, UK</p>
                  </div>

                  {/* UK Office Box */}
                  {/* <div className="bg-white p-6 rounded-lg">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <FiMapPin className="text-blue-600" />
                      UK Office
                    </h2>
                    <p className="text-gray-600 mb-2">7 Bell Yard</p>
                    <p className="text-gray-600 mb-2">Lower Ground Floor</p>
                    <p className="text-gray-600 mb-2">London, WC2A 2JR</p>
                    <p className="text-gray-600">United Kingdom</p>
                  </div> */}
                </div>

                {/* Contact Info Box */}
                <div className="bg-white p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <FiPhone className="text-blue-600" />
                    <span className="text-gray-600">
                      Call: +4407459610723, +44 7943 642473
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <FaWhatsapp className="text-blue-600" />
                    <span className="text-gray-600">
                      Whatsapp: +44 7943 642473
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FiMail className="text-blue-600" />
                    <span className="text-gray-600">
                      {" "}
                      info@alternativerecruitmentsolution.com
                    </span>
                  </div>
                </div>

                {/* Email Us Box */}
                {/* <div className="bg-white p-6 rounded-lg">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Email Us
                  </h2>
                  <div className="space-y-2">
                    <p className="text-blue-600">press@jobdiva.com</p>
                    <p className="text-blue-600">sales@jobdiva.com</p>
                    <p className="text-blue-600">support@jobdiva.com</p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Right Column - Map Area */}
            <div className="">
              {/* This is where your map component would go */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi"; // Feather Icons
export default function Relationships() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title at the top */}
        <div className="text-center mb-12">
          <span className="text-sm bg-[#F1F4F8] py-2 px-6 font-semibold tracking-widest text-black uppercase mb-4">
            CONTACT RELATIONSHIP MANAGEMENT
          </span>
          <p className="mt-5 max-w-xl mx-auto text-4xl font-bold text-gray-900">
            Bring your relationships into perfect harmony
          </p>
        </div>

        {/* Content in the middle */}
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 text-center">
            Our comprehensive CRM solution is tailored to address the distinct
            client service demands of staffing and recruiting. Featuring an
            extensive range of automated and visually-enhanced tools, it
            seamlessly integrates with our ATS, empowering recruiters, account
            managers, and other critical stakeholders with an all-encompassing,
            unified platform.
          </p>
        </div>

        {/* Image at the bottom */}
        <div className="mb-12 bg-gray-100 rounded-xl p-8 flex items-center justify-center">
          <Image
            src="/images/relationships.svg"
            alt="CRM Dashboard"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* 3-column feature grid with arrow icons */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm group hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Multiply the value of each interaction
                </h3>
                <p className="text-gray-600">
                  Improve information flows and coordinate efforts between your
                  front-office divisions to create customized solutions for your
                  clients.
                </p>
              </div>
              <FiArrowRight className="h-10 w-20 text-gray-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm group hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Pass prospect and client updates
                </h3>
                <p className="text-gray-600">
                  Between salespeople, clients, recruiters, and candidates with
                  advanced tools for data tracking and management.
                </p>
              </div>
              <FiArrowRight className="h-10 w-20  text-gray-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm group hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  Service customers efficiently
                </h3>
                <p className="text-gray-600">
                  While developing new lines of business and maintaining
                  existing relationships.
                </p>
              </div>
              <FiArrowRight className="h-10 w-20 text-gray-500 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

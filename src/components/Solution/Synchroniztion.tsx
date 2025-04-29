"use client";
import React from "react";
import Image from "next/image";

import { FiArrowRight } from "react-icons/fi";

export default function Synchroniztion() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <span className="text-sm bg-[#F1F4F8] py-2 px-4 font-semibold tracking-widest text-black uppercase mb-4">
              VMS SYNCHRONIZATION
            </span>
            <p className="mt-5 max-w-xl mx-auto text-4xl font-bold text-gray-900">
              Reqs as they happen
            </p>
            <div className="mt-10">
              <p className="text-lg text-gray-600 mb-6">
                We’re the pioneers of VMS synchronization. Our mature technology
                makes us the preferred partner for all stakeholders in the
                service pipeline, as you&apos;ll be able to reliably collect and
                index data from all major Vendor Management Systems on the
                market today. Supercharge your organization’s performance with
                up-to-the-minute job syncing that reaches your recruiters
                quicker than the competition. Bring in timesheets, expenses,
                SOWs and more to capture all key transactions with your client.
                Customize handling of incoming records to attune data to your
                team&apos;s best practices and workflows.
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start">
                <FiArrowRight className="w-10 h-6 text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Supercharge your organization’s performance with
                  up-to-the-minute job syncing that reaches your recruiters
                  quicker than the competition.
                </span>
              </li>
              <li className="flex items-start">
                <FiArrowRight className="w-10 h-6 text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Bring in timesheets, expenses, SOWs and more to capture all
                  key transactions with your client.
                </span>
              </li>
              <li className="flex items-start">
                <FiArrowRight className="w-10 h-6 text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Customize handling of incoming records to attune data to your
                  team&apos;s best practices and workflows.
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2">
            <div className="rounded-xl p-8 flex items-center justify-center h-96">
              <Image
                src="/images/Synchroniztion.png"
                alt="ATS Dashboard"
                width={600}
                height={400}
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

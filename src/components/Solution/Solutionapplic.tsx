"use client";
import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
export default function SolutionApplic() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <span className="text-sm bg-[#F1F4F8] py-2 px-4 font-semibold tracking-widest text-black uppercase mb-4">
              APPLICANT TRACKING SYSTEM
            </span>
            <p className="mt-5 max-w-xl mx-auto text-4xl font-bold text-gray-900">
              Accurate placements at the speed of light
            </p>
            <div className="mt-10">
              <p className="text-lg text-gray-600 mb-6">
                JobDivs&apos;s award-winning ATS software delivers crucial
                competitive advantages. Designed with deep understanding of the
                recruiting lifecycle, each page and flow focuses your team on
                the essential tasks that truly boost revenue. Automation
                enhances sourcing and hiring while minimizing costly
                administrative loads. Let our advanced technology hum in the
                background, refreshing recruiters&apos; talent pools and
                enriching every CV and req with useful data in real time. Then
                use our uniquely effective search tools to pinpoint the best
                talent for every requisition from millions of CVs in less than a
                second.
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start">
                <FiArrowRight className="w-10 h-6 text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Provide recruiters and managers with an intuitive system that
                  transforms traditional staffing workflows into a rapid
                  delivery process.
                </span>
              </li>
              <li className="flex items-start">
                <FiArrowRight className="w-10 h-6 text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Cultivate a vast, constantly refreshing talent pool with our
                  industry-leading harvesting tool, which sources
                  programmatically from your organizations&apos; subscriptions
                  and applicants.
                </span>
              </li>
              <li className="flex items-start">
                <FiArrowRight className="w-10 h-6 text-gray-400 mr-2 flex-shrink-0" />
                <span className="text-gray-700">
                  Cultivate a vast, constantly refreshing talent pool with our
                  industry-leading harvesting tool, which sources
                  programmatically from your organizations&apos; subscriptions
                  and applicants.
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2">
            <div className="rounded-xl p-8 flex items-center justify-center h-96">
              <Image
                src="/images/solutionapplic.svg"
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

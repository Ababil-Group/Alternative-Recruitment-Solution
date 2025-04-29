"use client";
import React from "react";
import Image from "next/image";
// import { FiArrowRight } from "react-icons/fi";
export default function SolutionApplic() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <span className="text-sm bg-[#F1F4F8] py-2 px-4 font-semibold tracking-widest text-black uppercase mb-4">
              APPLICANT TRACKING SYSTEM
            </span>
            <p className="mt-5 max-w-xl mx-auto text-4xl font-bold text-gray-900">
              Fast, Accurate Placements
            </p>
            <div className="mt-10">
              <p className="text-lg text-gray-600 mb-6">
                Recruitment An Alternative Solution’s award-winning ATS software
                provides a significant competitive edge. Designed with a deep
                understanding of the recruiting lifecycle, every page and
                process is focused on streamlining your team’s efforts to boost
                revenue. Automation optimizes sourcing and hiring, while
                reducing administrative burdens. Recruitment An Alternative
                Solution’s technology works seamlessly in the background,
                continuously refreshing recruiters&apos; talent pools and
                enriching CVs and job requisitions with valuable data in real
                time. With our powerful search tools, you can quickly identify
                the best talent for each requisition, pulling from millions of
                CVs in less than a second. Provide recruiters and managers with
                an intuitive system that transforms traditional staffing
                workflows into a rapid, efficient process. Cultivate a
                constantly refreshed, expansive talent pool with our
                industry-leading harvesting tool, which sources candidates
                programmatically from your organization’s subscriptions and
                applicant databases.
              </p>
            </div>

            {/* <ul className="space-y-4">
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
            </ul> */}
          </div>

          <div className="lg:w-1/2">
            <div className="rounded-xl p-8 flex items-center justify-center max-h-72">
              <Image
                src="/images/solutionapplic.png"
                alt="ATS Dashboard"
                width={600}
                height={400}
                className="h-auto w-full object-cover mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
export default function Analytics() {
  return (
    <section className="min-h-screen z-20 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side with centered image */}
          <div className="lg:w-1/2 flex justify-center min-h-[500px]">
            <div className="relative w-full h-full">
              <Image
                src="/images/analytics.svg"
                alt="Financial illustration"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right side with content */}
          <div className="lg:w-1/2 p-8 lg:p-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <span className="inline-flex items-center bg-gray-100 py-2 px-4 font-semibold tracking-widest text-black uppercase mb-4">
                REPORTS & ANALYTICS
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                Knowledge is power
              </h1>

              <div className="space-y-6 mt-8">
                <p className="text-lg text-gray-600">
                  JobDiva is loaded with staffing-centric reports and
                  dashboards. Surface insights and performance patterns while
                  also enabling deep dives into the behavior of teams, clients,
                  service groups and more. Nearly every click and data point in
                  JobDiva is tracked, empowering you to make bold, data-driven
                  decisions that put you way ahead of the competition.
                </p>

                <ul className="space-y-4">
                  {[
                    "Immediately access 1000+ reports serving myriad data configurations, and visualizations informed by our 20+ years of deep immersion in the staffing industry.",
                    "Equip your various teams and user groups with the exactly the right dashboards to assess and understand their performance, conduct business health checks, and drive meetings.",
                    "Receive instant summaries of your relationship with clients via mini-dashboards built into every CRM record.",
                    "Create, customize and easily share your own dashboards and reports, shaping your data with a multitude of possible filters and rules.",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 * (index + 1) }}
                      viewport={{ once: true }}>
                      <FiArrowRight className="text-gray-400 w-10 h-6 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

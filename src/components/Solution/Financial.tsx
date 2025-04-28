"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function Financial() {
  return (
    <section className="min-h-screen z-20 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side with centered image */}
          <div className="lg:w-1/2 flex justify-center min-h-[500px]">
            <div className="relative w-full h-full">
              <Image
                src="/images/financial.jpg"
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
                FINANCIALS
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                A strong backbone for your business
              </h1>

              <div className="space-y-6 mt-8">
                <p className="text-lg text-gray-600">
                  Our native back office suite equips your team with robust
                  modules that provide real-time insights into the financial
                  impact of front office activities. Having a fully integrated
                  ecosystem means dynamic collaboration across your
                  organization, allowing for better pipelining, forecasting and
                  tracking of real profitability. Each step of the billing cycle
                  supports extensive customization, so you can meet even the
                  most intricate end client requirements for transactional data
                  handling and presentation. As accrued client knowledge from
                  your ATS and CRM flows into your financial records, you’ll get
                  complete clarity into your company’s true financials while
                  maintaining the highest security and reliability standards.
                </p>

                <ul className="space-y-4">
                  {[
                    "Guide and track your candidates through a traceable paperless, and mobile-friendly process.",
                    "Benefit from encrypted document sharing and signatures and protect everyone's privacy every step of the way.",
                    "Perform authorizations using Trust ID integration (coming soon).",
                    "Harness our integrations with the market's most widely adopted background check tools.",
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

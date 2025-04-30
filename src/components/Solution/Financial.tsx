"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import { FiArrowRight } from "react-icons/fi";

export default function Financial() {
  return (
    <section className="min-h-screen z-20 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side with centered image */}
          <div className="lg:w-1/2 flex justify-center min-h-[400px]">
            <div className="relative w-full h-full">
              <Image
                src="/images/financial.png"
                alt="Financial illustration"
                width={500}
                height={500}
                className="w-[700px] h-[700px] object-contain"
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
                A Solid Foundation for Your Business
              </h1>

              <div className="space-y-6 mt-8">
                <p className="text-lg text-gray-600">
                  Our native back-office suite equips your team with powerful
                  modules that provide real-time insights into the financial
                  impact of front-office activities. With a fully integrated
                  ecosystem, your organization benefits from seamless
                  collaboration, enhancing pipelining, forecasting, and tracking
                  of true profitability. Each step of the billing cycle offers
                  extensive customization, enabling you to meet even the most
                  complex client requirements for transactional data handling
                  and presentation.
                </p>
                <p className="text-lg text-gray-600">
                  As client data from your ATS and CRM flows into your financial
                  records, you gain clear visibility into your company’s true
                  financials while ensuring top-tier security and reliability.
                </p>
                {/* <ul className="space-y-4">
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
                </ul> */}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

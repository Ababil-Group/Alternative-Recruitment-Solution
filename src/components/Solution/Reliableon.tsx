"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
export default function Onboarding() {
  return (
    <section className="min-h-screen relative bg-[url('/images/shapesolution.svg')] bg-cover bg-center bg-no-repeat py-16">
      {/* SVG Lines - Centered */}
      <div className="absolute  inset-0 w-1/2 flex flex-col justify-center items-center pointer-events-none z-10">
        {/* Option 1: Using external SVG files */}
        <motion.div
          className="w-full h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}>
          <Image
            src="/images/line1.svg"
            alt="Line 1"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      <div className="absolute top-1/2 inset-0 w-1/2 flex flex-col justify-center items-center pointer-events-none z-10">
        {/* Option 1: Using external SVG files */}
        <motion.div
          className="w-full h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1 }}>
          <Image
            src="/images/line1.svg"
            alt="Line 1"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="lg:w-1/2 p-8 lg:p-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <span className="text-sm bg-[#001F6C] py-2 px-4 font-semibold tracking-widest text-white uppercase mb-4 inline-block">
                ONBOARDING
              </span>
              <h1 className="text-3xl md:text-3xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Efficient and Reliable Onboarding
              </h1>

              <div className="space-y-6">
                <p className="text-lg text-white/80">
                  Our dynamic middle-office software streamlines the hiring
                  process, automating document selection and simplifying the
                  candidate experience. Built to be both robust and adaptable,
                  it aligns with your company’s best practices and ensures
                  compliance across various factors—such as client preferences,
                  local regulations, tax categories, and more—without the burden
                  of heavy administrative work.
                </p>

                <ul className="space-y-4">
                  <motion.li
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}>
                    <FiArrowRight className="text-white w-10 h-6 mt-1 flex-shrink-0" />
                    <span className="text-white/80">
                      Guide and track candidates through a seamless, paperless,
                      and mobile-friendly process.
                    </span>
                  </motion.li>

                  <motion.li
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}>
                    <FiArrowRight className="text-white w-10 h-6 mt-1 flex-shrink-0" />
                    <span className="text-white/80">
                      Benefit from encrypted document sharing and signatures,
                      ensuring privacy at every step.
                    </span>
                  </motion.li>

                  <motion.li
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}>
                    <FiArrowRight className="text-white w-10 h-6 mt-1 flex-shrink-0" />
                    <span className="text-white/80">
                      Perform authorizations using Trust ID integration (coming
                      soon).
                    </span>
                  </motion.li>

                  <motion.li
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}>
                    <FiArrowRight className="text-white w-10 h-6 mt-1 flex-shrink-0" />
                    <span className="text-white/80">
                      Leverage integrations with leading background check tools
                      in the market.
                    </span>
                  </motion.li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right side - empty space or image */}
          <div className="lg:w-1/2"></div>
        </div>
      </div>
    </section>
  );
}

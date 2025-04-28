"use client";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 z-100">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Logo and Contact */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-4">JobDiva</h2>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Word to talk?</h3>
              <p className="text-2xl font-bold">386-JOB-DIVA</p>
            </div>
            <div>
              <p className="mb-2">We&apos;re social</p>
              <div className="flex items-center space-x-4">
                <span className="inline-flex items-center">
                  in <span className="ml-1">▼</span>
                </span>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <FaFacebook size={20} />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <FaTwitter size={20} />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {[
                "Solution",
                "Process Acceleration",
                "Operational Efficiency",
                "Candidate Engagement",
                "Business Scalability",
                "JobDiva + AI",
                "Healthcare Integrations VMS",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Leadership", "Founder", "News", "Careers"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Book", "Case Studies", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© JobDiva 2004</p>
              <p className="text-sm">Patented Technology</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <a
                href="#"
                className="text-sm hover:text-blue-400 transition-colors">
                Terms of Use
              </a>
              <a
                href="#"
                className="text-sm hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm hover:text-blue-400 transition-colors">
                CCPA Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

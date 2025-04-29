"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import Image from "next/image";
type MenuItem = {
  name: string;
  link?: string;
  dropdown?: {
    name: string;
    link: string;
  }[];
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const menuItems: MenuItem[] = [
    { name: "Home", link: "/" },
    { name: "Our Solutions", link: "/solution" },
    {
      name: "Support",
      dropdown: [
        { name: "Contact Us", link: "/contact" },
        { name: "Help Center", link: "/support" },
        { name: "FAQs", link: "/faq" },
      ],
    },
  ];

  return (
    <header className="fixed  w-full z-50">
      <nav className="bg-transparent transition-all duration-300  backdrop-blur-sm  ">
        <div className="container border-b border-gray-200 mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo on left */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold">
                <Image
                  src={Logo}
                  width={180}
                  height={100}
                  alt="logo"
                  className="text-text-color"
                />
              </Link>
            </div>

            {/* Desktop Menu - Right side */}
            <div className="hidden md:flex justify-end items-center space-x-8">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button
                        className="text-text-color  font-medium transition-colors"
                        onClick={() => toggleDropdown(index)}
                        onMouseEnter={() => setOpenDropdown(index)}>
                        {item.name}
                      </button>
                      <AnimatePresence>
                        {openDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-32 border-[0.5px] border-gray-200 bg-background rounded-md shadow-lg py-5 z-50"
                            onMouseLeave={() => setOpenDropdown(null)}>
                            {item.dropdown.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href={subItem.link}
                                className="block px-4 py-2 text--text-color hover:bg-[#001856]">
                                {subItem.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <div>
                      <a
                        href={item.link}
                        className="text-text-color hover:text-blue-300 font-medium transition-colors">
                        {item.name}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-200 focus:outline-none"
                aria-label="Toggle menu">
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background backdrop-blur-sm">
              <div className="container mx-auto px-4 py-2">
                {menuItems.map((item, index) => (
                  <div key={index} className="py-2 border-b border-gray-100">
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(index)}
                          className="flex justify-between items-center w-full text-white font-medium">
                          {item.name}
                          <motion.span
                            animate={{
                              rotate: openDropdown === index ? 180 : 0,
                            }}>
                            ▼
                          </motion.span>
                        </button>
                        <AnimatePresence>
                          {openDropdown === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4">
                              {item.dropdown.map((subItem, subIndex) => (
                                <a
                                  key={subIndex}
                                  href={subItem.link}
                                  className="block py-2 text-white hover:text-gray-900">
                                  {subItem.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <a
                        href={item.link}
                        className="block text-white font-medium">
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

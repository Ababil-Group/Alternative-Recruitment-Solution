"use client";
import React from "react";
import Image from "next/image";
import mobileAppScreenshot from "../../../public/images/mobile.png";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { Banner } from "@/common/Banner";

export default function MobileApp() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  const slides = [
    {
      title: "Recruitment An Alternative Solution App",
      description: "Complete recruitment solution on your mobile device.",
    },
    {
      title: "White-Label App",
      description: "Custom-branded hiring app for your candidates.",
    },
    {
      title: "TimeDirect App",
      description: "Quick time and expense tracking for contractors.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12">
          {/* Image on Left Side */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-1">
            <div className="relative w-full max-w-xs md:max-w-md">
              <Image
                src={mobileAppScreenshot}
                alt="JobDiva mobile app screens"
                width={500}
                height={700}
                quality={100}
                className="w-full h-auto rounded-xl shadow-xl"
              />
            </div>
          </div>

          {/* Content on Right Side */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2">
            <span className="text-xs sm:text-sm bg-[#001F6C] py-1 px-3 sm:py-2 sm:px-4 font-semibold tracking-widest text-text-color uppercase mb-3 sm:mb-4 inline-block">
              MOBILE APPS
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-color mb-4 sm:mb-6 leading-snug sm:leading-tight">
              Mobile Apps for Talent and Recruiters
            </h1>
            <p className="text-base sm:text-lg text-text-color mb-6 sm:mb-8 space-y-2 sm:space-y-4">
              Stay connected and productive with the{" "}
              <strong>Recruitment An Alternative Solution mobile app</strong>,
              designed to help staffing teams manage essential tasks efficiently
              anytime, anywhere. We also offer a{" "}
              <strong>white-label applicant and hiring app</strong> that
              reflects your brand identity, creating a seamless experience for
              candidates. Plus, our <strong>Time Direct app</strong> makes it
              easy for contractors to submit time and expense reports quickly
              and accurately.
            </p>

            {/* Slider Component */}
            <div className="relative bg-white/90 p-4 sm:p-6 rounded-lg shadow-md">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2 sm:px-4">
                      <h3 className="text-lg sm:text-xl font-bold text-[#001F6C] mb-1 sm:mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        {slide.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex justify-center mt-3 sm:mt-4 space-x-3 sm:space-x-4">
                <button
                  onClick={prevSlide}
                  className="p-1 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                  <FiChevronLeft className="text-[#001F6C] text-sm sm:text-base" />
                </button>
                <div className="flex space-x-1 sm:space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                        currentSlide === index ? "bg-[#001F6C]" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="p-1 sm:p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                  <FiChevronRight className="text-[#001F6C] text-sm sm:text-base" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12">
          <Banner
            titleLines={[
              "Find the Right  ",
              "Talent—Faster, Smarter,",
              "and More Cost-Effectively",
            ]}
            ctaText="Get Contacted"
            imageUrl="/images/banner.png"
            onClick={() => handleClick("/contact")}
          />
        </div>
      </div>
    </section>
  );
}

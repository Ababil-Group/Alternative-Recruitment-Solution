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
      title: "Recruitment An  Alternative Solution App",
      description: "Complete recruitment solution on your mobile device.",
    },
    {
      title: "White-Label App",
      description: " Custom-branded hiring app for your candidates.",
    },
    {
      title: "TimeDirect App",
      description: " Quick time and expense tracking for contractors.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col  lg:flex-row items-center gap-12">
          {/* Image on Left Side */}
          <div className="lg:w-1/2 flex justify-center order-1 lg:order-1">
            <div className="relative w-full max-w-md">
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
          <div className="lg:w-1/2 order-2 lg:order-2">
            <span className="text-sm bg-[#001F6C] py-2 px-4 font-semibold tracking-widest text-text-color uppercase mb-4 inline-block">
              MOBILE APPS
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-color mb-6 leading-tight">
              Mobile Apps for Talent and Recruiters
            </h1>
            <p className="text-lg text-text-color mb-8 space-y-4">
              Stay connected and productive with the{" "}
              <strong>Recruitment An Alternative Solution mobile app</strong> ,
              designed to help staffing teams manage essential tasks efficiently
              anytime, anywhere. We also offer a{" "}
              <strong>white-label applicant and hiring app</strong> that
              reflects your brand identity, creating a seamless experience for
              candidates. Plus, our <strong>Time Direct app</strong> makes it
              easy for contractors to submit time and expense reports quickly
              and accurately.
            </p>

            {/* Slider Component */}
            <div className="relative bg-white/90 p-6 rounded-lg shadow-md">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                  {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-4">
                      <h3 className="text-xl font-bold text-[#001F6C] mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-gray-600">{slide.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex justify-center mt-4 space-x-4">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                  <FiChevronLeft className="text-[#001F6C]" />
                </button>
                <div className="flex space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full ${
                        currentSlide === index ? "bg-[#001F6C]" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition">
                  <FiChevronRight className="text-[#001F6C]" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Banner
          titleLines={[
            "Find the Right  ",
            "Talent—Faster, Smarter,",
            "and More Cost-Effectively",
          ]}
          ctaText="Get Contacted"
          imageUrl="/images/banner.png" // Optional
          onClick={() => handleClick("/contact")}
          //   className="custom-class" // Optional additional classes
        />
      </div>
    </section>
  );
}

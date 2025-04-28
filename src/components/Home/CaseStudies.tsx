"use client";
import React from "react";
import Image from "next/image";
import card1 from "../../../public/images/card1.jpg";
import card2 from "../../../public/images/card2.jpg";
import card3 from "../../../public/images/card3.jpg";
import card4 from "../../../public/images/card4.jpg";
import { FiArrowRight } from "react-icons/fi";

const caseStudies = [
  {
    id: 1,
    image: card1,
    type: "CASE STUDY",
    company: "ICON Information Consultants",
    cta: "Read Case Study",
  },
  {
    id: 2,

    image: card2,

    type: "CASE STUDY",
    company: "Intelliswift",
    cta: "Read Case Study",
  },
  {
    id: 3,

    image: card3,

    type: "CASE STUDY",
    company: "TalentBurst",
    cta: "Read Case Study",
  },
  {
    id: 4,
    image: card4,

    type: "CASE STUDY",
    company: "Ursus",
    cta: "Read Case Study",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="flex flex-col text-center">
          <div>
            <h1 className="text-4xl font-bold text-text-color mb-4">
              Case Studies
            </h1>
            <p className="text-xl text-text-color">
              Every day, we&apos;re transforming our clients&apos; businesses.
              Learn about our <br /> partnership stories here.
            </p>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="group cursor-pointer">
              {/* Image */}
              <div className="relative h-96 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={study.image}
                  alt="Case Study"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-800 rounded">
                    {study.type}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-700 mb-3">
                  {study.company}
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  {study.cta} <FiArrowRight className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

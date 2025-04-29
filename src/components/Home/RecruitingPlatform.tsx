"use client";
import React from "react";

export default function recruitingrlatform() {
  const features = [
    {
      title: "Applicant Tracking System",
      description:
        "Award-winning recruitment software that has set the standard in the industry for  years, helping organizations streamline their hiring process.",
    },
    {
      title: "Contract Relationship Management",
      description:
        " Refined client services paired with next-level business development tools, designed to enhance relationships and drive growth.",
    },
    {
      title: "Onboarding",
      description:
        " Simplify every hiring scenario with intelligent, automated onboarding systems, making the process smoother and more efficient.",
    },
    {
      title: "Financials",
      description:
        " A comprehensive back office suite crafted by staffing experts, tailored to the unique needs of your staffing business",
    },
    {
      title: "VMS Synchronization",
      description:
        "Trusted VMS synchronization tools to ensure seamless integration and set you up for top-tier operational performance.",
    },
    {
      title: "Reports & Analytics",
      description:
        " Boost productivity and gain valuable insights with a wide range of customizable dashboards, reports, and business intelligence tools.",
    },
  ];

  return (
    <section className="py-16 mt-10 bg-background relative overflow-hidden">
      {/* Blur effect container - only for middle section */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-0 left-0 w-full h-full bg-red-500 opacity-10"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-400 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-red-600 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text-color mb-4">
            Your All-in-One Recruiting Platform
          </h1>
          <p className="text-lg mt-2 text-text-color max-w-3xl mx-auto">
            Recruitment An Alternative Solution’s industry-leading technology
            empowers recruiters to unlock their full business potential. Partner
            with us to access a comprehensive suite of staffing tools that’s
            unmatched in the industry designed to support your recruitment
            efforts and drive success at every level.
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background min-h-[200px] border border-gray-200 p-8 rounded-3xl hover:shadow-lg hover:bg-right cursor-pointer transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-text-color mb-4">
                {feature.title}
              </h2>
              <p className="text-text-color">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

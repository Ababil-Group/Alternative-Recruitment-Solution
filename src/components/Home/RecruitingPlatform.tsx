"use client";
import React from "react";

export default function recruitingrlatform() {
  const features = [
    {
      title: "Applicant Tracking System",
      description:
        "Award-winning recruitment software that has led the industry for over 20 years.",
    },
    {
      title: "Contract Relationship Management",
      description:
        "Refined client services and next-level business development.",
    },
    {
      title: "Onboarding",
      description:
        "Streamline every hiring scenario with intelligent, automated systems.",
    },
    {
      title: "Financials",
      description:
        "A back office suite built by staffing experts for the unique contours of your business.",
    },
    {
      title: "VMS Synchronization",
      description:
        "Trusted synchronisation programs to set you up for top-tier performance.",
    },
    {
      title: "Reports & Analytics",
      description:
        "Spark productivity and insights with a wide array of dashboards, reports and BI tools.",
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
            The all-in-one recruiting platform
          </h1>
          <p className="text-xl text-text-color max-w-3xl mx-auto">
            JobDiva&apos;s industry leading technology helps thousands of
            recruiters maximize their business potential.
            <br />
            Partner with us for a comprehensive and unmatched suite of staffing
            tools.
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

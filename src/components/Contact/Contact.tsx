import React from "react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative w-full py-16 h-full overflow-hidden bg-[#001F6C]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Contact.png"
          alt="Background"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-16 grid md:grid-cols-2 justify-between gap-x-20">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Connect With Us
          </h1>
          <p className="text-lg text-white mb-6">
            We’re here to help and excited to hear from you. To ensure a quicker
            response, please select the topic of your inquiry using the
            drop-down menu on the form.
          </p>

          {/* Support and Demo Links */}
          {/* <div className="text-white mb-8">
            <p className="mb-2">
              Are you looking for technical support?{" "}
              <a href="/support" className="text-red-400 underline">
                Support
              </a>
            </p>
            <p>
              Request your free demonstration{" "}
              <a href="/demo" className="text-red-400 underline">
                Request Demo
              </a>
            </p>
          </div> */}

          {/* Achievements Badges */}
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-[#002A7C]  max-w-[500px] p-8 rounded-3xl border border-gray-200 shadow-lg">
          <form className="flex flex-col gap-4">
            <label className="text-white">First Name</label>
            <input
              type="text"
              placeholder="First name"
              className="p-3 rounded  bg-gray-200 "
            />
            <label className="text-white">Last Name</label>
            <input
              type="text"
              placeholder="Last name"
              className="p-3 rounded bg-gray-200 "
            />
            <label className="text-white">Email</label>
            <input
              type="email"
              placeholder="Email*"
              className="p-3 rounded bg-gray-200 "
            />
            <label className="text-white">Phone</label>
            <input
              type="text"
              placeholder="Phone Number"
              className="p-3 rounded bg-gray-200 "
            />
            <label className="text-white">Tool</label>
            <select
              defaultValue="General"
              className="p-3 rounded bg-gray-200 text-gray-800">
              <option className="text-gray-800" value="General">
                General
              </option>
              <option className="text-gray-800" value="Support">
                Support
              </option>
            </select>
            <label className="text-white">Message</label>
            <textarea
              rows={4}
              className="p-3 rounded bg-gray-200 placeholder:text-gray-800"></textarea>
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white py-3 rounded font-bold">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

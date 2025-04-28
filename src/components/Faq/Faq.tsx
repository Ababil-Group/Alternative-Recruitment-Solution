"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: { question: string; answer: string }[] = [
    {
      question: "What is JobDiva?",
      answer:
        "JobDiva is a leading talent acquisition platform that combines applicant tracking, CRM, and analytics in one powerful solution.",
    },
    {
      question:
        "What makes JobDiva's resume search engine different from other resume search engine products?",
      answer:
        "Our proprietary AI-powered search technology delivers more accurate, relevant results with natural language processing and semantic search capabilities.",
    },
    {
      question: "How will JobDiva give my company a competitive advantage?",
      answer:
        "JobDiva streamlines your recruitment workflow, reduces time-to-hire, and provides actionable insights to outperform competitors.",
    },
    {
      question: "How can JobDiva save my company money?",
      answer:
        "By automating manual processes, reducing dependency on external job boards, and improving recruiter productivity.",
    },
    {
      question: "What are JobDiva's complementary characteristics?",
      answer:
        "Seamless integrations with major HR systems, mobile accessibility, and configurable workflows tailored to your business needs.",
    },
    {
      question:
        "How much behavior change and retraining will be necessary to fully utilize JobDiva?",
      answer:
        "Our intuitive interface requires minimal training, and our customer success team provides onboarding and ongoing support.",
    },
    {
      question: "How does JobDiva retrieve resumes for me?",
      answer:
        "JobDiva aggregates resumes from multiple sources including job boards, your career site, and direct submissions.",
    },
    {
      question:
        "How quickly after resumes are sent to my JobDiva account can they be searched and accessed?",
      answer:
        "Resumes are processed and made searchable in real-time, typically within seconds of submission.",
    },
    {
      question: "Can JobDiva retrieve resumes from any job board?",
      answer:
        "Yes, JobDiva integrates with all major job boards and can parse resumes from virtually any source.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 bg-b">
          <h1 className="text-3xl  md:text-4xl font-bold text-text-color mt-10">
            What is JobDiva?
          </h1>
          <p className="text-lg mt-3 text-gray-200">
            Frequently asked questions about our platform
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left py-4 focus:outline-none">
                <h2 className="text-lg md:text-xl font-medium text-gray-400">
                  {faq.question}
                </h2>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}>
                  <FiChevronDown className="text-gray-100 text-xl" />
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                    <div className="pb-4 text-gray-100">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const faqData = [
  {
    question: "How can I sign up for Defcomm?",
    answer:
      "Signing up is easy. Visit our site, click 'Register', and follow the process. You’ll get started with free tools immediately after approval.",
  },
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes, you can switch between plans at any time from your dashboard. Billing will adjust accordingly.",
  },
  {
    question: "What support options are available?",
    answer:
      "We provide email support, community access, and dedicated support for enterprise users.",
  },
  {
    question: "Is my data secure on Defcomm?",
    answer:
      "Yes. We follow strict security standards including end-to-end encryption and periodic audits.",
  },
  {
    question: "Can I integrate Defcomm with other apps?",
    answer:
      "Absolutely. Defcomm supports API and SDK integrations with popular platforms.",
  },
  {
    question: "Do you offer training resources for users?",
    answer:
      "Yes, we provide documentation, video tutorials, and webinars for both developers and organizations.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white w-full py-20 px-4 md:px-20 grid md:grid-cols-2 gap-10 items-start">
      {/* Left Section */}
      <div className="flex flex-col justify-center relative z-10">
        <p className="flex items-center text-sm font-medium text-lime-400 mb-2">
          <span className="mr-1">
            <GoDotFill />
          </span>
          FAQ
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-6">
          Frequently{" "}
          <span className="text-gray-400 font-normal">asked Questions</span>
        </h2>

        {/* Decorative shapes */}
        <div className="absolute left-0 top-full mt-5 opacity-20 z-0 space-y-2">
          <div className="flex space-x-2">
            <div className="w-40 h-15 bg-lime-700 rounded-md"></div>
            <div className="w-15 h-15 bg-lime-700 rounded-full"></div>
          </div>
          <div className="flex space-x-2">
            <div className="w-15 h-15 bg-lime-700 rounded-full"></div>
            <div className="w-40 h-15 bg-lime-700 rounded-md"></div>
          </div>
          <div className="flex space-x-2">
            <div className="w-40 h-15 bg-lime-700 rounded-md"></div>
            <div className="w-15 h-15 bg-lime-700 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="max-w-[500px]">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${
              activeIndex === index ? "bg-neutral-900" : ""
            } border-b border-neutral-700 p-4 md:p-6 transition duration-300`}
          >
            <button
              onClick={() => toggle(index)}
              className={`cursor-pointer w-full flex justify-between items-center font-medium text-left ${
                activeIndex === index ? "text-lime-400" : "text-white"
              }`}
            >
              <h3 className="text-lg md:text-xl">{item.question}</h3>
              <span>{activeIndex === index ? <FaMinus /> : <FaPlus />}</span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "max-h-[500px] opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm md:text-base text-white py-1">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

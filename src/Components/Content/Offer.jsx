import React from "react";
import { CgArrowTopRight } from "react-icons/cg";
import { BsChevronDoubleDown } from "react-icons/bs";

function Offer() {
  return (
    <div className="relative mx-4 px-4 py-12 lg:mx-10 bg-black text-white rounded-[20px] lg:p-16 !pb-0 lg:rounded-[40px] mb-20">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <p className="font-bold text-[32px] lg:text-[50px] leading-tight mb-6 lg:mb-0">
          Best choice for you
        </p>
        <div className="flex gap-3 lg:gap-6 text-base lg:text-lg">
          <p className="py-2 px-6 lg:py-3 lg:px-12 rounded-full bg-white text-black font-medium">
            All
          </p>
          <p className="py-2 px-6 lg:py-3 lg:px-12 rounded-full border border-white">
            Course
          </p>
          <p className="py-2 px-6 lg:py-3 lg:px-12 rounded-full border border-white">
            Partner
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mt-12">
        {[
          {
            title: "INNOVATIVE DESIGN",
            desc: "Creative, user-friendly solutions tailored to your needs.",
          },
          {
            title: "EXPERT TEAM",
            desc: "Skilled developers and designers dedicated to your success.",
          },
          {
            title: "RESULT DRIVEN",
            desc: "Delivering impactful, high-quality outcomes for your digital vision.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white text-black p-6 lg:p-8 rounded-2xl flex-1 flex flex-col justify-between"
          >
            <h1 className="font-bold text-2xl lg:text-3xl mb-6">
              {item.title}
            </h1>
            <p className="text-sm lg:text-base mb-8 text-gray-700">
              {item.desc}
            </p>
            <div className="flex items-center gap-2 text-black font-semibold hover:text-lime-600 transition-colors duration-300 cursor-pointer text-base lg:text-lg">
              See More <CgArrowTopRight />
            </div>
          </div>
        ))}
      </div>

      {/* Chevron Scroll Indicator */}
      <div className="flex justify-center mt-12 relative top-5 z-10">
        <div className="bg-white text-black p-5 rounded-tl-2xl rotate-45">
          <p className="-rotate-45 text-2xl">
            <BsChevronDoubleDown />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Offer;

import React from "react";
import { GoDotFill } from "react-icons/go";

function WhyUs() {
  return (
    <div className="bg-black w-full px-4 py-16 md:px-20 md:py-24">
      <div className="bg-neutral-900 rounded-xl px-6 py-10 md:px-20 md:py-20 flex flex-col lg:flex-row gap-12">
        {/* Left section */}
        <div className="text-white max-w-md">
          <p className="flex items-center text-sm md:text-base mb-2">
            <span className="text-lime-400 text-lg mr-1">
              <GoDotFill />
            </span>
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Why you should choose{" "}
            <span className="text-white">Defcommstore</span>
          </h2>
        </div>

        {/* Right section - Cards */}
        <div className="grid gap-8 w-full">
          {/* Card 1 */}
          <div className="bg-black p-6 rounded-lg shadow-md border border-neutral-800">
            <div className="flex gap-1 mb-4">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-10 bg-lime-400 rounded-md"
                  ></div>
                ))}
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">
              Innovation
            </h3>
            <p className="text-stone-400 text-sm">
              Harness cutting-edge technology to stay ahead in a rapidly
              evolving market.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-black p-6 rounded-lg shadow-md border border-neutral-800">
            <div className="flex gap-2 mb-4">
              {[0, 1, 2].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-lime-800 rounded-full mb-1" />
                  <div className="w-4 h-10 bg-lime-400" />
                </div>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">
              Simplicity
            </h3>
            <p className="text-stone-400 text-sm">
              Simplify complex processes with intuitive and streamlined
              workflows.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black p-6 rounded-lg shadow-md border border-neutral-800">
            <div className="flex gap-2 mb-4">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 bg-lime-800 rounded-full mb-1" />
                <div className="w-2 h-10 bg-lime-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-1">
              Flexibility
            </h3>
            <p className="text-stone-400 text-sm">
              Adapt seamlessly to evolving business needs with scalable
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;

import React from "react";
import { BsCheck } from "react-icons/bs";
import { appSubmissionSteps } from "../../utils/formFields";

export default function FormStepper({ step }) {
  const stepColors = [
    "bg-[#14532d]", // Darkest green
    "bg-[#166534]", // Deep forest green
    "bg-[#22c55e]", // Vibrant green
    "bg-[#86efac]", // Mint
    "bg-[#bbf7d0]", // Pale
  ];

  return (
    <div className="sticky top-16 bg-transparent z-50 backdrop-blur-lg mb-10 px-4 md:px-12 max-w-[70%] ml-auto">
      <div className="relative z-10 flex justify-between items-center">
        {appSubmissionSteps.slice(1).map((s, index) => {
          const isCompleted = s.step < step;
          const isCurrent = s.step === step;
          const colorIndex = index % stepColors.length;

          const circleColor =
            isCompleted || isCurrent ? stepColors[colorIndex] : "bg-gray-300";
          const lineColor =
            s.step - 1 < step
              ? stepColors[(index - 1) % stepColors.length] || "bg-gray-300"
              : "bg-gray-300";

          return (
            <div
              key={s.step}
              className="flex flex-col items-center w-1/4 relative"
            >
              {/* Line connecting to previous */}
              {index > 0 && (
                <div
                  className={`absolute top-3 -left-[48%] h-0.5 ${lineColor} z-0 transition-all duration-300`}
                  style={{ width: "100%" }}
                />
              )}

              {/* Step Circle */}
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold z-10 ${circleColor} ${
                  isCurrent ? "shadow-[0_0_0_4px_rgba(34,197,94,0.4)]" : ""
                } transition-all duration-300`}
              >
                {isCompleted ? <BsCheck size={16} /> : s.step}
              </div>

              {/* Step title */}
              <span className="mt-2 text-[10px] md:text-[12px] text-white text-center whitespace-nowrap">
                {s.title?.split(" ")[0] || "\u00A0"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

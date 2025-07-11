import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaSpinner } from "react-icons/fa";

const SubmissionNavigators = ({
  step,
  appSubmissionSteps,
  nextStep,
  prevStep,
  loading,
}) => {
  return (
    <div className="flex justify-end gap-3 items-center pt-6 border-t border-gray-200 mt-8">
      {step > 0 && (
        <button
          type="button"
          onClick={prevStep}
          className="cursor-pointer bg-gray-200 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"
        >
          <FiArrowLeft size={20} />
        </button>
      )}
      {step < appSubmissionSteps.length - 1 ? (
        <button
          type="button"
          onClick={nextStep}
          className="cursor-pointer bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
        >
          <FiArrowRight size={20} />
        </button>
      ) : (
        <button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          aria-live="polite"
          className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-colors duration-200 ${
            loading
              ? "bg-lime-400 cursor-not-allowed"
              : "bg-lime-600 hover:bg-lime-700 text-white"
          }`}
        >
          {loading && (
            <FaSpinner className="animate-spin text-white" size={16} />
          )}
          {loading ? "Submitting..." : "Submit App"}
        </button>
      )}
    </div>
  );
};

export default SubmissionNavigators;

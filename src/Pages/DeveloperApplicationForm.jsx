import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FiCheckCircle,
  FiXCircle,
  FiUploadCloud,
  FiLoader,
  FiClock,
} from "react-icons/fi";
import useApp from "../hooks/useApp";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import DevModeWaitingScreen from "../Components/store/apps/DevModeWaitingScreen";

const DeveloperApplicationForm = () => {
  const { authDetails } = useContext(AuthContext);
  const { developerApplicationMutation } = useApp();
  const [submitStatus, setSubmitStatus] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setSubmitStatus("");

    const formData = new FormData();
    formData.append("rc_number", data.rc_number);
    formData.append("rc_doc", data.rc_doc[0]);
    formData.append("tin", data.tin);
    formData.append("tin_doc", data.tin_doc[0]);
    formData.append("developer_display_name", data.developer_display_name);
    formData.append("website", data.website);
    formData.append("selfie", data.selfie[0]);

    developerApplicationMutation.mutate(formData, {
      onSuccess: () => {
        setSubmitStatus("success");
        reset();
      },
      onError: () => {
        setSubmitStatus("error");
      },
    });
  };

  // ✅ Show waiting message if developer status is pending or under_review
  if (authDetails?.user?.statusApp === "pending") {
    return <DevModeWaitingScreen />;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-[#1b1f10] text-white rounded-2xl shadow-xl p-8 space-y-8">
      <h1 className="text-3xl font-bold flex items-center gap-2 text-lime-400">
        <FiUploadCloud className="text-3xl" /> Developer Application
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* RC Number */}
        <div>
          <label className="block mb-1 text-sm font-medium">RC Number</label>
          <input
            {...register("rc_number", { required: "RC Number is required" })}
            placeholder="Enter your RC number"
            className="bg-[#2a3119] w-full px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
          {errors.rc_number && (
            <p className="text-red-400 text-sm mt-1">
              {errors.rc_number.message}
            </p>
          )}
        </div>

        {/* RC Document */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            RC Document (PDF/Image)
          </label>
          <input
            type="file"
            accept="application/pdf,image/*"
            {...register("rc_doc", { required: "RC document is required" })}
            className="bg-[#2a3119] w-full px-4 py-2 rounded-lg text-white file:bg-lime-600 file:text-white file:border-none file:rounded file:px-4 file:py-2 hover:file:bg-lime-700"
          />
          {errors.rc_doc && (
            <p className="text-red-400 text-sm mt-1">{errors.rc_doc.message}</p>
          )}
        </div>

        {/* TIN */}
        <div>
          <label className="block mb-1 text-sm font-medium">TIN</label>
          <input
            {...register("tin", { required: "TIN is required" })}
            placeholder="Enter your TIN"
            className="bg-[#2a3119] w-full px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
          {errors.tin && (
            <p className="text-red-400 text-sm mt-1">{errors.tin.message}</p>
          )}
        </div>

        {/* TIN Document */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            TIN Document (PDF/Image)
          </label>
          <input
            type="file"
            accept="application/pdf,image/*"
            {...register("tin_doc", { required: "TIN document is required" })}
            className="bg-[#2a3119] w-full px-4 py-2 rounded-lg text-white file:bg-lime-600 file:text-white file:border-none file:rounded file:px-4 file:py-2 hover:file:bg-lime-700"
          />
          {errors.tin_doc && (
            <p className="text-red-400 text-sm mt-1">
              {errors.tin_doc.message}
            </p>
          )}
        </div>

        {/* Developer Display Name */}
        <div>
          <label className="block mb-1 text-sm font-medium">
            Developer Display Name
          </label>
          <input
            {...register("developer_display_name", {
              required: "Display name is required",
            })}
            placeholder="Your company or display name"
            className="bg-[#2a3119] w-full px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
          {errors.developer_display_name && (
            <p className="text-red-400 text-sm mt-1">
              {errors.developer_display_name.message}
            </p>
          )}
        </div>

        {/* Website */}
        <div>
          <label className="block mb-1 text-sm font-medium">Website</label>
          <input
            {...register("website", {
              required: "Website is required",
              pattern: {
                value: /^https?:\/\/.+\..+/,
                message: "Enter a valid URL",
              },
            })}
            placeholder="https://yourwebsite.com"
            className="bg-[#2a3119] w-full px-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-lime-500"
          />
          {errors.website && (
            <p className="text-red-400 text-sm mt-1">
              {errors.website.message}
            </p>
          )}
        </div>

        {/* Selfie */}
        <div>
          <label className="block mb-1 text-sm font-medium">Selfie</label>
          <input
            type="file"
            accept="image/*"
            {...register("selfie", { required: "A selfie is required" })}
            className="bg-[#2a3119] w-full px-4 py-2 rounded-lg text-white file:bg-lime-600 file:text-white file:border-none file:rounded file:px-4 file:py-2 hover:file:bg-lime-700"
          />
          {errors.selfie && (
            <p className="text-red-400 text-sm mt-1">{errors.selfie.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={developerApplicationMutation.isPending}
          className={`w-full flex items-center justify-center gap-2 transition duration-200 font-semibold py-3 rounded-lg
    ${
      developerApplicationMutation.isPending
        ? "bg-lime-500 cursor-not-allowed opacity-60"
        : "bg-lime-600 hover:bg-lime-700 cursor-pointer text-white"
    }`}
        >
          {developerApplicationMutation.isPending ? (
            <>
              <FiLoader className="animate-spin text-white text-xl" />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </button>

        {/* Status Message */}
        {submitStatus === "success" && (
          <p className="flex items-center gap-2 text-green-500 text-sm mt-3">
            <FiCheckCircle /> Application submitted successfully!
          </p>
        )}
        {submitStatus === "error" && (
          <p className="flex items-center gap-2 text-red-500 text-sm mt-3">
            <FiXCircle /> There was a problem submitting your application.
          </p>
        )}
      </form>
    </div>
  );
};

export default DeveloperApplicationForm;

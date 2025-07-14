import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiUpload, FiCheckCircle, FiXCircle } from "react-icons/fi";

const DeveloperApplicationForm = () => {
  const [submitStatus, setSubmitStatus] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitStatus("");

    const formData = new FormData();
    formData.append("rc_number", data.rc_number);
    formData.append("rc_doc", data.rc_doc[0]);
    formData.append("tin", data.tin);
    formData.append("tin_doc", data.tin_doc[0]);
    formData.append("developer_display_name", data.developer_display_name);
    formData.append("website", data.website);
    formData.append("selfie", data.selfie[0]);

    try {
      const res = await fetch(
        "https://backend.defcomm.ng/api/app/developermode",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer 197|9eEA5oFflmztNNPliamVvX2cWigeAKAqUvQdhFhZc1e82259",
          },
          body: formData,
        }
      );

      const result = await res.json();

      if (res.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
        console.error("Error:", result);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Apply to Become a Developer
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">RC Number</label>
          <input
            {...register("rc_number", { required: "RC Number is required" })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Enter your RC number"
          />
          {errors.rc_number && (
            <p className="text-red-500 text-sm">{errors.rc_number.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">
            RC Document (PDF/Image)
          </label>
          <input
            type="file"
            accept="application/pdf,image/*"
            {...register("rc_doc", { required: "RC document is required" })}
            className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-lime-600 file:text-white hover:file:bg-lime-700"
          />
          {errors.rc_doc && (
            <p className="text-red-500 text-sm">{errors.rc_doc.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">TIN</label>
          <input
            {...register("tin", { required: "TIN is required" })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Enter your TIN"
          />
          {errors.tin && (
            <p className="text-red-500 text-sm">{errors.tin.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">TIN Document</label>
          <input
            type="file"
            accept="application/pdf,image/*"
            {...register("tin_doc", { required: "TIN document is required" })}
            className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-lime-600 file:text-white hover:file:bg-lime-700"
          />
          {errors.tin_doc && (
            <p className="text-red-500 text-sm">{errors.tin_doc.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">
            Developer Display Name
          </label>
          <input
            {...register("developer_display_name", {
              required: "Display name is required",
            })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Your company or display name"
          />
          {errors.developer_display_name && (
            <p className="text-red-500 text-sm">
              {errors.developer_display_name.message}
            </p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Website</label>
          <input
            {...register("website", {
              required: "Website is required",
              pattern: {
                value: /^https?:\/\/.+\..+/,
                message: "Enter a valid URL",
              },
            })}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="https://yourwebsite.com"
          />
          {errors.website && (
            <p className="text-red-500 text-sm">{errors.website.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Selfie</label>
          <input
            type="file"
            accept="image/*"
            {...register("selfie", { required: "A selfie is required" })}
            className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-lime-600 file:text-white hover:file:bg-lime-700"
          />
          {errors.selfie && (
            <p className="text-red-500 text-sm">{errors.selfie.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#36460A] text-white py-2 rounded-lg hover:bg-[#2c390a] transition-all duration-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </button>

        {submitStatus === "success" && (
          <p className="flex items-center gap-2 text-green-600 text-sm mt-2">
            <FiCheckCircle /> Application submitted successfully!
          </p>
        )}
        {submitStatus === "error" && (
          <p className="flex items-center gap-2 text-red-600 text-sm mt-2">
            <FiXCircle /> There was a problem submitting your application.
          </p>
        )}
      </form>
    </div>
  );
};

export default DeveloperApplicationForm;

import React, { useState } from "react";
import NavTwo from "../../../../Components/Header/NavTwo";
import divOne from "../../../../assets/arcticons_govee-home.png";
import VectorA from "../../../../assets/simple-icons_appstore.png";
import { TfiArrowRight, TfiArrowLeft } from "react-icons/tfi";
import { BsCheck } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function AppSubmission() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Create App", "Shipping", "Payment", "Confirm", "Success"];

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="font-[poppins]">
      <NavTwo />
      <div className="bg-deffcom-limagradiant py-20 w-full">
        <div className="container mx-auto px-4 space-y-8">
          {/* Top Header Section */}
          <div className="sticky top-0 bg-deffcom-lima flex flex-col md:flex-row justify-between gap-6 items-center">
            <div className="w-fit p-4 bg-stone-600 border-l-8 border-lime-400">
              <img
                src={divOne}
                alt="logo"
                className="p-4 md:p-6 rounded-3xl bg-deffcom-lima"
              />
            </div>

            <div className="flex text-white text-[8px] md:text-[12px] overflow-x-auto md:justify-center">
              {steps.map((step, index) => (
                <div key={step} className="flex flex-col items-center mx-2">
                  <div className="flex items-center">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-xs ${
                        index <= currentStep ? "bg-lime-400" : "bg-white"
                      }`}
                    >
                      {index < currentStep ? <BsCheck /> : null}
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`h-1 w-10 mx-1 rounded-md ${
                          index < currentStep ? "bg-lime-400" : "bg-white"
                        }`}
                      />
                    )}
                  </div>
                  <span className="mt-1 whitespace-nowrap">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Add Button */}
          {currentStep === 4 && (
            <div
              className="fixed right-4 bottom-10 md:right-10 md:bottom-20 bg-deffcom-lima border-2 border-lime-400 w-14 h-14 flex justify-center items-center rounded-4xl text-white z-50 cursor-pointer"
              onClick={() => navigate("/dataCol")}
            >
              <FaPlus />
            </div>
          )}

          {/* Form Content */}
          <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row gap-y-6">
            {/* Left Icon */}
            <div className="bg-[#89AF20] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none py-6 px-6 flex justify-center">
              <img
                src={VectorA}
                alt="platform"
                className="max-w-[200px] h-fit"
              />
            </div>

            {/* Right Form Area */}
            <div className="w-full bg-white rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none p-6 space-y-8">
              {currentStep === 0 && (
                <>
                  {/* Step 1: Create App */}
                  <div className="space-y-6">
                    <label className="font-bold block">Platform?</label>
                    <div className="grid grid-cols-2 md:flex gap-4">
                      {["Android", "iOS", "Ubuntu", "DefcommOS"].map(
                        (platform) => (
                          <label
                            key={platform}
                            className="flex items-center gap-3"
                          >
                            <input
                              type="checkbox"
                              className="appearance-none h-5 w-5 border border-black rounded-full bg-white checked:bg-lime-400"
                            />
                            {platform}
                          </label>
                        )
                      )}
                    </div>

                    <div>
                      <label className="font-bold">Graphics</label>
                      <p className="text-sm text-justify">
                        Ensure your app icon, screenshots, and videos are
                        optimized for promoting your app on Defcomm Stores...
                      </p>
                    </div>

                    {["App icon", "Featured Images"].map((labelText, idx) => (
                      <div key={idx} className="space-y-2">
                        <label>{labelText} *</label>
                        <input
                          type="file"
                          accept="image/*,video/*"
                          className="w-full max-w-[800px] h-[300px] border border-gray-300 p-4"
                        />
                        <p className="text-sm">
                          {labelText === "App icon"
                            ? "Must be PNG or JPEG, up to 1 MB, 512x512 px"
                            : "Must be PNG or JPEG, up to 15 MB, 1024x500 px"}
                        </p>
                      </div>
                    ))}

                    <div>
                      <label>Privacy Policy *</label>
                      <input
                        type="text"
                        className="w-full max-w-[800px] h-10 border border-gray-300 px-4"
                        placeholder="Enter URL"
                      />
                    </div>
                  </div>
                </>
              )}

              {currentStep === 1 && (
                <>
                  {/* Step 2: Shipping */}
                  <div className="space-y-6">
                    <label className="text-xl font-bold block">
                      Create App Release
                    </label>

                    {[
                      "App Bundles",
                      "Release Name",
                      "Version",
                      "Copyright",
                    ].map((field, i) => (
                      <div key={i} className="space-y-2">
                        <label>{field} *</label>
                        <input
                          type="text"
                          className="w-full max-w-[800px] h-10 border border-gray-300 px-4"
                        />
                      </div>
                    ))}

                    <div className="space-y-4 text-sm">
                      <label className="font-bold">Release Type</label>
                      {["Manually", "Automatically", "Auto after review"].map(
                        (release, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              className="appearance-none h-3 w-3 border border-black rounded-full checked:bg-lime-400"
                            />
                            <span>{release}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </>
              )}

              {currentStep === 2 && (
                <>
                  {/* Step 3: Payment */}
                  <div className="space-y-6">
                    <label className="text-xl font-bold block">
                      Data Collection
                    </label>
                    <div className="pl-2 space-y-6">
                      <p>
                        Thanks for helping users understand your app's privacy
                        practices. Remember that you're responsible for any
                        third-party code that is added to your app, so if your
                        third-party partners collect data from your app, you
                        must represent that in your responses.
                      </p>
                      <ul className="list-disc pl-6 text-sm space-y-2">
                        <li>
                          “Collect” refers to transmitting data off device...
                        </li>
                        <li>
                          “Third-party partners” include analytics tools,
                          SDKs...
                        </li>
                      </ul>
                      <p className="text-sm">
                        View the{" "}
                        <span className="underline">
                          full list of questions
                        </span>
                        .
                      </p>
                      <p className="text-sm font-semibold">
                        Do you or your third-party partners collect data from
                        this app?
                      </p>
                    </div>
                    <div className="space-y-2">
                      {["Yes", "No"].map((opt, i) => (
                        <label key={i} className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="appearance-none h-3 w-3 border border-black rounded-full checked:bg-lime-400"
                          />
                          {opt}, we {opt === "Yes" ? "" : "do not "}collect data
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {currentStep === 3 && (
                <>
                  {/* Step 4: Confirm */}
                  <div className="flex flex-col items-center space-y-6">
                    <div className="bg-gray-200 w-full max-w-[400px] text-center py-10 rounded-xl">
                      <div className="text-[45px] text-lime-400">
                        <FiCheckCircle />
                      </div>
                      <p className="font-bold pt-3">Data not collected</p>
                      <p className="text-sm">This app collects no user data</p>
                    </div>
                    <button className="bg-deffcom-lima text-white px-6 py-2">
                      Data Type
                    </button>
                    <p className="text-sm">
                      Data is not collected from this app
                    </p>
                  </div>
                </>
              )}

              {currentStep === 4 && (
                <>
                  {/* Step 5: Success */}
                  <div className="space-y-6">
                    <label className="text-xl font-bold block">
                      Final Review
                    </label>
                    <p>You've completed all steps. Submit when ready.</p>
                  </div>
                </>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-end gap-4 pt-10">
                {currentStep > 0 && (
                  <button
                    className="bg-black cursor-pointer text-white w-14 h-14 rounded-full flex items-center justify-center"
                    onClick={prevStep}
                  >
                    <TfiArrowLeft />
                  </button>
                )}
                {currentStep < steps.length - 1 && (
                  <button
                    className="bg-black cursor-pointer text-white w-14 h-14 rounded-full flex items-center justify-center"
                    onClick={nextStep}
                  >
                    <TfiArrowRight />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

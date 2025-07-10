import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { BsCheck } from "react-icons/bs";
import { TbCircleCheck } from "react-icons/tb";
import VectorA from "../../assets/VectorA.png";
import { useNavigate } from "react-router-dom";
import { appSubmissionSteps } from "../../utils/formFields";
import HeaderBarTwo from "./HeaderBarTwo";
import { FaUpload } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function AppSubmissionForm() {
  const { authDetails } = useContext(AuthContext);
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [useDefaultSupport, setUseDefaultSupport] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: Object.fromEntries(
      appSubmissionSteps.flatMap((s) => s.fields.map((f) => [f.name, ""]))
    ),
  });

  const currentStepData = appSubmissionSteps.find((s) => s.step === step);

  const autofillSupportInfo = {
    supportEmail: authDetails?.user?.email,
    supportPhone: authDetails?.user?.phone,
    supportWebsite: authDetails?.user?.website || "www.defcomm.ng",
  };

  useEffect(() => {
    if (useDefaultSupport) {
      for (const key in autofillSupportInfo) {
        setValue(key, autofillSupportInfo[key]);
      }
    } else {
      setValue("supportEmail", "");
      setValue("supportPhone", "");
      setValue("supportWebsite", "");
    }
  }, [useDefaultSupport, setValue]);

  const nextStep = () => {
    if (step < appSubmissionSteps.length - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="p-4 md:p-10">
      {step === 0 && <HeaderBarTwo title="Defcomm New App Submission" />}
      {step > 0 && (
        <div className="relative mb-10 px-4 md:px-12 max-w-lg">
          <div className="relative z-10 flex justify-between items-center">
            {appSubmissionSteps.slice(1).map((s, index, array) => {
              const isCompleted = s.step < step;
              const isCurrent = s.step === step;

              // Step colors
              const stepColors = ["bg-lime-500", "bg-red-500", "bg-blue-500"];
              const circleColor =
                isCompleted || isCurrent
                  ? stepColors[index] || "bg-gray-400"
                  : "bg-gray-300";

              // Line color should be based on the *previous* step’s completion
              const lineColor =
                s.step - 1 < step
                  ? stepColors[index - 1] || "bg-gray-400"
                  : "bg-gray-400";

              return (
                <div
                  key={s.step}
                  className="flex flex-col items-center w-1/4 relative"
                >
                  {/* Connecting line FROM previous step TO this one */}
                  {index > 0 && (
                    <div
                      className={`absolute top-3 -left-1/2 h-0.5 ${lineColor} z-0`}
                      style={{ width: "100%" }}
                    />
                  )}

                  {/* Circle */}
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold z-10 ${circleColor}`}
                  >
                    {isCompleted ? <BsCheck size={16} /> : s.step}
                  </div>

                  {/* Title */}
                  <span className="mt-2 text-[10px] md:text-[12px] text-white text-center whitespace-nowrap">
                    {s.title || "\u00A0"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-[20px] overflow-hidden md:flex relative mt-5"
      >
        {/* Left Sidebar */}
        <div className="bg-[#89AF20] p-6 md:p-10 flex-shrink-0 flex justify-center items-start relative">
          <button
            type="button"
            onClick={() => navigate("/store/apps")}
            className="cursor-pointer font-bold absolute top-4 left-4 flex items-center text-sm text-gray-800 hover:text-gray-900"
          >
            <FiArrowLeft size={20} /> Back to Apps
          </button>
          <img
            src={VectorA}
            alt="Vector A"
            className="w-20 md:w-24 h-fit mt-10 invert"
          />
        </div>

        {/* Right Form Panel */}
        <div className="p-6 md:p-10 flex-1 space-y-6 relative max-w-[80%] mx-auto">
          <h2 className="text-2xl font-bold mb-4">{currentStepData.title}</h2>

          {/* Dynamic Form Fields */}
          {currentStepData.fields.map(
            ({
              name,
              label,
              placeholder,
              type,
              required,
              options,
              maxLength,
              desc,
              layout,
            }) => (
              <div
                key={name}
                className={`mb-6 grid ${
                  layout
                    ? "md:grid-cols-[200px_1fr] gap-2"
                    : "flex-col grid-col-1"
                }`}
              >
                <label htmlFor={name} className="mb-1 font-medium">
                  {label}
                </label>

                {type === "textarea" ? (
                  <textarea
                    id={name}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    {...register(name, { required })}
                    className="w-full bg-gray-100 px-4 py-3 text-sm"
                  />
                ) : type === "radio-group" ? (
                  <div className="space-y-2">
                    {options.map((opt) => (
                      <label key={opt} className="flex items-center gap-2">
                        <input
                          type="radio"
                          value={opt}
                          {...register(name, { required })}
                          className="appearance-none h-4 w-4 border border-black rounded-full checked:bg-lime-400"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                ) : type === "radio-group-flex" ? (
                  <div className="space-y-2 flex flex-wrap gap-4 md:gap-7  items-center">
                    {options.map((opt) => (
                      <label key={opt} className="flex items-center gap-2">
                        <input
                          type="radio"
                          value={opt}
                          {...register(name, { required })}
                          className="appearance-none h-4 w-4 border border-black rounded-full checked:bg-lime-400"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                ) : type === "images" ? (
                  <div className="space-y-6">
                    {desc && (
                      <p className="text-sm text-gray-400 py-4">{desc}</p>
                    )}
                    {options.map((image, index) => (
                      <figure
                        key={index}
                        className="grid md:grid-cols-[200px_1fr] items-start gap-4"
                      >
                        <label className="text-sm font-semibold text-gray-700 mt-2">
                          {image?.label}
                        </label>

                        <section className="min-h-60 text-gray-600 border border-dashed border-gray-400 bg-gray-50 flex flex-col items-center justify-center text-center p-6 hover:bg-gray-100 transition cursor-pointer">
                          <div className="w-12 h-12 mb-3 bg-gray-200 rounded-full flex items-center justify-center">
                            <FaUpload size="30" />
                          </div>
                          <p className="text-xs max-w-xs mt-2">
                            {image?.desc || "Drop PNG or JPEG to upload"}
                          </p>
                        </section>
                      </figure>
                    ))}
                  </div>
                ) : (
                  <input
                    id={name}
                    type={type}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    {...register(name, { required })}
                    className="w-full bg-gray-100 px-4 py-3 text-sm"
                  />
                )}

                {/* ✅ Inject support toggle after category */}
                {step === 0 && name === "category" && (
                  <div className="flex flex-wrap gap-2 justify-between items-center pt-4 mt-4">
                    <h3 className="font-bold text-xl">Add New User</h3>
                    <label
                      className={`flex items-center gap-2 text-sm text-gray-400 cursor-pointer select-none transition-colors duration-200 ${
                        useDefaultSupport ? "text-lime-700" : "text-gray-400"
                      }`}
                      onClick={() => setUseDefaultSupport(!useDefaultSupport)}
                    >
                      <TbCircleCheck size={20} />
                      Use my default support info
                    </label>
                  </div>
                )}
              </div>
            )
          )}

          {/* Footer */}
          <div className="flex justify-end gap-3 items-center pt-6">
            {step > 0 && (
              <button
                type="button"
                onClick={prevStep}
                className="cursor-pointer bg-black text-white w-12 h-12 rounded-full flex items-center justify-center"
              >
                <FiArrowLeft />
              </button>
            )}
            {step < appSubmissionSteps.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="cursor-pointer bg-black text-white w-12 h-12 rounded-full flex items-center justify-center"
              >
                <FiArrowRight />
              </button>
            ) : (
              <button
                type="submit"
                className="bg-lime-600 text-white px-6 py-2 rounded-full"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

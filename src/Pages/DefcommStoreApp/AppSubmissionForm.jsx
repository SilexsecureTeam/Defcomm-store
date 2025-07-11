import React, { useEffect, useState, useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { FiArrowLeft } from "react-icons/fi";
import { TbCircleCheck } from "react-icons/tb";
import VectorA from "../../assets/VectorA.png";
import { useNavigate } from "react-router-dom";
import {
  appSubmissionSteps,
  noCollect,
  yesCollect,
} from "../../utils/formFields";
import HeaderBarTwo from "../../Components/store/HeaderBarTwo";
import { AuthContext } from "../../context/AuthContext";
import FormStepper from "../../Components/store/FormStepper";
import FormFieldRenderer from "../../Components/store/FormFieldRenderer";
import SubmissionNavigators from "../../Components/store/SubmissionNavigators";

export default function AppSubmissionForm() {
  const { authDetails } = useContext(AuthContext);
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [useDefaultSupport, setUseDefaultSupport] = useState(false);
  const [dataCollectionFields, setDataCollectionFields] = useState([]);

  const methods = useForm({
    defaultValues: Object.fromEntries(
      appSubmissionSteps.flatMap((s) => s.fields.map((f) => [f.name, ""]))
    ),
    mode: "onTouched",
  });

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    trigger,
  } = methods;

  const currentStepData = appSubmissionSteps.find((s) => s.step === step);
  const collectsDataValue = watch("collectsData");

  useEffect(() => {
    if (step === 0) {
      if (useDefaultSupport) {
        setValue("supportEmail", authDetails?.user?.email || "");
        setValue("supportPhone", authDetails?.user?.phone || "");
        setValue(
          "supportWebsite",
          authDetails?.user?.website || "www.defcomm.ng"
        );
      } else {
        // Only clear if the current value matches the default, otherwise user input is preserved
        if (watch("supportEmail") === (authDetails?.user?.email || ""))
          setValue("supportEmail", "");
        if (watch("supportPhone") === (authDetails?.user?.phone || ""))
          setValue("supportPhone", "");
        if (watch("supportWebsite") === "www.defcomm.ng")
          setValue("supportWebsite", "");
      }
    }
  }, [useDefaultSupport, setValue, watch, authDetails, step]);

  useEffect(() => {
    const cleanupUrls = () => {
      const files = Object.values(watch()).filter((val) => val instanceof File);
      const urls = files.map((file) => URL.createObjectURL(file));
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
    return cleanupUrls;
  }, [watch]);

  // Dynamically set fields for Step 4 based on "collectsData" selection
  useEffect(() => {
    if (step === 4) {
      if (collectsDataValue === "Yes, we collect data from this app") {
        setDataCollectionFields(yesCollect);
      } else {
        setDataCollectionFields(noCollect);
      }
    } else {
      setDataCollectionFields([]); // Clear fields if not on step 4
    }
  }, [step, collectsDataValue, yesCollect, noCollect]);

  const nextStep = async () => {
    // Determine the fields that are actually rendered and filter for required ones
    let fieldsToValidate = [];
    if (step === 4) {
      fieldsToValidate = dataCollectionFields
        .filter((field) => field.required && field.type !== "display")
        .map((field) => field.name);
    } else {
      fieldsToValidate = currentStepData.fields
        .filter((field) => field.required && field.type !== "display")
        .map((field) => field.name);
    }

    // If on step 0 and using default support, manually add support fields to validation
    if (step === 0 && useDefaultSupport) {
      fieldsToValidate.push("supportEmail", "supportPhone", "supportWebsite");
    }
    const isValid = await trigger(fieldsToValidate);
    // Only proceed if validation passes AND it's not the last step
    if (isValid && step < appSubmissionSteps.length - 1) {
      setStep(step + 1);
    } else {
      console.log("Validation errors on current step:", errors);
      // Optionally scroll to first error or provide user feedback
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const onSubmit = async (data) => {
    console.log("Final Form Data:", data);

    const formData = new FormData();

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value = data[key];
        // Skip display fields when submitting
        const fieldDef = currentStepData.fields.find((f) => f.name === key);
        if (fieldDef && fieldDef.type === "display") {
          continue;
        }

        if (value instanceof File) {
          formData.append(key, value, value.name);
        } else if (value !== null && value !== undefined) {
          formData.append(key, String(value));
        }
      }
    }

    try {
      const response = await fetch("YOUR_API_ENDPOINT_HERE/submit-app", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to submit app.");
      }

      const result = await response.json();
      console.log("App submission successful:", result);
      navigate("/submission-success");
    } catch (error) {
      console.error("Error submitting app:", error);
      alert(`Submission failed: ${error.message}`);
    }
  };

  // Determine which fields to render for the current step
  const fieldsToRender =
    step === 4 ? dataCollectionFields : currentStepData.fields;

  return (
    <div className="p-4 md:p-10">
      {step === 0 && <HeaderBarTwo title="Defcomm New App Submission" />}
      {step > 0 && <FormStepper step={step} />}

      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-[20px] overflow-hidden md:flex relative mt-5 shadow-lg"
        >
          <div className="bg-[#89AF20] p-6 md:p-10 flex-shrink-0 flex justify-center items-start relative ">
            <button
              type="button"
              onClick={() => navigate("/store/apps")}
              className="cursor-pointer font-bold absolute top-4 left-4 flex items-center text-sm text-gray-800 hover:text-gray-900"
            >
              <FiArrowLeft size={20} className="mr-1" /> Back to Apps
            </button>
            <img
              src={VectorA}
              alt="Vector A"
              className="w-20 md:w-24 h-fit mt-10 invert brightness-125"
            />
          </div>

          <div className="p-6 md:p-10 flex-1 space-y-6 relative w-full md:max-w-[70%] mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {currentStepData.title}
            </h2>

            {(step === 0 || step === 3) && currentStepData.description && (
              <p className="text-gray-700 text-sm mb-6 whitespace-pre-line">
                {currentStepData.description}
              </p>
            )}

            {step === 4 &&
              collectsDataValue === "Yes, we collect data from this app" && (
                <p className="text-gray-700 text-sm mb-6 whitespace-pre-line">
                  Thanks for helping users understand your app's privacy
                  practices. Remember that you're responsible for any
                  third-party code that is added to your app, so if your
                  third-party partners collect data from your app, you must
                  represent that in your responses.
                  <br />
                  <br />
                  • "Collect" refers to transmitting data off the device in a
                  way that allows you and/or your third-party partners to access
                  it for a period longer than necessary to service the
                  transmitted request in real time.
                  <br />
                  <br />
                  • Third-party partners include analytics tools, advertising
                  networks, third-party SDKs, or other external vendors whose
                  code you have added to the app.
                  <br />
                  <br />
                  You can view the full list of questions at any time.
                </p>
              )}

            {step === 5 && (
              <p className="text-gray-700 text-lg my-8">
                {currentStepData.content}
              </p>
            )}

            {/* Render fields for Step 0 with specific ordering */}
            {step === 0 ? (
              <>
                {fieldsToRender
                  .filter(
                    (field) =>
                      ![
                        "supportEmail",
                        "supportPhone",
                        "supportWebsite",
                      ].includes(field.name)
                  )
                  .map((field) => (
                    <FormFieldRenderer key={field.name} field={field} />
                  ))}

                {/* Support Information section */}
                <div className="flex flex-wrap gap-2 justify-between items-center pt-4 mt-4 border-t border-gray-200">
                  <h3 className="font-bold text-xl text-gray-800">
                    Add New User
                  </h3>
                  <label
                    className={`flex items-center gap-2 text-sm cursor-pointer select-none transition-colors duration-200 ${
                      useDefaultSupport
                        ? "text-lime-700 font-semibold"
                        : "text-gray-500"
                    }`}
                    onClick={() => setUseDefaultSupport(!useDefaultSupport)}
                  >
                    <TbCircleCheck
                      size={20}
                      className={
                        useDefaultSupport ? "text-lime-600" : "text-gray-400"
                      }
                    />
                    Use my default support info
                  </label>
                </div>
                {/* Render support fields */}
                {fieldsToRender
                  .filter(
                    (field) =>
                      field.name === "supportEmail" ||
                      field.name === "supportPhone" ||
                      field.name === "supportWebsite"
                  )
                  .map((field) => (
                    <FormFieldRenderer key={field.name} field={field} />
                  ))}
              </>
            ) : (
              // Render all fields normally for other steps (including dynamically generated for step 4)
              fieldsToRender.map((field) => (
                <FormFieldRenderer key={field.name} field={field} />
              ))
            )}

            <SubmissionNavigators
              step={step}
              prevStep={prevStep}
              nextStep={nextStep}
              appSubmissionSteps={appSubmissionSteps}
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

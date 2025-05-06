import React from "react";
import NavTwo from "../../../../Header/NavTwo";
import divOne from "../../../../../assets/arcticons_govee-home.png";
import VectorA from "../../../../../assets/simple-icons_appstore.png";
import { TfiArrowRight } from "react-icons/tfi";
import { TfiArrowLeft } from "react-icons/tfi";
import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function AppSubmission() {
  const navigate = useNavigate()
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

      <div className="bg-deffcom-limagradiant py-20">
        <div className="flex pt-4 pb-20 justify-between px-20 ">
          <div className=" p-4 bg-stone-600 border-l-8 border-lime-400">
            <img
              src={divOne}
              alt=""
              className="p-6 rounded-3xl bg-deffcom-lima"
            />
          </div>

          <div className="flex text-white text-[8px] space-x-0">
            {steps.map((step, index) => (
              <div key={step} className="flex flex-col items-center">
                <div className="flex items-center">
                  <div
                    className={`w-5 h-5 rounded-full flex text-white text-[14px] items-center justify-center
                    ${index <= currentStep ? "bg-lime-400" : "bg-white"}`}
                  >
                    {index < currentStep ? <BsCheck /> : null}
                  </div>

                  {index < steps.length - 1 && (
                    <div
                      className={`h-1 w-20 mx-1 rounded-md ${
                        index < currentStep ? "bg-lime-400" : "bg-white"
                      }`}
                    />
                  )}
                </div>
                <span className="text-white mt-1">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${currentStep === 4 ? "block" : "hidden"} absolute right-28 top-64 bg-deffcom-lima border-2 border-lime-400 w-14 h-14 flex justify-center items-center rounded-4xl text-white`}
          onClick={() => navigate("/dataCol")}
        >
          <FaPlus />
        </div>

        {/* Page rendering */}

        <div className="px-20">
          <div className="flex">
            <div className="rounded-l-[20px] py-25 bg-lime-400 px-10 ">
              <img src={VectorA} alt="" className="max-w-[200px]" />
            </div>

            <div className="relative rounded-r-[20px]">
              {/* Create App */}
              {currentStep === 0 && (
                <div className="relative grid py-20  pb-30 rounded-r-[20px] bg-white w-full  px-30">
                  <label htmlFor="" className="py-4 font-bold">
                    Platform ?
                  </label>
                  <div className="flex gap-10">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className={`appearance-none text-white h-5 w-5 border border-black rounded-full bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer`}
                      />
                      Andriod
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="appearance-none h-5 w-5 border border-black rounded-full bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer"
                      />
                      iOS
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="appearance-none h-5 w-5 border border-black rounded-full bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer"
                      />
                      Unbuntu
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="appearance-none h-5 w-5 border border-black rounded-full bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer"
                      />
                      DefcommOS
                    </div>
                  </div>
                  <label htmlFor="" className="py-6 font-bold">
                    Graphics
                  </label>
                  <p>
                    Ensure your app icon, screenshots, and videos are optimized
                    for promoting your app on Defcomm Stores. Familiarize
                    yourself with the content guidelines before uploading new
                    graphics. If you provide translations for your store listing
                    without localized graphics, we will use the graphics from
                    your default language.
                  </p>

                  <div className="flex justify-between py-6 w-full">
                    <p>App icon *</p>
                    <div>
                      <form
                        action="/upload"
                        method="post"
                        enctype="multipart/form-data"
                      >
                        <input
                          type="file"
                          name="file"
                          placeholder="Drop app bundles here to upload"
                          accept="image/*,video/*,.pdf,.doc,.docx,.txt"
                          className="border outline-none border-gray-300 min-w-[700px] flex justify-center items-center h-[300px]"
                          required
                        />
                      </form>
                      Your app icon must be a PNG or JPEG, up to 1 MB, 512 px by
                      512 px
                    </div>
                  </div>

                  <div className="flex justify-between py-6">
                    <p>Featured Images *</p>
                    <div>
                      <form
                        action="/upload"
                        method="post"
                        enctype="multipart/form-data"
                      >
                        <input
                          type="file"
                          name="file"
                          placeholder="Drop app bundles here to upload"
                          accept="image/*,video/*,.pdf,.doc,.docx,.txt"
                          className="border outline-none border-gray-300 min-w-[700px] flex justify-center items-center h-[300px]"
                          required
                        />
                      </form>
                      Your feature graphic must be a PNG or JPEG, up to 15 MB,
                      and 1,024 px by 500 px
                    </div>
                  </div>

                  <div className="flex justify-between py-6">
                    <p>Private Policy *</p>

                    <form
                      action="/upload"
                      method="post"
                      enctype="multipart/form-data"
                    >
                      <input
                        type="text"
                        name="text"
                        className="border outline-none border-gray-300 min-w-[700px] flex justify-center items-center h-[35px]"
                      />
                    </form>
                  </div>
                </div>
              )}

              {/* Shipping Page */}
              {currentStep === 1 && (
                <div className="relative grid py-20  pb-30 rounded-r-[20px] bg-white w-full  px-30">
                  <label htmlFor="" className="py-8 text-xl font-bold">
                    Create App Realease
                  </label>

                  <div className="flex gap-20 py-6 w-full">
                    <p>App Bundles *</p>
                    <div>
                      <form
                        action="/upload"
                        method="post"
                        enctype="multipart/form-data"
                      >
                        <input
                          type="file"
                          name="file"
                          placeholder="Drop app bundles here to upload"
                          accept="image/*,video/*,.pdf,.doc,.docx,.txt"
                          className="border outline-none border-gray-300 min-w-[700px] flex justify-center items-center h-[300px]"
                          required
                        />
                      </form>
                    </div>
                  </div>

                  <div className="flex gap-16 py-6">
                    <p>Release name *</p>
                    <div>
                      <form
                        action="/upload"
                        method="post"
                        enctype="multipart/form-data"
                      >
                        <input
                          type="text"
                          name="text"
                          className="border border-1 border-neutral-300 outline-none min-w-[700px] h-[35px]"
                        />
                      </form>
                      <p className="text-[12px] max-w-[700px]">
                        This is intended for internal identification purposes
                        only and will not be displayed to users on the Defcomm
                        Store. We've proposed a name based on the initial app
                        bundle or APK in this release.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-30  py-6">
                    <p>Version *</p>
                    <div>
                      <form
                        action="/upload"
                        method="post"
                        enctype="multipart/form-data"
                      >
                        <input
                          type="text"
                          name="text"
                          className="border border-1 border-neutral-300 outline-none min-w-[700px] h-[35px]"
                        />
                      </form>
                    </div>
                  </div>

                  <div className="flex gap-26 py-6">
                    <p>Copyright *</p>
                    <div>
                      <form
                        action="/upload"
                        method="post"
                        enctype="multipart/form-data"
                      >
                        <input
                          type="text"
                          name="text"
                          className="border border-1 border-neutral-300 outline-none min-w-[700px] h-[35px]"
                        />
                      </form>
                    </div>
                  </div>

                  <label htmlFor="" className="py-4 font-bold">
                    Create App Release
                  </label>
                  <p className="text-[12px] max-w-[700px]">
                    To make your app available on the Defcomm Store, you can
                    automatically release it after it’s been approved by Defcomm
                    Review. You can also manually release it on the App Store at
                    a later date
                  </p>

                  <div className="py-6 text-[12px]">
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        className="appearance-none h-3 w-3 border border-black rounded-full bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer"
                      />
                      Manually release this version
                    </div>

                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        className="appearance-none py-2 h-3 w-3 border border-black rounded-full bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer"
                      />
                      Automatically release this version
                    </div>
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        className="appearance-none h-3 w-3 border border-black rounded-full bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer"
                      />
                      Automatically release this version after App Review, no
                      earlier than
                    </div>
                  </div>
                </div>
              )}

              {/* Payment Page */}
              {currentStep === 2 && (
                <div className="">
                  <div className="relative grid py-20  pb-30 rounded-r-[20px] bg-white w-full  px-30">
                    <label htmlFor="" className="py-8 text-xl font-bold">
                      Data Collection
                    </label>

                    <p className="py-4">
                      Thanks for helping users understand your app's privacy
                      practices. Remember that you're responsible for any
                      third-party code that is added to your app, so if your
                      third-party partners collect data from your app, you must
                      represent that in your responses.
                    </p>

                    <ul className="px-10 list-disc ">
                      <li className="py-2">
                        “Collect” refers to transmitting data off the device in
                        a way that allows you and/or your third-party partners
                        to access it for a period longer than necessary to
                        service the transmitted request in real time.
                      </li>

                      <li className="py-2">
                        “Third-party partners” include analytics tools,
                        advertising networks, third-party SDKs, or other
                        external vendors whose code you have added to the app.
                      </li>
                    </ul>

                    <p className="py-4">
                      You can{" "}
                      <span className="underline">
                        view the full list of questions{" "}
                      </span>{" "}
                      at any time.
                    </p>

                    <p className="font-bold ">
                      Do you or your third-party partners collect data from this
                      app?
                    </p>

                    <div className="py-6 text-[12px]">
                      <div className="flex items-center gap-4">
                        <input
                          type="checkbox"
                          className="appearance-none h-3 w-3 border border-black rounded-full bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer"
                        />
                        Yes, we collect data from this app
                      </div>

                      <div className="flex items-center gap-4">
                        <input
                          type="checkbox"
                          className="appearance-none h-3 w-3 border border-black rounded-full bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer"
                        />
                        No, we do not collect data from this app
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Confirm Page */}
              {currentStep === 3 && (
                <div className="">
                  <div className="relative py-20  pb-30 rounded-r-[20px] bg-white w-full  px-30">
                    <label htmlFor="" className="py-8 text-xl font-bold">
                      Product Page Review
                    </label>

                    <div className="flex flex-col  py-10 w-full justify-center items-center">
                      <div className="bg-gray-200 flex flex-col py-4 items-center justify-center w-[800px] h-[256px]">
                        <div className="text-[45px] text-lime-400">
                          <FiCheckCircle />
                        </div>

                        <p className="font-bold py-3">Data not collected</p>
                        <p className="text-[12px]">
                          The developer does not collect any data from this app
                        </p>
                      </div>

                      <button className=" text-white py-2 mt-14 mb-6 bg-deffcom-lima w-[160px]">
                        Data Type
                      </button>
                      <p className="text-[12px] ">
                        Data is not collected from this app
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Success Page */}
              {currentStep === 4 && (
                <div className="">
                  <div className="relative grid py-20  pb-30 rounded-r-[20px] bg-white w-full  px-30">
                    <label htmlFor="" className="py-8 text-xl font-bold">
                      Data Collection
                    </label>

                    <p className="py-4">
                      Thanks for helping users understand your app's privacy
                      practices. Remember that you're responsible for any
                      third-party code that is added to your app, so if your
                      third-party partners collect data from your app, you must
                      represent that in your responses.
                    </p>

                    <ul className="px-10 list-disc ">
                      <li className="py-2">
                        “Collect” refers to transmitting data off the device in
                        a way that allows you and/or your third-party partners
                        to access it for a period longer than necessary to
                        service the transmitted request in real time.
                      </li>

                      <li className="py-2">
                        “Third-party partners” include analytics tools,
                        advertising networks, third-party SDKs, or other
                        external vendors whose code you have added to the app.
                      </li>
                    </ul>

                    <p className="py-4">
                      You can{" "}
                      <span className="underline">
                        view the full list of questions{" "}
                      </span>{" "}
                      at any time.
                    </p>

                    <p className="font-bold ">
                      Do you or your third-party partners collect data from this
                      app?
                    </p>

                    <div className="py-6 text-[12px]">
                      <div className="flex items-center gap-4">
                        <input
                          type="checkbox"
                          className="appearance-none h-3 w-3 border border-black rounded-full bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer"
                        />
                        Yes, we collect data from this app
                      </div>

                      <div className="flex items-center gap-4">
                        <input
                          type="checkbox"
                          className="appearance-none h-3 w-3 border border-black rounded-full bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer"
                        />
                        No, we do not collect data from this app
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-6 absolute right-30 bottom-10">
                <div
                  className="bg-black w-14 h-14 flex justify-center items-center rounded-4xl text-white cursor-pointer"
                  onClick={prevStep}
                >
                  <TfiArrowLeft />
                </div>
                <div
                  className={`bg-black w-14 h-14 flex justify-center items-center rounded-4xl text-white cursor-pointer ${
                    currentStep === 4 ? "hidden" : "block"
                  }`}
                  onClick={nextStep}
                >
                  <TfiArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

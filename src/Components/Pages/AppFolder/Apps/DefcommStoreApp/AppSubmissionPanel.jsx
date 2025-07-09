import React from "react";
import VectorA from "../../../../../assets/VectorA.png";
import Groupone from "../../../../../assets/Group 5335.png";
import start from "../../../../../assets/material-icon-theme_verified.png";
import fileDev from "../../../../../assets/Secure File Sharing.png";
import militarymail from "../../../../../assets/Secure Email.png";
import Bullet from "../../../../../assets/Armour (1) 1.png";
import iSurvive from "../../../../../assets/militar 1.png";
import { FiArrowRight } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { TbCircleCheck } from "react-icons/tb";

export default function AppSubmissionPanel({ showpage, setShowPage }) {
  return (
    <div className="px-4 md:px-20 space-y-12">
      {/* App Submission Overview */}
      {!showpage && (
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-white text-[30px] md:text-[40px]">
              App Submission
            </h1>
            <div
              className="bg-deffcom-lima border-2 border-lime-400 w-14 h-14 flex justify-center items-center rounded-4xl text-white cursor-pointer"
              onClick={() => setShowPage(true)}
            >
              <FaPlus />
            </div>
          </div>

          <div className="md:flex">
            {/* Icon Section */}
            <div className="rounded-t-[20px] md:rounded-l-[20px] bg-lime-400 p-4 md:p-10">
              <img src={VectorA} alt="Vector A" />
            </div>

            {/* App Tiles Section */}
            <div className="bg-white py-10 px-4 md:px-10 rounded-b-[20px] md:rounded-r-[20px] w-full">
              <h1 className="font-bold text-[30px] md:text-[40px]">
                Defcomm Store Connect
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 pt-6">
                {[
                  { name: "Secure Call", img: Groupone },
                  { name: "FileDev Sharing", img: fileDev },
                  { name: "MilitaryMail", img: militarymail },
                  { name: "Bullet Precision", img: Bullet },
                  { name: "iSurvive", img: iSurvive },
                ].map(({ name, img }, idx) => (
                  <div key={idx} className="text-center">
                    <div className="border border-lime-900 rounded-full h-24 w-24 mx-auto flex items-center justify-center">
                      <img src={img} alt={name} className="w-16" />
                    </div>
                    <p className="font-semibold mt-2">{name}</p>
                    <div className="flex justify-center items-center gap-2 text-xs mt-1">
                      <img src={start} alt="status" className="w-4" />
                      <span>DefOS 12.0.0 Ready</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute right-10 bottom-10 bg-black w-14 h-14 flex justify-center items-center rounded-4xl text-white">
                <FiArrowRight />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* App Submission Form */}
      {showpage && (
        <div className="md:flex gap-6">
          {/* Icon */}
          <div className="rounded-t-[20px] md:rounded-l-[20px] bg-lime-400 p-6 md:p-10">
            <img src={VectorA} alt="Vector A" />
          </div>

          {/* Form */}
          <form className="bg-white w-full rounded-b-[20px] md:rounded-r-[20px] p-6 md:p-10 space-y-6 relative">
            {[
              { label: "App Name", placeholder: "Max 100 Character" },
              {
                label: "APP Description",
                placeholder: "Max 200 Character",
                type: "textarea",
              },
              { label: "App Categories", placeholder: "Choose Categories" },
              {
                label: "Customer support email address",
                placeholder: "server@defcomm.ng",
              },
              {
                label: "Customers support phone",
                placeholder: "+234 ********43",
              },
              {
                label: "Customers Support Website (Optional)",
                placeholder: "www.defcomm.ng",
              },
            ].map(({ label, placeholder, type }, index) => (
              <div key={index}>
                <label className="block mb-1">{label}</label>
                {type === "textarea" ? (
                  <textarea
                    placeholder={placeholder}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none bg-gray-200"
                    rows={4}
                  />
                ) : (
                  <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none bg-gray-200"
                  />
                )}
              </div>
            ))}

            <div className="flex justify-between items-center">
              <h2 className="font-bold">App New User</h2>
              <p className="flex items-center gap-2 text-sm">
                <TbCircleCheck /> use my default support information
              </p>
            </div>

            <div className="absolute right-6 bottom-6 bg-black w-14 h-14 flex justify-center items-center rounded-4xl text-white">
              <FiArrowRight />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

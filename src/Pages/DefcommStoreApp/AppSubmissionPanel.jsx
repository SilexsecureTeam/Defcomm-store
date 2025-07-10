import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

import start from "../../assets/material-icon-theme_verified.png";
import VectorA from "../../assets/VectorA.png";
import AppSubmissionForm from "./AppSubmissionForm";
import { useNavigate } from "react-router-dom";
import HeaderBarTwo from "./HeaderBarTwo";
import { apps } from "../../utils/dummies";
import HeaderBar from "./HeaderBar";
export default function AppSubmissionPanel() {
  return (
    <div className="p-4 md:p-10 space-y-10">
      <HeaderBar />
      <HeaderBarTwo title="App Submission" link="/store/app/new" />
      <div className="md:flex rounded-[20px] overflow-hidden mt-2">
        {/* Sidebar Icon */}
        <div className="bg-lime-400 p-6 flex-shrink-0 flex justify-center items-center">
          <img src={VectorA} alt="VectorA" className="w-20 md:w-24" />
        </div>

        {/* App Grid */}
        <div className="bg-white flex-1 p-6 md:p-10">
          <h2 className="text-2xl font-bold">Defcomm Store Connect</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 pt-6">
            {apps.map(({ name, img }, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="border border-lime-900 rounded-full h-20 w-20 mx-auto flex items-center justify-center">
                  <img src={img} alt={name} className="w-12" />
                </div>
                <p className="font-semibold text-sm">{name}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
                  <img src={start} alt="status" className="w-4" />
                  <span>DefOS 12.0.0 Ready</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

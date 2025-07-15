import React from "react";
import { useNavigate } from "react-router-dom";
import { TfiArrowRight } from "react-icons/tfi";

// Assets
import VectorA from "../../assets/VectorA.png";
import apps from "../../assets/clarity_vmw-app-outline-badged.png";
import appAnalytic from "../../assets/clarity_analytics-line.png";
import mynaui from "../../assets/mynaui_user-circle-solid.png";

const ArrowButton = () => (
  <div className="bg-black w-12 h-12 flex justify-center items-center rounded-full text-white">
    <TfiArrowRight />
  </div>
);

const LinkRow = ({ icon, label, onClick }) => (
  <div
    className="flex gap-3 items-center mb-3 cursor-pointer hover:underline"
    onClick={onClick}
  >
    <img src={icon} alt={label} className="w-6" />
    <p>{label}</p>
  </div>
);

const ProgramCards = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-[1200px] pb-5">
      <h1 className="text-white text-[30px] md:text-[40px] font-bold py-6">
        Programs Resources
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Store Connect Card */}
        <div className="lg:col-span-2 flex flex-col md:flex-row bg-gray-200 rounded-[20px] overflow-hidden shadow">
          <div className="bg-[#DDF2AB] flex flex-col justify-between items-center p-6 md:w-[160px]">
            <img src={VectorA} alt="icon" className="max-w-[50px] md:pt-10" />
            <div className="mt-6">
              <ArrowButton />
            </div>
          </div>

          <div className="bg-gray-400 flex-1 p-6 text-[15px] flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-[24px] mb-4">
                Defcomm Store Connect
              </h2>
              <LinkRow
                icon={apps}
                label="Apps"
                onClick={() => navigate("/store/apps")}
              />
              <LinkRow icon={appAnalytic} label="App Analytics" />
              <LinkRow icon={mynaui} label="Users and Access" />
            </div>
            <p className="underline text-[18px] mt-6">Get Started</p>
          </div>
        </div>

        {/* Services and Security */}
        <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Services Card */}
          <div className="flex flex-col bg-[#C6FC2B] p-6 rounded-[20px] text-black shadow min-h-40">
            <div className="flex justify-between items-center mb-4">
              <p className="underline text-[18px]">Get Started</p>
              <ArrowButton />
            </div>
            <div className="mt-auto">
              <h2 className="text-[24px] font-semibold mb-2">Services</h2>
              <p>View and manage your usage of developer services.</p>
            </div>
          </div>

          {/* Security Settings Card */}
          <div className="flex flex-col bg-white p-6 rounded-[20px] text-black shadow min-h-40">
            <h2 className="text-[20px] font-semibold mb-6">
              Security Settings
            </h2>
            <div className="mt-auto flex justify-between items-center">
              <p className="underline text-[18px]">Get Started</p>
              <ArrowButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCards;

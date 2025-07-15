import React from "react";
import VectorA from "../../assets/VectorA.png";
import { TfiArrowRight } from "react-icons/tfi";
import apps from "../../assets/clarity_vmw-app-outline-badged.png";
import appanalystic from "../../assets/clarity_analytics-line.png";
import mynaui from "../../assets/mynaui_user-circle-solid.png";
import { useNavigate } from "react-router-dom";

export default function ProgramCards() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-white text-[30px] md:text-[40px] font-bold py-6">
        Programs Resources
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10">
        {/* Card 1 */}
        <div className="lg:col-span-3 flex flex-col md:flex-row bg-gray-200 rounded-[20px] overflow-hidden shadow">
          <div className="bg-[#DDF2AB] flex flex-col justify-between items-center p-6 md:w-[160px]">
            <img src={VectorA} alt="" className="max-w-[50px] md:pt-10" />
            <div className="bg-black w-12 h-12 mt-6 flex justify-center items-center rounded-full text-white">
              <TfiArrowRight />
            </div>
          </div>
          <div className="bg-gray-400 flex-1 p-6 text-[15px] flex flex-col justify-between">
            <div>
              <h2 className="font-bold text-[24px] mb-4">
                Defcomm Store Connect
              </h2>
              <div className="flex gap-3 items-center mb-3 *:cursor-pointer">
                <img src={apps} alt="apps" className="w-6" />
                <button
                  className="hover:underline text-left"
                  onClick={() => navigate("/store/apps")}
                >
                  Apps
                </button>
              </div>
              <div className="flex gap-3 items-center mb-3 *:cursor-pointer">
                <img src={appanalystic} alt="analytics" className="w-6" />
                <p className="hover:underline">App Analytics</p>
              </div>
              <div className="flex gap-3 items-center">
                <img src={mynaui} alt="users" className="w-6" />
                <p className="hover:underline">Users and Access</p>
              </div>
            </div>
            <p className="underline text-[18px] mt-6">Get Started</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="lg:col-span-2 bg-deffcom-lima text-white rounded-[20px] p-6 flex flex-col justify-between shadow">
          <div>
            <h2 className="text-[28px] font-semibold mb-4">
              Certificates, IDs <br /> & Profiles
            </h2>
            <p className="text-[15px] mb-6">
              Manage the certificates, identifiers, profiles, and devices
              required to develop, test, and distribute apps.
            </p>
            <div className="space-y-2 text-sm">
              <div>
                <h3 className="underline">Competitions</h3>
                <p>Create, view and edit competition</p>
              </div>
              <div>
                <h3 className="underline">Game Settings</h3>
                <p>View, modify and add registered games</p>
              </div>
              <div>
                <h3 className="underline">Device List</h3>
                <p>View, modify and add registered devices</p>
              </div>
              <div>
                <h3 className="underline">App Settings</h3>
                <p>View and edit your app settings</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 pt-6">
            <div className="bg-black w-12 h-12 flex justify-center items-center rounded-full text-white">
              <TfiArrowRight />
            </div>
            <p className="underline text-[18px]">Get Started</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="md:col-span-4 lg:col-span-2 flex flex-col md:flex-row lg:flex-col gap-6">
          <div className="flex flex-col bg-[#C6FC2B] p-6 rounded-[20px] text-black shadow min-h-80">
            <div className="flex justify-between items-center mb-4">
              <p className="underline text-[18px]">Get Started</p>
              <div className="bg-black w-12 h-12 flex justify-center items-center rounded-full text-white">
                <TfiArrowRight />
              </div>
            </div>
            <div className="mt-auto">
              <h2 className="text-[24px] font-semibold mb-2">Services</h2>
              <p>View and manage your usage of developer services.</p>
            </div>
          </div>

          <div className="flex flex-col bg-white p-6 rounded-[20px] text-black shadow">
            <h2 className="text-[20px] font-semibold mb-6">
              Security Settings
            </h2>
            <div className="mt-auto flex justify-between items-center">
              <p className="underline text-[18px]">Get Started</p>
              <div className="bg-black w-12 h-12 flex justify-center items-center rounded-full text-white">
                <TfiArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

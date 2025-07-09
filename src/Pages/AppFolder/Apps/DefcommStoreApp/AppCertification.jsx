import React from "react";
import NavTwo from "../../../../Components/Header/NavTwo";
import divOne from "../../../../assets/arcticons_govee-home.png";
import { FaPlus } from "react-icons/fa6";
import VectorA from "../../../../assets/VectorA.png";
import img from "../../../../assets/healthicons_network-5g.png";
import imgone from "../../../../assets/logos_wifi.png";
import imgtwo from "../../../../assets/motorcycle 1.png";
import imgthree from "../../../../assets/streamline_mouse-wireless-1.png";
import imgfour from "../../../../assets/healthicons_network-5g.png";

function AppCertification() {
  return (
    <>
      <NavTwo />
      <div className="bg-deffcom-limagradiant py-10">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 gap-4">
          <div className="w-[100px] md:w-fit p-4 bg-stone-600 border-l-8 border-lime-400">
            <img
              src={divOne}
              alt=""
              className="p-4 md:p-6 rounded-3xl bg-deffcom-lima"
            />
          </div>

          <div
            className="bg-deffcom-lima border-2 border-lime-400 w-14 h-14 flex justify-center items-center rounded-4xl text-white cursor-pointer"
            onClick={() => {}}
          >
            <FaPlus />
          </div>
        </div>

        <div className="px-4 md:px-10 pt-10">
          <div className="flex flex-col md:flex-row">
            {/* Left Icon Panel */}
            <div className="rounded-t-[20px] md:rounded-t-none md:rounded-l-[20px] bg-lime-400 px-6 py-6 md:py-20 flex justify-center items-center md:items-start">
              <img src={VectorA} alt="" className="max-w-[200px]" />
            </div>

            {/* Main Content */}
            <div className="bg-white w-full rounded-b-[20px] md:rounded-r-[20px] md:rounded-l-none px-4 md:px-10 py-10">
              <label className="block text-2xl font-bold mb-4">
                Certificates, Identifiers & Profiles
              </label>

              <p className="font-bold text-lg mb-4">
                Register a Defcomm App ID
              </p>

              {/* Inputs Row */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="text-sm font-bold">Platform</label>
                  <p className="text-xs py-1">
                    iOS, iPadOS, macOS, tvOS, watchOS, visionOS
                  </p>
                  <input
                    type="text"
                    placeholder="Description"
                    className="w-full max-w-[400px] rounded-xl px-4 py-3 bg-gray-200"
                  />
                </div>

                <div className="flex-1">
                  <label className="text-sm font-bold">Defcomm ID Prefix</label>
                  <p className="text-xs py-1">5PL5K96L7W (Team ID)</p>
                  <input
                    type="text"
                    placeholder="com.silexsecure.*"
                    className="w-full max-w-[400px] rounded-xl px-4 py-3 bg-gray-200"
                  />
                </div>
              </div>

              <p className="text-[10px] py-2">
                You can use special characters such as @, &, *, "
              </p>

              {/* Capabilities Section */}
              <div className="mt-8">
                <div className="flex flex-wrap gap-4 items-center">
                  <label className="text-xl font-bold">Capabilities</label>
                  <label className="text-xl font-bold">App Services</label>
                </div>
                <hr className="my-4 border-lime-400 border-2" />

                {/* Header */}
                <div className="flex gap-6 text-gray-400 text-sm font-semibold mb-4">
                  <span className="w-16">Enable</span>
                  <span>Name</span>
                </div>

                {/* Capability List */}
                {[
                  { icon: img, label: "5G Network Slicing" },
                  { icon: imgone, label: "Access Wi-Fi Information" },
                  { icon: imgtwo, label: "Accessibility Merchant API Control" },
                  { icon: imgthree, label: "Wireless Accessory Configuration" },
                  { icon: "", label: "App Attest Opt-In" },
                  { icon: "", label: "SIM Inserted for Wireless Carriers" },
                  { icon: "", label: "Shallow Depth and Pressure" },
                  { icon: "", label: "Sensitive Content Analysis" },
                  { icon: "", label: "Multitasking Camera Access" },
                  { icon: imgfour, label: "Messages Collaboration" },
                ].map(({ icon, label }, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 py-2 text-sm flex-wrap md:flex-nowrap"
                  >
                    <input
                      type="checkbox"
                      className="appearance-none h-5 w-5 rounded-md border border-black bg-white checked:bg-lime-400 cursor-pointer"
                    />
                    <p className="flex items-center gap-2">
                      {icon && <img src={icon} alt="" className="w-5 h-5" />}
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppCertification;

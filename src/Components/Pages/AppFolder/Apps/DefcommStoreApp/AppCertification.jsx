import React from "react";
import NavTwo from "../../../../Header/NavTwo";
import divOne from "../../../../../assets/arcticons_govee-home.png";
import { FaPlus } from "react-icons/fa6";
import VectorA from "../../../../../assets/VectorA.png";
import img from "../../../../../assets/healthicons_network-5g.png";
import imgone from "../.../../../../../../assets/logos_wifi.png";
import imgtwo from "../../../../../assets/motorcycle 1.png";
import imgthree from "../../../../../assets/streamline_mouse-wireless-1.png";
import imgfour from "../../../../../assets/healthicons_network-5g.png";

function AppCertification() {
  return (
    <>
      <NavTwo />
      <div className="bg-deffcom-limagradiant py-30 md:py-20">
        <div className="flex px-4 pt-4 pb-20 items-center justify-between md:px-20 ">
          <div className="w-[100px] md:w-fit p-4 bg-stone-600 border-l-8 border-lime-400">
            <img
              src={divOne}
              alt=""
              className="p-4 md:p-6 rounded-3xl bg-deffcom-lima"
            />
          </div>

          <div
            className={`md:top-64 bg-deffcom-lima border-2 border-lime-400 w-14 h-14 flex justify-center items-center rounded-4xl text-white`}
            onClick={() => navigate("")}
          >
            <FaPlus />
          </div>
        </div>

        <div className="px-4 md:px-10">
          <div className="flex flex-col md:flex-row ">
            <div className="rounded-t-[20px] rounded-r-[0px] md:rounded-l-[20px] py-4 md:py-20 bg-lime-400 px-10 ">
              <img src={VectorA} alt="" className="max-w-[200px]" />
            </div>

            <div className="">
              <div className="relative grid py-20  pb-80 rounded-b-[20px] md:rounded-l-[0px] md:rounded-r-[20px] bg-white w-full px-4 md:px-30">
                <label htmlFor="" className="py-3 text-3xl font-bold">
                  Certificates, Identifiers & Profiles
                </label>

                <p className="font-bold py-4 md:py-10">Register a Defcomm App ID</p>

                <div className="flex flex-col md:flex-row gap-6 md:gap-30">
                  <div>
                    <h1 className="text-[14px] font-bold">Platform</h1>
                    <p className="text-[12px] py-2">
                      iOS, iPadOS, macOS, tvOS, watchOS, visionOS
                    </p>
                    <input
                      type="text"
                      placeholder="Description"
                      className="md:w-[400px] rounded-xl px-3 py-3 bg-gray-200"
                    />
                  </div>

                  <div>
                    <h1 className="text-[14px] font-bold">Defcomm ID Prefix</h1>
                    <p className="text-[12px] py-2">5PL5K96L7W (Team ID)</p>
                    <input
                      type="text"
                      placeholder="com.silexsecure.*"
                      className="md:w-[400px] rounded-xl px-3 py-3 bg-gray-200"
                    />
                  </div>
                </div>

                <p className="text-[10px] py-2">
                  you can use special character such as @, &, *,"
                </p>

                <div className="py-4 ">
                  <div className="flex gap-5">
                    <label htmlFor="" className="py-3 text-xl font-bold">
                      Capabilities
                    </label>
                    <label htmlFor="" className="py-3 text-xl font-bold">
                      App Services
                    </label>
                  </div>
                  <hr className="w-full text-lime-400 border-2 bg-lime-400" />

                  <div className="flex gap-4 text-xl text-gray-400 items-center md:gap-20 py-4">
                    <p>Enable</p>
                    <p>Name</p>
                  </div>

                  <div className="py-3 text-[12px]">
                    <div className="flex items-center gap-14 md:gap-30">
                      <input
                        type="checkbox"
                        className={`appearance-none  text-white py-2 h-5 w-5 rounded-md border border-black  bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer`}
                      />
                      <p className="flex gap-2">
                        <img src={img} alt="" />
                        5G Network Slicing
                      </p>
                    </div>
                  </div>

                  <div className="py-3 text-[12px]">
                    <div className="flex items-center gap-14 md:gap-30">
                      <input
                        type="checkbox"
                        className={`appearance-none  text-white py-2 h-5 w-5 rounded-md border border-black  bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer`}
                      />
                      <p className="flex gap-2">
                        <img src={imgone} alt="" />
                        Access Wi-Fi Information
                      </p>
                    </div>
                  </div>

                  <div className="py-3 text-[12px]">
                    <div className="flex items-center gap-14 md:gap-30">
                      <input
                        type="checkbox"
                        className={`appearance-none  text-white py-2 h-5 w-5 rounded-md border border-black  bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer`}
                      />
                      <p className="flex gap-2">
                        <img src={imgtwo} alt="" />
                        Accessibility Merchant API Control
                      </p>
                    </div>
                  </div>

                  <div className="py-3 text-[12px]">
                    <div className="flex items-center gap-14 md:gap-30">
                      <input
                        type="checkbox"
                        className={`appearance-none  text-white py-2 h-5 w-5 rounded-md border border-black  bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer`}
                      />
                      <p className="flex gap-2">
                        <img src={imgthree} alt="" />
                        Wireless Accessory Configuration
                      </p>
                    </div>
                  </div>

                  <div className="py-3 text-[12px]">
                    <div className="flex items-center gap-14 md:gap-30">
                      <input
                        type="checkbox"
                        className={`appearance-none  text-white py-2 h-5 w-5 rounded-md border border-black  bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer`}
                      />
                      <p className="flex gap-2">
                        <img src="" alt="" />
                        App Attest Opt-In
                      </p>
                    </div>
                  </div>

                  <div className="py-3 text-[12px]">
                    <div className="flex items-center gap-14 md:gap-30">
                      <input
                        type="checkbox"
                        className={`appearance-none  text-white py-2 h-5 w-5 rounded-md border border-black  bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer`}
                      />
                      <p className="flex gap-2">
                        <img src="" alt="" />
                        SIM Inserted for Wireless Carriers
                      </p>
                    </div>
                  </div>

                  <div className="py-3 text-[12px]">
                    <div className="flex items-center gap-14 md:gap-30">
                      <input
                        type="checkbox"
                        className={`appearance-none  text-white py-2 h-5 w-5 rounded-md border border-black  bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer`}
                      />
                      <p className="flex gap-2">
                        <img src="" alt="" />
                        Shallow Depth and Pressure
                      </p>
                    </div>
                  </div>

                  <div className="py-3 text-[12px]">
                    <div className="flex items-center gap-14 md:gap-30">
                      <input
                        type="checkbox"
                        className={`appearance-none  text-white py-2 h-5 w-5 rounded-md border border-black  bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer`}
                      />
                      <p className="flex gap-2">
                        <img src="" alt="" />
                        Sensitive Content Analysis
                      </p>
                    </div>
                  </div>

                  <div className="py-3 text-[12px]">
                    <div className="flex items-center gap-14 md:gap-30">
                      <input
                        type="checkbox"
                        className={`appearance-none  text-white py-2 h-5 w-5 rounded-md border border-black  bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer`}
                      />
                      <p className="flex gap-2">
                        <img src="" alt="" />
                        Multitasking Camera Access
                      </p>
                    </div>
                  </div>

                  <div className="py-3 text-[12px]">
                    <div className="flex items-center gap-14 md:gap-30">
                      <input
                        type="checkbox"
                        className={`appearance-none  text-white py-2 h-5 w-5 rounded-md border border-black  bg-white checked:bg-lime-400 checked:border-transparent focus:outline-none cursor-pointer`}
                      />
                      <p className="flex gap-2">
                        <img src={imgfour} alt="" />
                        Messages Collaboration
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppCertification;

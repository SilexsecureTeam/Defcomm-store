import React from "react";
import Ellipse from "../../assets/Ellipse 3.png";
import Defcomm from "../../assets/Defcomm-02 3 2 8.png";
import Vector9 from "../../assets/Vector (9).png";
import GisArrow from "../../assets/gis_arrow-o (1).png";
import gisarrowo from "../../assets/gis_arrow-o.png";
import { HiMiniArrowSmallRight } from "react-icons/hi2";

function OurService() {
  return (
    <div className="px-4 py-10 md:px-8 w-full max-w-screen-xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-8 mb-10">
        <div className="flex items-center gap-4 md:gap-6">
          <p className="text-4xl md:text-5xl font-bold">02</p>
          <div className="bg-lime-400 text-lg md:text-2xl px-6 md:px-10 py-3 rounded-full">
            Our Services
          </div>
        </div>
        <p className="text-gray-600 text-lg md:text-2xl max-w-xl">
          <span className="font-bold text-black">
            Defcomm Stores is not just an app marketplace;
          </span>{" "}
          it is a fortified digital environment where security comes first.
        </p>
      </div>

      {/* Services Section */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Card 1: Innovation */}
        <div className="flex-1 space-y-4">
          <div className="relative bg-zinc-200 h-72 md:h-96 rounded-3xl overflow-hidden">
            <img
              src={gisarrowo}
              alt="arrow"
              className="absolute left-[20%] top-6 md:top-10 w-10"
            />
            <img
              src={GisArrow}
              alt="arrow"
              className="absolute right-[20%] top-10 md:top-10 w-10"
            />
            <img
              src={Ellipse}
              alt="ellipse"
              className="absolute right-0 left-0 m-auto top-[20%] w-[70%]"
            />
            <img
              src={Ellipse}
              alt="ellipse"
              className="absolute right-0 left-0 m-auto top-[35%] w-[70%]"
            />
            <img
              src={Ellipse}
              alt="ellipse"
              className="absolute right-0 left-0 m-auto top-[50%] w-[70%]"
            />
          </div>
          <h1 className="text-xl md:text-2xl font-bold">Innovation</h1>
          <p className="text-base">
            We’re redefining how secure communication works in the modern,
            hyperconnected world.
          </p>
        </div>

        {/* Card 2: Data & Privacy */}
        <div className="flex-1 space-y-4">
          <div className="flex justify-between items-center px-6 py-4 text-xl font-bold bg-lime-400 rounded-3xl">
            <p>SHARE IT</p>
            <HiMiniArrowSmallRight />
          </div>
          <div className="relative bg-lime-400 h-72 md:h-96 rounded-3xl overflow-hidden">
            <img
              src={Vector9}
              alt="vector"
              className="absolute top-[20%] right-16 w-10"
            />
            <img
              src={Defcomm}
              alt="defcomm"
              className="absolute top-0 right-0 bottom-0 left-0 m-auto w-[70%]"
            />
          </div>
          <h1 className="text-xl md:text-2xl font-bold">Data & Privacy</h1>
          <p className="text-base">
            You have the power to select which data to share and with whom.
          </p>
        </div>

        {/* Card 3: No Data Retention */}
        <div className="flex-1 space-y-4">
          <div className="relative bg-black h-72 md:h-96 rounded-3xl text-white flex items-center justify-center">
            {/* You can tweak these for better visual balance */}
            <div className="absolute bottom-5 left-0 rotate-[20deg] bg-white text-black px-6 py-1 rounded-full text-base md:text-xl">
              CYBER
            </div>
            <div className="absolute bottom-8 left-[20%] rotate-[30deg] bg-white text-black px-6 py-1 rounded-full text-base md:text-xl">
              SECURITY
            </div>
            <div className="absolute bottom-15 left-[30%] rotate-[30deg] bg-white text-black px-6 py-1 rounded-full text-base md:text-xl">
              PRIVACY
            </div>
            <div className="absolute bottom-10 right-15 -rotate-[80deg] bg-white text-black px-6 py-1 rounded-full text-base md:text-xl">
              DATA
            </div>
            <div className="absolute bottom-10 right-0 -rotate-[55deg] bg-white text-black px-6 py-1 rounded-full text-base md:text-xl">
              POINT
            </div>
          </div>
          <h1 className="text-xl md:text-2xl font-bold">
            No Data Retention Policy
          </h1>
          <p className="text-base">
            Defcomm is built with privacy-by-design principles, ensuring every
            interaction and data transaction is protected from interception,
            leaks, or unauthorised access.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurService;

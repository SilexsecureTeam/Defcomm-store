import React from "react";
import { FaPlus } from "react-icons/fa6";
import divOne from "../../../../../assets/arcticons_govee-home.png";
import divTwo from "../../../../../assets/grommet-icons_resources.png";
import divThree from "../../../../../assets/gg_profile.png";
import divFour from "../../../../../assets/Group 5338.png";
import divFive from "../../../../../assets/Vector.png";
import divSix from "../../../../../assets/Vector (1).png";
import divSeven from "../../../../../assets/secure 2.png";
import divEight from "../../../../../assets/icons8-contacts 1.png";

export default function HeaderBar({
  showpage,
  setShowPage,
  setPlayDisplay,
  playDisplay,
  handleClick,
}) {
  return (
    <div className="flex flex-col-reverse gap-8 md:flex-row px-4 pt-18 md:pt-4 md:pb-20 md:justify-between md:px-30 ">
      <div className="flex-shrink-0  w-[100px] md:w-fit p-2 md:p-4 bg-stone-600 border-l-8 border-lime-400">
        <img
          src={divOne}
          alt=""
          className="p-4 md:p-6 rounded-3xl bg-deffcom-lima"
        />
      </div>

      <div className={`flex gap-4 ${showpage ? "block" : "hidden"}`}></div>

      <div
        className={`overflow-x-auto flex gap-1 md:gap-4 ${
          showpage ? "hidden" : "block"
        }`}
      >
        {[divTwo, divThree, divFour, divFive, divSix, divSeven, divEight].map(
          (src, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={src}
                alt=""
                className={`w-[50px] md:w-18 p-4 md:p-6 rounded-3xl ${
                  index === 0 && playDisplay
                    ? "bg-white"
                    : "bg-lime-900/20 transition-all duration-300 ease-in-out cursor-pointer hover:scale-105"
                }`}
                onClick={() => index === 0 && setPlayDisplay((prev) => !prev)}
              />
            </div>
          )
        )}
      </div>

      <div
        className={`flex items-center gap-4 ${showpage ? "block" : "hidden"}`}
      >
        <h1 className="text-[30px] md:text-[40px] text-white">
          Defcomm New App Submission
        </h1>
        <div
          className="bg-deffcom-lima border-2 border-lime-400 w-14 h-14 flex justify-center items-center rounded-4xl text-white"
          onClick={handleClick}
        >
          <FaPlus />
        </div>
      </div>
    </div>
  );
}

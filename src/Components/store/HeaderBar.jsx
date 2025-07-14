import React from "react";
import { FaPlus } from "react-icons/fa6";
import divOne from "../../assets/arcticons_govee-home.png";
import { navItems } from "../../utils/dummies";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function HeaderBar({ showpage }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/appSub");
  };
  return (
    <div className="flex gap-6 items-center justify-between w-[95%] max-w-[1200px] mx-auto">
      <div
        onClick={() => navigate("/store/start")}
        className="cursor-pointer flex items-center justify-center px-4 py-2 w-max h-fit bg-stone-800 border-l-8 border-[#759719] text-white font-semibold text-lg rounded-xl"
      >
        Home
      </div>

      <div className={`flex gap-4 ${showpage ? "block" : "hidden"}`}></div>

      <div
        className={`overflow-x-auto flex items-center min-h-16 gap-1 md:gap-4 ${
          showpage ? "hidden" : "block"
        }`}
      >
        {navItems.map(({ src, path }, index) => (
          <NavLink
            to={`/store${path}`}
            title={path.replaceAll("/", "")}
            key={index}
            className={`flex-shrink-0 flex items-center justify-center h-fit p-4 rounded-xl ${
              index === 0 ? "bg-white" : "bg-lime-900/20"
            } transition-all duration-300 ease-in-out cursor-pointer hover:scale-105`}
          >
            <img src={src} alt="" className="flex-shrink-0 w-6" />
          </NavLink>
        ))}
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

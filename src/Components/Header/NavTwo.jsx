import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdAppRegistration } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { HiBars2 } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import defflogo from "../../assets/defcommlogo.png";
import ProfileDropdown from "../ProfileDropdown";

function NavTwo() {
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg">
      {/* Desktop Navigation */}
      <div className="hidden md:flex text-white justify-between items-center w-[95%] max-w-[1400px] mx-auto h-16">
        {/* Left section */}
        <div className="flex items-center gap-6">
          <NavLink to="/store/start">
            <img src={defflogo} alt="Deffcom Logo" className="w-16 md:w-20" />
          </NavLink>
          <p className="text-lg font-medium">Discover</p>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-[400px] min-w-[180px] flex items-center gap-2 bg-lime-900/40 px-4 rounded-md mx-6 transition-all">
          <CiSearch className="text-white text-xl" />
          <input
            type="text"
            className="w-full h-10 bg-transparent text-white focus:outline-none text-sm"
            placeholder="Search Podcast or Anything..."
            aria-label="Search"
          />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* Full button on medium+ screens, hidden on small screens */}
          <button
            onClick={() => navigate("/store/apply")}
            className="cursor-pointer hidden lg:block bg-[#A4FF00] text-black text-sm font-semibold px-4 py-1.5 rounded-xl hover:bg-[#90e600] transition-all"
          >
            Become a Developer
          </button>

          {/* Icon button on smaller screens */}
          <button
            onClick={() => navigate("/store/apply")}
            className="block lg:hidden text-[#A4FF00] text-2xl hover:text-lime-300 transition"
            title="Apply as Developer"
          >
            <MdAppRegistration />
          </button>

          <ProfileDropdown />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="relative w-full flex items-center justify-between px-4 h-16 md:hidden">
        <NavLink to="/store/start">
          <img src={defflogo} alt="Deffcom Logo" className="w-14" />
        </NavLink>

        <div className="ml-auto mr-4">
          <ProfileDropdown />
        </div>

        <button
          className="text-2xl bg-lime-600 text-white p-2 rounded-full cursor-pointer"
          onClick={() => setDropDown(!dropDown)}
          aria-label="Toggle Menu"
        >
          {dropDown ? <CgClose /> : <HiBars2 />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <ul
        className={`absolute left-0 top-16 w-full md:hidden bg-[#36460A] text-white z-30 backdrop-blur-lg 
          transition-all duration-300 ease-in-out transform origin-top
          ${
            dropDown
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        {[
          { label: "Apps", path: "/store/app" },
          { label: "Data Collection", path: "/store/dataCol" },
          { label: "PPT", path: "/store/PPT" },
          { label: "Publish App", path: "/store/appSub" },
          { label: "Become a Developer", path: "/store/apply" },
        ].map(({ label, path }) => (
          <li
            key={label}
            className="px-6 py-3 hover:bg-[#89AF20] active:bg-[#6e9121] transition-all duration-200 cursor-pointer"
            onClick={() => {
              setDropDown(false);
              navigate(path);
            }}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavTwo;

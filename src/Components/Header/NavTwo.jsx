import React from "react";
import { CiSearch } from "react-icons/ci";
import defflogo from "../../assets/defcommlogo.png";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiBars2 } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import ProfileDropdown from "../ProfileDropdown";

function NavTwo() {
  const [dropDown, setDropDown] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="sticky top-0 left-0 w-full flex justify-between items-center py-4 bg-deffcom-lima z-50 h-16">
      {/* Desktop Navigation */}

      <div className="hidden md:flex px-6 text-white gap-2 justify-between items-center w-[95%] max-w-[1200px] mx-auto">
        <NavLink to="/store/start">
          <img src={defflogo} alt="Deffcom Logo" className="w-20" />
        </NavLink>

        <p className="">Discover</p>

        <div className="flex-1 max-w-96 flex gap-1 bg-lime-900/40 items-center px-4">
          <CiSearch className="text-white" />
          <input
            type="text"
            className="text-sm font-medium px-2 w-full h-10 bg-transparent text-white focus:outline-none"
            placeholder="Search Podcast or Anything..."
            aria-label="Search"
          />
        </div>

        <ProfileDropdown />
      </div>

      {/* Mobile Navigation */}
      <div className="fixed top-0 left-0 w-full flex md:justify-between gap-2 items-center px-4 py-4 md:hidden bg-deffcom-lima z-50 h-16">
        <NavLink to="/store/start">
          <img src={defflogo} alt="Deffcom Logo" className="w-20" />
        </NavLink>

        <div className="ml-auto">
          <ProfileDropdown />
        </div>

        <button
          className="text-[30px]focus:outline-none md:hidden block text-3xl bg-lime-600 text-white p-2 rounded-full cursor-pointer"
          onClick={() => setDropDown(!dropDown)}
          aria-label="Toggle Menu"
        >
          {dropDown ? <CgClose /> : <HiBars2 />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <ul
        className={`md:hidden text-white fixed left-0 top-[75px] w-full bg-deffcom-limagradiant shadow-lg z-30 
        transition-transform duration-300 ease-out 
        ${
          dropDown
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <li
          className="active hover:scale-110 px-10 duration-200 h-12 hover:bg-[#89AF20] cursor-pointer flex gap-1 items-center"
          onClick={() => {
            navigate("/store/app");
          }}
        >
          Apps
        </li>
        <li
          className="active hover:scale-110 px-10 duration-200 h-12 hover:bg-[#89AF20] cursor-pointer flex gap-1 items-center"
          onClick={() => {
            navigate("/store/dataCol");
          }}
        >
          Data Collection
        </li>
        <li
          className="active hover:scale-110 px-10 duration-200 h-12 hover:bg-[#89AF20] cursor-pointer flex gap-1 items-center"
          onClick={() => {
            navigate("/store/PPT");
          }}
        >
          PPT
        </li>
        <li
          className="active hover:scale-110 px-10 duration-200 h-12 hover:bg-[#89AF20] cursor-pointer flex gap-1 items-center"
          onClick={() => {
            navigate("/store/appSub");
          }}
        >
          Publish App
        </li>
      </ul>
    </div>
  );
}

export default NavTwo;

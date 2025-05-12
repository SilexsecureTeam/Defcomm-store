import React from "react";
import { CiSearch } from "react-icons/ci";
import defflogo from "../../assets/defcommlogo.png";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiBars2 } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";

function NavTwo() {
  const [dropDown, setDropDown] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="z-50">
      {/* Desktop Navigation */}

      <div className="hidden md:flex px-6 text-white justify-between items-center bg-deffcom-lima">
        <NavLink to="/">
          <img src={defflogo} alt="Deffcom Logo" className="w-20" />
        </NavLink>

        <p className="">Discover</p>

        <div className="flex gap-1 bg-lime-900/40 items-center px-4 rounded">
          <CiSearch className="text-white" />
          <input
            type="text"
            className="px-2 w-[500px] h-10 bg-transparent text-white focus:outline-none"
            placeholder="Search Podcast or Anything..."
            aria-label="Search"
          />
        </div>

        <div className="flex items-center justify-center gap-6">
          <div className="bg-lime-900/40 h-10 w-10 rounded-full"></div>

          <div className="bg-lime-900/40 flex items-center justify-center h-10 w-10 rounded-full">
            <FaRegBell className="text-white" />
          </div>

          <p>Hello, Natasya</p>

          <div className="flex items-center gap-1 px-2 bg-white p-1 w-20 rounded-3xl text-black">
            <div className="bg-gray-400 h-8 w-8 rounded-full"></div>
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center px-4 py-4 md:hidden bg-deffcom-lima z-50 h-16">
        <NavLink to="/">
          <img src={defflogo} alt="Deffcom Logo" className="w-20" />
        </NavLink>

        <button
          className="text-[30px] text-white focus:outline-none md:hidden block text-3xl bg-lime-600 text-white p-2 rounded-full cursor-pointer"
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
          className="active hover:scale-110 px-10 duration-200 h-12 hover:bg-lime-400 cursor-pointer flex gap-1 items-center"
          onClick={() => {
            navigate("/app");
          }}
        >
          Apps
        </li>
        <li className="active hover:scale-110 px-10 duration-200 h-12 hover:bg-lime-400 cursor-pointer flex gap-1 items-center">
          Discover
        </li>
        <li
          className="active hover:scale-110 px-10 duration-200 h-12 hover:bg-lime-400 cursor-pointer flex gap-1 items-center"
          onClick={() => {
            navigate("/register");
          }}
        >
          Login/Registration
        </li>
      </ul>
    </div>
  );
}

export default NavTwo;

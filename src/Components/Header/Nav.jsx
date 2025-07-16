import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiBars2 } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import { CiMobile1 } from "react-icons/ci";
import { SlScreenTablet } from "react-icons/sl";
import { MdLaptopChromebook, MdOutlineWatch } from "react-icons/md";
import Logo from "../../assets/Defcomm-03 4.png";
import defcomm from "../../assets/Defcomm-02 3 2 8.png";

const navItems = [
  { label: "GAMES", path: "/games" },
  { label: "APP", path: "/app" },
  { label: "BOOKS", path: "/books" },
  { label: "TV", path: "/tv" },
];

function Nav() {
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setDropDown(false); // close dropdown if mobile
    scrollTo(0, 0);
    navigate(path);
  };

  return (
    <>
      {/* Top Nav */}
      <nav className="fixed left-0 top-0 w-full z-50 bg-white shadow-md flex items-center justify-between px-4 md:px-10 py-2">
        {/* Logo Desktop */}
        <NavLink to="/" className="hidden md:flex">
          <img src={Logo} alt="Defcomm Logo" className="w-[200px] h-[50px]" />
        </NavLink>

        {/* Logo Mobile */}
        <NavLink to="/" className="block md:hidden">
          <img
            src={defcomm}
            alt="Defcomm Mobile Logo"
            className="w-[80px] h-[70px]"
          />
        </NavLink>

        {/* Nav Links */}
        <div className="flex gap-4 items-center">
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            {navItems?.map(({ label, path }) => (
              <li
                key={label}
                className="cursor-pointer hover:text-lime-700 transition"
                onClick={() => handleNavigate(path)}
              >
                {label}
              </li>
            ))}
            <li
              className="cursor-pointer font-semibold hover:text-lime-700 transition"
              onClick={() => handleNavigate("/membership/individual")}
            >
              LOGIN/REGISTER
            </li>
          </ul>

          {/* Icon for large screen (future use) */}
          <div className="hidden md:flex text-3xl bg-lime-600 text-white p-1 rounded-full cursor-pointer">
            <HiBars2 />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle mobile menu"
            onClick={() => setDropDown((prev) => !prev)}
            className="md:hidden text-3xl bg-lime-600 text-white p-2 rounded-full"
          >
            {dropDown ? <CgClose /> : <HiBars2 />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute left-0 top-[75px] w-full bg-white z-40 shadow-lg transition-all duration-300 ease-in-out
          ${
            dropDown
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 opacity-0 pointer-events-none"
          }
        `}
      >
        <ul className="flex flex-col gap-3 py-4 text-sm font-medium">
          <li
            onClick={() => handleNavigate("/app")}
            className="flex items-center gap-2 px-6 py-3 hover:bg-gray-100 transition cursor-pointer"
          >
            <CiMobile1 className="text-xl" /> MOBILE PHONE
          </li>
          <li
            onClick={() => handleNavigate("/app")}
            className="flex items-center gap-2 px-6 py-3 hover:bg-gray-100 transition cursor-pointer"
          >
            <SlScreenTablet className="text-xl" /> TABLET
          </li>
          <li
            onClick={() => handleNavigate("/app")}
            className="flex items-center gap-2 px-6 py-3 hover:bg-gray-100 transition cursor-pointer"
          >
            <MdLaptopChromebook className="text-xl" /> DEFCOM-PC
          </li>
          <li
            onClick={() => handleNavigate("/app")}
            className="flex items-center gap-2 px-6 py-3 hover:bg-gray-100 transition cursor-pointer"
          >
            <MdOutlineWatch className="text-xl" /> WATCH
          </li>
          <li
            onClick={() => handleNavigate("/membership/individual")}
            className="flex items-center gap-2 px-6 py-3 font-semibold hover:bg-gray-100 transition cursor-pointer"
          >
            LOGIN / REGISTER
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;

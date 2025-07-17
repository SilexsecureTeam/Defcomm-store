import React from "react";
import { FaPlus } from "react-icons/fa6";
import divOne from "../../assets/arcticons_govee-home.png";
import { navItems } from "../../utils/dummies";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function HeaderBar({ showpage }) {
  const navigate = useNavigate();
  const { authDetails } = useContext(AuthContext);
  const handleClick = () => {
    navigate("/appSub");
  };
  return (
    <div className="flex gap-6 md:flex-row items-center justify-between w-[95%] max-w-[1200px] mx-auto my-10">
      <NavLink
        to="/store/start"
        className="cursor-pointer flex items-center justify-center px-4 py-2 w-max h-fit bg-stone-600 [.active]:bg-stone-800 border-l-8 border-[#759719] text-white font-semibold text-lg rounded-xl"
      >
        Home
      </NavLink>

      <div className={`flex gap-4 ${showpage ? "block" : "hidden"}`}></div>

      <div
        className={`overflow-x-auto flex items-center min-h-16 gap-1 md:gap-4 ${
          showpage ? "hidden" : "block"
        }`}
      >
        {navItems
          .filter(({ path }) => {
            // Exclude "/app/publish" if statusApp is NOT "pending" or "approved"
            if (path === "/app/publish" && !authDetails?.user?.statusApp) {
              return false;
            }
            return true;
          })
          .map(({ icon: Icon, path }, index) => (
            <NavLink
              to={`/store${path}`}
              title={path.replaceAll("/", "")}
              key={index}
              className={`group flex-shrink-0 flex items-center justify-center h-fit p-4 rounded-xl bg-lime-900/50 transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 [&.active]:bg-white`}
            >
              <Icon className="text-white text-2xl transition duration-300 ease-in-out group-[.active]:text-black" />
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

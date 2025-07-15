import React from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HeaderBarTwo = ({ title = "", link = "" }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center py-3 pb-5 max-w-[1200px] mx-auto">
      <h1 className="text-white text-2xl md:text-3xl font-semibold">
        {title || " "}
      </h1>
      {link && (
        <button
          className="cursor-pointer bg-deffcom-lima border-2 border-lime-400 w-12 h-12 flex justify-center items-center rounded-full text-white"
          onClick={() => navigate(link)}
        >
          <FaPlus />
        </button>
      )}
    </div>
  );
};

export default HeaderBarTwo;

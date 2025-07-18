import React from "react";
import start from "../../../assets/material-icon-theme_verified.png";
import Bullet from "../../../assets/Armour (1) 1.png";
import { useNavigate } from "react-router-dom";

const AppGrid = ({ apps }) => {
  const navigate = useNavigate();
  if (!apps?.length) {
    return (
      <div className="col-span-full text-center text-gray-500 py-8">
        No apps found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {apps.map(({ id, app_name, app_icon, os, version, status }, index) => (
        <div
          onClick={() => navigate(`/store/app/${id}`)}
          key={index}
          className="cursor-pointer text-center space-y-2"
        >
          <div className="border border-lime-900 rounded-full h-20 w-20 mx-auto flex items-center justify-center">
            <img src={Bullet} alt={app_name} className="w-12" />
          </div>
          <p className="font-semibold text-sm truncate">{app_name}</p>
          <div className="flex items-start justify-center gap-1 text-xs text-gray-600">
            {status !== "approved" && (
              <img src={start} alt="status" className="w-6" />
            )}
            <span className="truncate">
              {os || "DefOS"} {version || "12.0.0"} Ready
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppGrid;

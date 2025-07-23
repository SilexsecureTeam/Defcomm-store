import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaPlayCircle,
  FaTimesCircle,
  FaBan,
  FaLock,
  FaClock,
} from "react-icons/fa";
import Bullet from "../../../assets/Armour (1) 1.png";

const AppGrid = ({ apps }) => {
  const navigate = useNavigate();

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case "approved":
        return (
          <div className="flex items-center gap-1 text-green-500">
            <FaCheckCircle className="w-4 h-4" />
          </div>
        );
      case "active":
        return (
          <div className="flex items-center gap-1 text-lime-500">
            <FaPlayCircle className="w-4 h-4" />
            <span className="text-xs">Live</span>
          </div>
        );
      case "pending":
        return (
          <div className="flex items-center gap-1 text-yellow-500">
            <FaClock className="w-4 h-4" />
          </div>
        );
      case "reject":
        return (
          <div className="flex items-center gap-1 text-red-500">
            <FaTimesCircle className="w-4 h-4" />
          </div>
        );
      case "block":
        return (
          <div className="flex items-center gap-1 text-yellow-500">
            <FaBan className="w-4 h-4" />
          </div>
        );
      case "disable":
        return (
          <div className="flex items-center gap-1 text-gray-500">
            <FaLock className="w-4 h-4" />
          </div>
        );
      default:
        return null;
    }
  };

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
          onClick={() => {
            scrollTo(0, 0);
            navigate(`/store/app/${id}`);
          }}
          key={index}
          className="cursor-pointer text-center space-y-2"
        >
          <div className="border border-lime-900 rounded-full h-20 w-20 mx-auto flex items-center justify-center">
            <img src={Bullet} alt={app_name} className="w-12" />
          </div>
          <p className="font-semibold text-sm truncate">{app_name}</p>
          <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
            {getStatusIcon(status)}
            <span className="truncate">
              • {os || "DefOS"} {version || "12.0.0"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppGrid;

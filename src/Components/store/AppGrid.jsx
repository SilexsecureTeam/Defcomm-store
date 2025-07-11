import React from "react";
import start from "../../assets/material-icon-theme_verified.png";
import Bullet from "../../assets/Armour (1) 1.png";

const AppGrid = ({ apps }) => {
  if (!apps?.length) {
    return (
      <div className="col-span-full text-center text-gray-500 py-8">
        No apps found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {apps.map(({ name, img }, index) => (
        <div key={index} className="text-center space-y-2">
          <div className="border border-lime-900 rounded-full h-20 w-20 mx-auto flex items-center justify-center">
            <img src={img || Bullet} alt={name} className="w-12" />
          </div>
          <p className="font-semibold text-sm">{name}</p>
          <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
            <img src={start} alt="status" className="w-4" />
            <span>DefOS 12.0.0 Ready</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppGrid;

import React from "react";
import { Outlet } from "react-router-dom";
import NavTwo from "../Components/Header/NavTwo";

function StoreLayout() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        background: `linear-gradient(to bottom, #36460A 10%, #000000 40%)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <NavTwo />
      <main className="flex-grow w-[95%] max-w-[1400px] mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default StoreLayout;

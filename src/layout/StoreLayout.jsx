import React from "react";
import { Outlet } from "react-router-dom";
import NavTwo from "../Components/Header/NavTwo";
import HeaderBar from "../Components/store/HeaderBar";

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
      <HeaderBar />
      <main className="flex-grow w-[95%] max-w-[1200px] mx-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default StoreLayout;

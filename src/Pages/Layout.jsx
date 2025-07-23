import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/FooterCom.jsx";
import Nav from "../Components/Header/Nav";
import FAQ from "../Components/Content/FAQ.jsx";
import WhyUs from "../Components/Content/WhyUs.jsx";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow mt-16">
        <Outlet />
      </main>
      <WhyUs />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Layout;

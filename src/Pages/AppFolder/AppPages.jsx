import React from "react";
import Project from "../../Components/Content/Project";
import Offer from "../../Components/Content/Offer";
import Home from "../../Components/Content/Home";
import FAQ from "../../Components/Content/FAQ";

function AppPages() {
  return (
    <div>
      <Home />
      <Project />
      <Offer />
      {/* <FAQ /> */}
    </div>
  );
}

export default AppPages;

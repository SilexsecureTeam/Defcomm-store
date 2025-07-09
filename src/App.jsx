import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        autoClose={2000}
        draggable
        className="z-[100000000000000000] mt-2"
      />
    </>
  );
}

export default App;

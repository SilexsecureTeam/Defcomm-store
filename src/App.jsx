import React from "react";
import RouterWithSuspense from "./routes"; // this is the Suspense-wrapped component
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterWithSuspense /> {/* Already includes <RouterProvider> */}
      <ToastContainer
        autoClose={2000}
        draggable
        className="z-[100000000000000000] mt-2"
      />
    </>
  );
}

export default App;

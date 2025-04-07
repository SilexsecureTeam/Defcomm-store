import React from 'react';
import HomePages from './Components/Content/HomePages.jsx';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Components/Pages/Layout.jsx";
import AppPages from './Components/Pages/AppFolder/AppPages.jsx';
import MedicalApp from './Components/Pages/AppFolder/Apps/Medical/MedicalApp.jsx';
import PPT from './Components/Pages/AppFolder/Apps/Medical/DownloadMedicalApps/PPT.jsx';
import LoginPage from './Components/Auth/Login.jsx';
import RegisterPage from './Components/Auth/Register.jsx';

function App() {
  // new version of react router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Routes with Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePages />} />
          <Route path="app" element={<AppPages />} />
          <Route path="medical" element={<MedicalApp />} />
          <Route path="PPT" element={<PPT />} />
        </Route>

        {/* Routes without Layout */}
        <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
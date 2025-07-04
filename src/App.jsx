import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Layouts
import Layout from "./Components/Pages/Layout.jsx";

// Pages
import HomePages from "./Components/Content/HomePages.jsx";
import AppPages from "./Components/Pages/AppFolder/AppPages.jsx";
import MedicalApp from "./Components/Pages/AppFolder/Apps/Medical/MedicalApp.jsx";
import PPT from "./Components/Pages/AppFolder/Apps/Medical/DownloadMedicalApps/PPT.jsx";
import Login from "./Components/Pages/LoginFolder/Login.jsx";
import Membership from "./Components/Pages/LoginFolder/Membership.jsx";

// Footer pages
import Privacy from "./Components/Footer/Privacy.jsx";
import TermofUse from "./Components/Footer/TermofUse.jsx";
import DevAgreement from "./Components/Footer/DevAgreement.jsx";

// DefcommStoreApp Pages
import ProgramResources from "./Components/Pages/AppFolder/Apps/DefcommStoreApp/ProgramResources.jsx";
import AppSubmission from "./Components/Pages/AppFolder/Apps/DefcommStoreApp/AppSubmission.jsx";
import DataCollection from "./Components/Pages/AppFolder/Apps/DefcommStoreApp/DataCol.jsx";
import AppCertification from "./Components/Pages/AppFolder/Apps/DefcommStoreApp/AppCertification.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePages />} />
          <Route path="app" element={<AppPages />} />
        </Route>

        {/* Standalone Routes */}
        <Route path="medical" element={<MedicalApp />} />
        <Route path="PPT" element={<PPT />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Membership />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="termofuse" element={<TermofUse />} />
        <Route path="devagreement" element={<DevAgreement />} />
        <Route path="start" element={<ProgramResources />} />
        <Route path="appSub" element={<AppSubmission />} />
        <Route path="dataCol" element={<DataCollection />} />
        <Route path="appCert" element={<AppCertification />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

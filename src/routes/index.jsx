import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "../Components/Pages/Layout";

// Route Guards
import PublicRoute from "./PublicRoute";
import AppRoute from "./AppRoute";

// Pages
import HomePages from "../Components/Content/HomePages";
import AppPages from "../Components/Pages/AppFolder/AppPages";
import MedicalApp from "../Components/Pages/AppFolder/Apps/Medical/MedicalApp";
import PPT from "../Components/Pages/AppFolder/Apps/Medical/DownloadMedicalApps/PPT";
import Login from "../Components/Pages/LoginFolder/Login";
import Membership from "../Components/Pages/LoginFolder/Membership";

// Footer pages
import Privacy from "../Components/Footer/Privacy";
import TermofUse from "../Components/Footer/TermofUse";
import DevAgreement from "../Components/Footer/DevAgreement";

// DefcommStoreApp Pages
import ProgramResources from "../Components/Pages/AppFolder/Apps/DefcommStoreApp/ProgramResources";
import AppSubmission from "../Components/Pages/AppFolder/Apps/DefcommStoreApp/AppSubmission";
import DataCollection from "../Components/Pages/AppFolder/Apps/DefcommStoreApp/DataCol";
import AppCertification from "../Components/Pages/AppFolder/Apps/DefcommStoreApp/AppCertification";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Layout Pages */}

      {/* Public-Only Routes */}
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePages />} />
          <Route path="app" element={<AppPages />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Membership />} />
      </Route>

      {/* Protected App Routes */}
      <Route element={<AppRoute />}>
        <Route path="medical" element={<MedicalApp />} />
        <Route path="PPT" element={<PPT />} />
        <Route path="start" element={<ProgramResources />} />
        <Route path="appSub" element={<AppSubmission />} />
        <Route path="dataCol" element={<DataCollection />} />
        <Route path="appCert" element={<AppCertification />} />
      </Route>

      {/* Always Public */}
      <Route path="privacy" element={<Privacy />} />
      <Route path="termofuse" element={<TermofUse />} />
      <Route path="devagreement" element={<DevAgreement />} />
    </>
  )
);

export default router;

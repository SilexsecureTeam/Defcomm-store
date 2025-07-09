import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider, // ✅ you need this!
} from "react-router-dom";

// Layout & Guards
import Layout from "../Pages/Layout";
import PublicRoute from "./PublicRoute";
import AppRoute from "./AppRoute";
import Fallback from "../Components/Fallback";

// Lazy-loaded Pages
const HomePages = lazy(() => import("../Components/Content/HomePages"));
const AppPages = lazy(() => import("../Pages/AppPages"));
const MedicalApp = lazy(() => import("../Pages/MedicalApp"));
const PPT = lazy(() => import("../Pages/DownloadMedicalApps/PPT"));
const Login = lazy(() => import("../Pages/LoginFolder/Login"));
const Membership = lazy(() => import("../Pages/LoginFolder/Membership"));

const Privacy = lazy(() => import("../Components/Footer/Privacy"));
const TermofUse = lazy(() => import("../Components/Footer/TermofUse"));
const DevAgreement = lazy(() => import("../Components/Footer/DevAgreement"));

const ProgramResources = lazy(() =>
  import("../Pages/DefcommStoreApp/ProgramResources")
);
const AppSubmission = lazy(() =>
  import("../Pages/DefcommStoreApp/AppSubmission")
);
const DataCollection = lazy(() => import("../Pages/DefcommStoreApp/DataCol"));
const AppCertification = lazy(() =>
  import("../Pages/DefcommStoreApp/AppCertification")
);
const AppSubmissionPanel = lazy(() =>
  import("../Pages/DefcommStoreApp/AppSubmissionPanel")
);
const ComingSoon = lazy(() => import("../Pages/ComingSoon"));

// Route config
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public */}
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePages />} />
          <Route path="/app" element={<AppPages />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Membership />} />
      </Route>

      {/* Protected */}
      <Route path="/store/" element={<AppRoute />}>
        <Route path="medical" element={<MedicalApp />} />
        <Route path="PPT" element={<PPT />} />
        <Route path="start" element={<ProgramResources />} />
        <Route path="apps" element={<AppSubmissionPanel />} />
        <Route path="appSub" element={<AppSubmission />} />
        <Route path="dataCol" element={<DataCollection />} />
        <Route path="appCert" element={<AppCertification />} />
      </Route>

      {/* Public Footer */}
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/termofuse" element={<TermofUse />} />
      <Route path="/devagreement" element={<DevAgreement />} />
      <Route path="/*" element={<ComingSoon />} />
    </>
  )
);

// Default export for App.jsx
const RouterWithSuspense = () => (
  <Suspense fallback={<Fallback />}>
    <RouterProvider router={router} />
  </Suspense>
);

export default RouterWithSuspense;

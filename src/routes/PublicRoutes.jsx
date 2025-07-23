// src/routes/PublicRoutes.jsx
import React, { useContext } from "react";
import { lazy } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import Layout from "../Pages/Layout";
import { AuthContext } from "../context/AuthContext";
import Nav from "../Components/Header/Nav";

// Inline guard (no separate component)
const PublicGuard = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? (
    <Navigate to="/store/start" />
  ) : (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

// Lazy-loaded pages
const HomePages = lazy(() => import("../Components/Content/HomePages"));
const AppPages = lazy(() => import("../Pages/AppPages"));
const Membership = lazy(() => import("../Pages/LoginFolder/Membership"));
const Privacy = lazy(() => import("../Components/Footer/Privacy"));
const TermofUse = lazy(() => import("../Components/Footer/TermofUse"));
const DevAgreement = lazy(() => import("../Components/Footer/DevAgreement"));
const ComingSoon = lazy(() => import("../Pages/ComingSoon"));
const AppViewPage = lazy(() => import("../Pages/DefcommStoreApp/AppViewPage"));

const PublicRoutes = (
  <Route element={<PublicGuard />}>
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePages />} />
      <Route path="apps" element={<AppPages />} />
      <Route path="/apps/:category" element={<AppViewPage />} />
    </Route>

    <Route path="/membership/:userType" element={<Membership />} />
    <Route path="/membership/:userType/:authTab" element={<Membership />} />

    <Route path="/privacy" element={<Privacy />} />
    <Route path="/termofuse" element={<TermofUse />} />
    <Route path="/devagreement" element={<DevAgreement />} />
    <Route path="/*" element={<ComingSoon />} />
  </Route>
);

export default PublicRoutes;

import React, { useContext } from "react";
import { lazy } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import StoreLayout from "../layout/StoreLayout"; // ✅ import your layout

// Inline guard
const AppGuard = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

// Lazy-loaded store pages
const MedicalApp = lazy(() => import("../Pages/MedicalApp"));
const PPT = lazy(() => import("../Pages/DownloadMedicalApps/PPT"));
const ProgramResources = lazy(() =>
  import("../Pages/DefcommStoreApp/ProgramResources")
);

const MyApps = lazy(() => import("../Pages/DefcommStoreApp/MyApps"));
const AppViewPage = lazy(() => import("../Pages/DefcommStoreApp/AppViewPage"));
const ComingSoon = lazy(() => import("../Pages/ComingSoon"));
const AppSubmissionForm = lazy(() =>
  import("../Pages/DefcommStoreApp/AppSubmissionForm")
);
const DeveloperApplicationForm = lazy(() =>
  import("../Pages/DeveloperApplicationForm")
);
const Profile = lazy(() => import("../Pages/Profile"));

const AppRoutes = (
  <Route element={<AppGuard />}>
    <Route path="/store" element={<StoreLayout />}>
      <Route path="medical" element={<MedicalApp />} />
      <Route path="start" element={<ProgramResources />} />
      <Route index element={<Navigate to="/store/start" replace />} />

      {/* App */}
      <Route path="apps" element={<MyApps />} />
      <Route path="app/:id" element={<AppViewPage />} />

      <Route path="app/publish" element={<AppSubmissionForm />} />

      <Route path="apply" element={<DeveloperApplicationForm />} />

      <Route path="profile" element={<Profile />} />

      {/* Fallback route */}
      <Route path="*" element={<ComingSoon />} />
    </Route>
  </Route>
);

export default AppRoutes;

import React, { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Fallback from "../Components/Fallback";
import PublicRoutes from "./PublicRoutes";
import AppRoutes from "./AppRoutes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {PublicRoutes}
      {AppRoutes}
    </>
  )
);

const RouterWithSuspense = () => (
  <Suspense fallback={<Fallback />}>
    <RouterProvider router={router} />
  </Suspense>
);

export default RouterWithSuspense;

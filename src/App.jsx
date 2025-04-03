import React from 'react'
import HomePages from './Components/Content/HomePages.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Components/Pages/Layout.jsx";
import AppPages from './Components/Pages/AppFolder/AppPages.jsx'
import MedicalApp from './Components/Pages/AppFolder/Apps/Medical/MedicalApp.jsx';
import PPT from './Components/Pages/AppFolder/Apps/Medical/DownloadMedicalApps/PPT.jsx';



function App() {

  // new version of react router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
          <Route index element={<HomePages />} />
          <Route path="app" element={<AppPages />} />
          <Route path="medical" element={<MedicalApp />} />
          <Route path="PPT" element={<PPT/>}/>
      </Route>
    )
  )
  return (
    
    <>
    
      <RouterProvider router={router}/>
    {/* Old version of react router
    <Router>
      <Routes>
        Wrap all pages inside Layout
        <Route >
          <Route index element={<HomePages />} />
          <Route path="/app" element={<AppPages />} />
        </Route>
      </Routes>
    </Router> */}
    </>
  )
}

export default App


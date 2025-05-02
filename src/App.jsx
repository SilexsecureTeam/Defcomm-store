import React from 'react'
import HomePages from './Components/Content/HomePages.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Components/Pages/Layout.jsx";
import AppPages from './Components/Pages/AppFolder/AppPages.jsx'
import MedicalApp from './Components/Pages/AppFolder/Apps/Medical/MedicalApp.jsx';
import PPT from './Components/Pages/AppFolder/Apps/Medical/DownloadMedicalApps/PPT.jsx';
import Login from './Components/Pages/LoginFolder/Login.jsx';
import Membership from './Components/Pages/LoginFolder/Membership.jsx';
import Privacy from './Components/Footer/Privacy.jsx';
import TermofUse from './Components/Footer/TermofUse.jsx';
import DevAgreement from './Components/Footer/DevAgreement.jsx';
import Discover from './Components/Content/Discover.jsx';


function App() {

  // new version of react router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePages />} />
            <Route path='/app'  element={<AppPages />}/> 
        </Route>

        <Route path="PPT" element={<PPT/>}/>
        <Route  path="medical" element={<MedicalApp />}  />
        
        <Route path='/login' element={<Login/>} />
        <Route path="/register" element={<Membership />}/>
        <Route path="/privacy" element={<Privacy />}/>
        <Route path="/termofuse" element={<TermofUse />}/>
        <Route path='/devagreement' element={<DevAgreement />} />
        <Route path='/start' element={<Discover/>} />
        
          
      
        
        
      </>
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


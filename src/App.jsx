import React from 'react';
import { Route,  Routes, } from "react-router-dom";
import AppPages from './Components/Pages/AppFolder/AppPages.jsx';
import MedicalApp from './Components/Pages/AppFolder/Apps/Medical/MedicalApp.jsx';
import PPT from './Components/Pages/AppFolder/Apps/Medical/DownloadMedicalApps/PPT.jsx';
import LoginPage from './Components/Auth/Login.jsx';
import RegisterPage from './Components/Auth/Register.jsx';
import Home from './Components/Content/Home/Home.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="app" element={<AppPages />} />
        <Route path="medical" element={<MedicalApp />} />
        <Route path="PPT" element={<PPT />} />

        {/* Routes without Layout */}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
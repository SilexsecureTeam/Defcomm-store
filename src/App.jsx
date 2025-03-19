import React from 'react'
import HomePages from './Components/Content/HomePages.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Pages/Layout.jsx";
import AppPages from './Components/Pages/AppPages.jsx'



function App() {
  return (
    <>
      

    <Router>
      <Routes>
        {/* Wrap all pages inside Layout */}
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePages />} />
            <Route path="app" element={<AppPages />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App


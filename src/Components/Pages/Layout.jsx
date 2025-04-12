import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from "../Footer/FooterCom.jsx"
import Nav from "../Header/Nav"
import FAQ from '../Content/FAQ.jsx';
import WhyUs from '../Content/WhyUs.jsx';


function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
        <Nav />
            <main className="flex-grow ">
            <Outlet />  
            </main>
        <WhyUs />
        <FAQ />
        <Footer />
      </div>
    )
}

export default Layout

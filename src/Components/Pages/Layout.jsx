import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from "../Footer/FooterCom.jsx"
import Nav from "../Header/Nav"


function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
        <Nav />
            <main className="flex-grow p-4">
            <Outlet />  
            </main>
        <Footer />
      </div>
    )
}

export default Layout

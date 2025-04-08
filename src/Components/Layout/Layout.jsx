import React from 'react'
import Footer from "./Footer/FooterCom.jsx"
import Nav from "./Header/Nav.jsx"



function Layout({children}) {
    return (
        <div className="flex flex-col min-h-screen">
        <Nav />
            <main className="flex-grow ">
                {children}
            </main>
        <Footer />
      </div>
    )
}

export default Layout

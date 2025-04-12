import React from 'react'
import Project from "../../Content/Project"
import Offer from "../../Content/Offer"
import Home from '../../Content/Home'
import FAQ from '../../Content/FAQ'


function AppPages() {
    return (
        <div>
            <Home />
            <Project />
            <Offer />
            {/* <FAQ /> */}
        </div>
    )
}

export default AppPages

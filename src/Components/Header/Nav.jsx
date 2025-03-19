import React from 'react'
import { HiBars2 } from "react-icons/hi2";
import Logo from "../../assets/Defcomm-03 4.png"



function Nav() {
    return (
        <div className='fixed left-0 top-0 w-full z-10 bg-white/90 mx-10 flex items-center justify-between  px-10 py-2'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className='flex gap-6 items-center'>
                <ul className='flex gap-4 text-lg'>
                    <li>Games</li>
                    <li>App</li>
                    <li>Books</li>
                    <li>TV</li>
                </ul>
                <div className='text-3xl bg-lime-600 text-white p-1 rounded-[50px]'>
                <HiBars2 />
                </div>
            </div>
        </div>
    )
}

export default Nav

import React from 'react'
import { HiBars2 } from "react-icons/hi2";
import Logo from "../../assets/Defcomm-03 4.png"
import { NavLink } from 'react-router-dom';
import { useState } from "react"

function Nav() {

    
    return (
        <div className='fixed left-0 top-0 w-full z-10 bg-white  flex items-center justify-between  px-14 py-2'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className='flex gap-4 items-center'>
                <ul className='flex gap-4 text-lg'>
                    <NavLink><li>Games</li></NavLink>
                    <NavLink to="app"><li>App</li></NavLink>
                    <NavLink><li>Books</li></NavLink>
                    <NavLink><li>TV</li></NavLink>
                </ul>
                <div className='hidden md:flex text-3xl bg-lime-600 text-white p-1 rounded-[50px]'>
                <HiBars2 />
                </div>
                <div className='text-3xl bg-lime-600 text-white p-1 rounded-[50px]'>
                <HiBars2 />
                </div>
            </div>


            {/* <ul className='md:hidden flex gap-3 text-xs'>
                                <li className='active cursor-pointer flex gap-1 items-center'>
                                    <p className='text-xl'><CiMobile1 /></p>
                                    MOBILE PHONE
                                </li>
            
                                <li className='active flex gap-1 cursor-pointer items-center'>
                                <p className='text-lg'><SlScreenTablet /></p>
                                    TABLET
                                </li>
            
                                <li className='active flex gap-1 cursor-pointer items-center'>
                                <p className='text-xl'><MdLaptopChromebook /></p>
                                    DEFCOM-PC
                                </li>
            
                                <li className='active flex gap-1 cursor-pointer items-center'>
                                <p className='text-xl'><MdOutlineWatch /></p>
                                    WATCH
                                </li>
                            </ul> */}
        </div>
    )
}

export default Nav

import React from 'react'
import { HiBars2 } from "react-icons/hi2";
import Logo from "../../assets/Defcomm-03 4.png"
import { Link, NavLink } from 'react-router-dom';
import { CgClose } from "react-icons/cg";
import { useState } from "react"
import { CiMobile1 } from "react-icons/ci";
import { SlScreenTablet } from "react-icons/sl";
import { MdLaptopChromebook } from "react-icons/md";
import { MdOutlineWatch } from "react-icons/md";
import defcomm from "../../assets/Defcomm-02 3 2 8.png"


function Nav() {

    const [dropDown, setDropDown] = useState(false)
    
    
    
    return (
        <>
            <div className='fixed left-0 top-0 w-full z-10 bg-white  flex items-center justify-between  px-4 md:px-10 md:py-2'>
                <NavLink to="">
                    <div className='hidden md:flex'>
                        <img src={Logo} alt="" />
                    </div>
                </NavLink> 

                
                    <div className='block md:hidden '>
                        <img src={defcomm} alt="" className='w-[80px]'/>
                    </div>
                 

                <div className='flex gap-4 items-center'>
                    <ul className='flex gap-4 text-sm'>
                        <NavLink to="app"><li >GAMES</li></NavLink>
                        <NavLink to="app"><li>APP</li></NavLink>
                        <NavLink to="app"><li>BOOKS</li></NavLink>
                        <NavLink to="app"><li>TV</li></NavLink>
                        <NavLink to="login"><li className='font-bold hidden md:block'>LOGIN/REGISTER</li></NavLink>
                    </ul>
                    <div className='hidden md:flex text-3xl bg-lime-600 text-white p-1 rounded-[50px]'>
                    <HiBars2 />
                    </div>
                    <div 
                    onClick={() => {setDropDown(!dropDown)}} 
                    className='md:hidden block text-3xl bg-lime-600 text-white p-2 rounded-full cursor-pointer'>
                    {dropDown ? <CgClose /> : <HiBars2 />}
                    </div>
                </div>
            </div>

            
            <div className={`md:hidden fixed left-0 top-[70px] w-full bg-white shadow-lg z-30 
                transition-transform duration-300 ease-out 
                ${dropDown ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}`}>
                
                <ul className="grid gap-3 text-md ">
                    <li className="active hover:scale-110 px-10 duration-200 h-12 hover:bg-gray-200 cursor-pointer flex gap-1 items-center">
                        <p className="text-2xl"><CiMobile1 /></p> MOBILE PHONE
                    </li>
                    <li className="active hover:scale-110 px-10 duration-200  h-12 hover:bg-gray-200 flex gap-1 cursor-pointer items-center">
                        <p className="text-lg"><SlScreenTablet /></p> TABLET
                    </li>
                    <li className="active hover:scale-110 px-10 duration-200  h-12 hover:bg-gray-200 flex gap-1 cursor-pointer items-center">
                        <p className="text-2xl"><MdLaptopChromebook /></p> DEFCOM-PC
                    </li>
                    <li className="active hover:scale-110 px-10 duration-200 h-12 hover:bg-gray-200 flex gap-1 cursor-pointer items-center">
                        <p className="text-2xl"><MdOutlineWatch /></p> WATCH
                    </li>
                    {/* <NavLink><li className='font-bold active hover:scale-110 px-10 duration-200 h-12 hover:bg-gray-200 flex gap-1 cursor-pointer items-center '>LOGIN/REGISTER</li></NavLink> */}
                    <Link to="/login"><li className='font-bold active hover:scale-110 px-10 duration-200 h-12 hover:bg-gray-200 flex gap-1 cursor-pointer items-center '>LOGIN/REGISTER</li></Link>
                </ul>
            </div>

        </>
    )
}

export default Nav

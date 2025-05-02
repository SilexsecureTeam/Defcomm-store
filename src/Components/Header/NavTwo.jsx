import React from 'react'
import { CiSearch } from "react-icons/ci"
import defflogo from "../../assets/defcommlogo.png"
import { FaRegBell } from "react-icons/fa"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function NavTwo() {
  return (
    <div className=' px-6 text-white flex justify-between items-center bg-deffcom-lima'>
      <img src={defflogo} alt="" className='w-20 '/>
      <p className=''>Discover</p>
      <div className='flex gap-1 bg-lime-900/40 items-center px-2'>
        <CiSearch />
        <input type="text" className='px-2 w-90 h-10' placeholder='Search Podcast or Anything...'/>
      </div>
      <div className='bg-lime-900/40 h-10 rounded-[50px] w-10'>

      </div>
      <div className='bg-lime-900/40 flex items-center justify-center h-10 rounded-[50px] w-10'>
        <FaRegBell />
      </div>

      <p>Hello, Natasya</p>
      
    <div className='flex items-center justify-between px-2 bg-white p-1 w-18 rounded-3xl text-black'>
        <div className='bg-gray-400 h-8 rounded-[50px] w-8'></div>
        <MdOutlineKeyboardArrowDown />
    </div>

    </div>
  )
}

export default NavTwo

import React from 'react'
import Ellipse from "../../assets/Ellipse 3.png"
import Defcomm from "../../assets/Defcomm-02 3 2 8.png"
import Vector9 from "../../assets/Vector (9).png"
import GisArrow from "../../assets/gis_arrow-o (1).png"
import gisarrowo from "../../assets/gis_arrow-o.png"
import { HiMiniArrowSmallRight } from "react-icons/hi2";



function OurService() {
    return (
        <div className='px-10 py-10'>
            <div className='flex  justify-between px-10'>
                <div className='flex gap-6 items-center'>
                    <p className='text-[40px] font-bold'>02</p>
                    <div className='bg-lime-400 text-[30px]  py-4 px-16 rounded-[30px]'>Our Services</div>
                </div>
                <div className='w-[600px]'>
                    <p className='text-stone-500 text-[40px]'>
                        <span className='font-bold text-black  '>Defcomm Stores is not just an app marketplace;</span> it is a fortified digital environment where security comes first.
                    </p>
                </div>
            </div>

            <div className='flex justify-between py-10'>
                <div className='w-[400px]'>
                    <div className=' relative bg-zinc-200 h-[400px]  w-[400px] rounded-4xl'>
                        <img src={gisarrowo} alt=""  className='top-25 absolute left-20'/>
                        <img src={GisArrow} alt=""  className='top-26 absolute right-20'/>
                        <img src={Ellipse} alt=""  className='top-30 absolute right-23'/>
                        <img src={Ellipse} alt=""  className='top-40 absolute right-23'/>
                        <img src={Ellipse} alt=""  className='top-50 absolute right-23'/>
                     

                    </div>
                    <h1 className='text-[35px] font-bold'>Innovation</h1>
                    <p className='text-[15px]'>We strive to stay ahead with the ever-changing digital world.</p>
                </div>

                <div className='flex flex-col gap-2 w-[400px]'>
                    <div className='flex justify-between items-center px-10 text-[25px] font-bold bg-lime-400 h-[130px]  w-[400px] rounded-4xl'>
                        <p>SHARE IT</p>
                        <p><HiMiniArrowSmallRight /></p>
                    </div>
                    <div className=' relative bg-lime-400 h-[400px]  w-[400px] rounded-4xl'>
                    <img src={Vector9} alt=""  className='top-24 absolute right-16'/>
                    <img src={Defcomm} alt=""  className='top-20 absolute right-9'/>
                    </div>
                    <h1 className='text-[35px] font-bold'>Collaboration</h1>
                    <p className='text-[15px]'>Your ideas and our expertise come together to create something amazing</p>
                </div>

                <div className='w-[400px]'>
                    <div className=' relative bg-black h-[400px]  w-full rounded-4xl'>
                        <div className='absolute top-82 left-[-25px] rotate-25 rounded-[50px] py-1 px-10 text-[25px] bg-white '>IF ELSE</div>
                        <div className='absolute top-76 left-7 rotate-45 rounded-[50px] py-1 px-10 text-[25px] bg-white '>LOOPING</div>
                        <div className='absolute top-67 left-17 rotate-47 rounded-[50px] py-1 px-10 text-[25px] bg-white '>PRIVACY</div>
                        <div className='absolute top-75 right-18 rotate-280 rounded-[50px] py-1 px-10 text-[25px] bg-white '>ARRAY</div>
                        <div className='absolute top-81 right-[-8px] rotate-325 rounded-[50px] py-1 px-10 text-[25px] bg-white '>POINT</div>
                    </div>
                    <h1 className='text-[35px] font-bold'>Innovation</h1>
                    <p className='text-[15px]'>Every project is crafted with precision and care to ensure the best result.</p>
                </div>
            </div>
        </div>
    )
}

export default OurService

import React from 'react'
import Ellipse from "../../assets/Ellipse 3.png"
import Defcomm from "../../assets/Defcomm-02 3 2 8.png"
import Vector9 from "../../assets/Vector (9).png"
import GisArrow from "../../assets/gis_arrow-o (1).png"
import gisarrowo from "../../assets/gis_arrow-o.png"
import { HiMiniArrowSmallRight } from "react-icons/hi2";



function OurService() {
    return (
        <div className='px-4 w-full md:px-10 py-10'>
            <div className='grid justify-center md:flex   md:justify-between md:px-10'>
                <div className='flex gap-4 md:gap-6 items-center'>
                    <p className='text-[40px] font-bold'>02</p>
                    <div className='bg-lime-400 text-[18px] px-8 md:text-[30px]  py-4 md:px-16 rounded-[30px]'>Our Services</div>
                </div>
                <div className='w-[300px] md:w-[600px]'>
                    <p className='text-stone-500 text-[20px] md:text-[40px]'>
                        <span className='font-bold text-black  '>Defcomm Stores is not just an app marketplace;</span> it is a fortified digital environment where security comes first.
                    </p>
                </div>
            </div>

            <div className=' flex flex-col md:px-10 justify-center md:flex-row w-full md:justify-between py-10'>
                <div className='md:w-[400px]'>
                    <div className=' relative bg-zinc-200 h-[300px] md:h-[400px]  md:w-[400px] rounded-4xl'>
                        <img src={gisarrowo} alt=""  className=' left-8 top-15 md:top-25 absolute md:left-20'/>
                        <img src={GisArrow} alt=""  className='top-18 right-16 md:top-26 absolute md:right-20'/>
                        <img src={Ellipse} alt=""  className='top-20   md:top-30 absolute right-23'/>
                        <img src={Ellipse} alt=""  className='top-30  md:top-40 absolute right-23'/>
                        <img src={Ellipse} alt=""  className='top-40  md:top-50 absolute right-23'/>
                     

                    </div>

                    <h1 className='text-[20px] md:text-[25px] font-bold'>Innovation</h1>
                    <p className=' text-[15px] w-full md:w-full'>We redefining how secure communication works in the modern, hyperconnected world.</p>
                </div>

                <div className='flex flex-col gap-2 py-6 md:py-0  md:w-[400px]'>
                    <div className='flex justify-between items-center px-6 py-3  md:px-10 text-[25px] font-bold bg-lime-400 md:h-[130px]  md:w-[400px] rounded-4xl'>
                        <p>SHARE IT</p>
                        <p><HiMiniArrowSmallRight /></p>
                    </div>
                    <div className=' relative bg-lime-400 h-[400px] md:w-[400px] rounded-4xl'>
                    <img src={Vector9} alt=""  className='top-24 absolute right-16'/>
                    <img src={Defcomm} alt=""  className='top-20 absolute right-9'/>
                    </div>
                    <h1 className='text-[20px] md:text-[25px]  font-bold'>Data & Privacy</h1>
                    <p className='text-[15px]'>You have the power to select which data to share and with whom.</p>
                </div>

                <div className='md:w-[400px]'>
                    <div className=' relative bg-black h-[400px]  w-full rounded-4xl'>
                        <div className='absolute top-78 md:top-78 left-[-25px] rotate-55 md:left-[-18px] md:rotate-45 rounded-[50px] py-1 px-10 text-[25px] bg-white '>CYBER</div>
                        <div className='absolute top-74 md:top-76 left-2 md:left-7 rotate-55 md:rotate-45 rounded-[50px] py-1 px-10 text-[25px] bg-white '>SECURITY</div>
                        <div className='absolute top-62 md:top-67 left-10 md:left-17 rotate-55 md:rotate-47 rounded-[50px] py-1 px-10 text-[25px] bg-white '>PRIVACY</div>
                        <div className='absolute top-75 right-18 rotate-280 rounded-[50px] py-1 px-10 text-[25px] bg-white '>DATA</div>
                        <div className='absolute top-81 right-[-8px] rotate-325 rounded-[50px] py-1 px-10 text-[25px] bg-white '>POINT</div>
                    </div>
                    <h1 className='text-[20px] md:text-[25px] font-bold'>No Data Retention Policy</h1>
                    <p className='text-[15px]'>Defcomm  is built with privacy-by-design principles, ensuring every interaction and data transaction is protected from interception, leaks, or unauthorised access.</p>
                </div>
            </div>
        </div>
    )
}

export default OurService

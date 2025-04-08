import React from 'react'
import Ellipse from "../../../../assets/Ellipse 3.png"
import Defcomm from "../../../../assets/Defcomm-02 3 2 8.png"
import Vector9 from "../../../../assets/Vector (9).png"
import GisArrow from "../../../../assets/gis_arrow-o (1).png"
import gisarrowo from "../../../../assets/gis_arrow-o.png"
import { HiMiniArrowSmallRight } from "react-icons/hi2";

function OurService() {
    return (
        <div className='w-full px-4 py-10 md:px-10'>
            {/* Header Section */}
            <div className='flex flex-col items-center gap-6 md:flex-row md:justify-between md:px-10'>
                <div className='flex items-center gap-4 md:gap-6'>
                    <p className='text-4xl font-bold'>02</p>
                    <div className='bg-lime-400 px-8 py-4 text-lg rounded-full md:text-3xl md:px-16'>
                        Our Services
                    </div>
                </div>
                <div className='max-w-xs mt-6 md:mt-0 md:max-w-xl'>
                    <p className='text-xl text-stone-500 md:text-4xl'>
                        <span className='font-bold text-black'>Defcomm Stores is not just an app marketplace;</span> it is a fortified digital environment where security comes first.
                    </p>
                </div>
            </div>

            {/* Services Grid Section */}
            <div className='grid grid-cols-1 gap-10 py-10 md:grid-cols-3 md:px-10'>
                {/* Innovation Card */}
                <div className='flex flex-col'>
                    <div className='relative w-full h-[300px] bg-zinc-200 rounded-3xl md:h-[400px]'>
                        <img src={gisarrowo} alt="Arrow" className='absolute left-8 top-16 md:left-20 md:top-24' />
                        <img src={GisArrow} alt="Arrow" className='absolute right-16 top-20 md:right-20 md:top-28' />
                        <img src={Ellipse} alt="Ellipse" className='absolute right-24 top-24 md:top-32' />
                        <img src={Ellipse} alt="Ellipse" className='absolute right-24 top-32 md:top-44' />
                        <img src={Ellipse} alt="Ellipse" className='absolute right-24 top-40 md:top-56' />
                    </div>
                    <h1 className='mt-4 text-xl font-bold md:text-2xl'>Innovation</h1>
                    <p className='mt-2 text-sm md:text-base'>We're redefining how secure communication works in the modern, hyperconnected world.</p>
                </div>

                {/* Data & Privacy Card */}
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center justify-between px-6 py-3 bg-lime-400 rounded-3xl md:px-10 md:h-[130px]'>
                        <p className='text-2xl font-bold'>SHARE IT</p>
                        <p className='text-2xl'><HiMiniArrowSmallRight /></p>
                    </div>
                    <div className='relative w-full h-[400px] bg-lime-400 rounded-3xl'>
                        <img src={Vector9} alt="Vector" className='absolute right-16 top-24' />
                        <img src={Defcomm} alt="Defcomm" className='absolute right-9 top-20' />
                    </div>
                    <h1 className='mt-4 text-xl font-bold md:text-2xl'>Data & Privacy</h1>
                    <p className='mt-2 text-sm md:text-base'>You have the power to select which data to share and with whom.</p>
                </div>

                {/* Security Card */}
                <div className='flex flex-col'>
                    <div className='relative w-full h-[400px] bg-black rounded-3xl'>
                        <div className='absolute px-10 py-1 text-2xl bg-white rounded-full transform -rotate-45 -left-6 top-[220px] md:-left-4'>CYBER</div>
                        <div className='absolute px-10 py-1 text-2xl bg-white rounded-full transform -rotate-45 left-2 top-[250px] md:left-7'>SECURITY</div>
                        <div className='absolute px-10 py-1 text-2xl bg-white rounded-full transform -rotate-45 left-10 top-[290px] md:left-16'>PRIVACY</div>
                        <div className='absolute px-10 py-1 text-2xl bg-white rounded-full transform rotate-80 right-16 top-[300px]'>DATA</div>
                        <div className='absolute px-10 py-1 text-2xl bg-white rounded-full transform rotate-35 -right-2 top-[220px]'>POINT</div>
                    </div>
                    <h1 className='mt-4 text-xl font-bold md:text-2xl'>No Data Retention Policy</h1>
                    <p className='mt-2 text-sm md:text-base'>Defcomm is built with privacy-by-design principles, ensuring every interaction and data transaction is protected from interception, leaks, or unauthorised access.</p>
                </div>
            </div>
        </div>
    )
}

export default OurService
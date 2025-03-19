import React from 'react'
import { CiMobile1 } from "react-icons/ci";
import { SlScreenTablet } from "react-icons/sl";
import { MdLaptopChromebook } from "react-icons/md";
import { MdOutlineWatch } from "react-icons/md";
import { CgArrowTopRight } from "react-icons/cg";
import { BsDot } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

function Home() {
    return (
        
        <div className='relative bg-deffcom-lime text-white px-10 pt-[40px] mx-10'> 
            <div className='absolute right-10 top-[120px]'>
                <ul className='flex gap-3 text-xs'>
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
                </ul>
            </div>

            <div className='pt-20 px-10'>
                <div>
                    <p className='flex items-center text-[13px]'> <span className='text-lime-700 text-xl'><GoDotFill /></span> 50% OFF FOR NEXT 24 HOURS</p>
                    <h1 className='text-[105px] leading-xs tracking-tighter'>Transforming ideas into beautifully crafted products.</h1>
                    <div className='flex gap-4 text-black '>
                        <button className='py-2 px-5 bg-white rounded-md'>GET STARTED</button>
                        <button className='bg-lime-600 py-2 px-3 rounded-[50px]'>
                            <CgArrowTopRight />
                        </button>
                    </div>
                </div>
                <div className='relative pt-20'>
                    <video src="" className=' bg-video-gradient w-full h-full'>
                        
                        
                        
                    </video>
                        <div className='absolute w-full items-center justify-between bottom-[20px] flex text-stone-600 px-10'>
                            <div className='w-[500px]'>
                                <h1 className='text-xl'>MyCard - Moneymanager</h1> 
                                <p className='flex items-center'>2024 <BsDot /> Mobile App</p>
                            </div>
                            <div className='flex text-lime-900 text-4xl'>
                                <GoDotFill />
                                <GoDotFill />
                            </div>
                            
                        </div>
                </div>
            </div>
            
        </div>
        
    
    )
}

export default Home

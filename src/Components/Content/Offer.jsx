import React from 'react'
import { CgArrowTopRight } from "react-icons/cg";
import { BsChevronDoubleDown } from "react-icons/bs";

function Offer() {
    return (
        <div className='mx-10 bg-black text-white mb-20 p-16 rounded-[40px]'>
            <div className='flex justify-between items-center'>
                <p className='text-[50px]'>Best choice for you</p>
                <div className='flex gap-6 text-lg'>
                    <p className='py-3 px-12 rounded-[50px] bg-white text-black'>All</p>
                    <p className='py-3 px-12 rounded-[50px] border border-white '>Coorse</p>
                    <p className='py-3 px-12 rounded-[50px] border border-white '>Partner</p>
                </div>
            </div>
            <div className='flex gap-20 py-10'>
                
                <div className='bg-white text-black p-8 rounded-2xl'>
                    <h1 className='font-bold text-3xl'>INNOVATIVE DESIGN</h1>
                    <p className='py-10'>Creative, user-friendly solutions tailored to your needs.</p>
                    <div className='flex items-center gap-4 text-xl  py-3  rounded-[50px]'>
                       See More <CgArrowTopRight />
                   </div>
                </div>

                <div className='bg-white text-black p-8 rounded-2xl'>
                    <h1 className='font-bold text-3xl'>EXPERT TEAM</h1>
                    <p className='py-10'>Skilled developers and designers dedicated to your success.</p>
                    <div className='flex items-center gap-4 text-xl  py-3  rounded-[50px]'>
                       See More <CgArrowTopRight />
                   </div>
                </div>


                <div className='bg-white text-black p-8 rounded-2xl'>
                    <h1 className='font-bold text-3xl'>RESULT DRIVEN</h1>
                    <p className='py-10'>Delivering impactful, high-quality outcomes for your digital vision.</p>
                    <div className='flex items-center gap-4 text-xl  py-3  rounded-[50px]'>
                       See More <CgArrowTopRight />
                   </div>
                </div>
            </div>

            <div className='flex justify-center'>
                <div className='absolute bg-white rounded-tl-2xl rotate-45 text-xl p-8  text-black'>
                 <p className='rotate-315 font-bolder'>
                    <BsChevronDoubleDown />
                    </p>  
                </div>
            </div>
            
        </div>
    )
}

export default Offer

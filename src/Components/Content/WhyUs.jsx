import React from 'react'
import { GoDotFill } from "react-icons/go";


function WhyUs() {

   

    return (
     <div className='bg-black w-full px-4 py-10 md:px-10 md:py-24  '>
        <div className='md:flex gap-10 bg-neutral-900 px-4 py-10 md:px-30 md:py-30 '>
            <div className=' pb-4 md:pb-0 text-white'>
                 <p className='flex items-center text-[9px] md:text-[13px]'> <span className='text-lime-400 mdLtext-xl'><GoDotFill /></span> WHY CHOOSE US</p>
                 <p className=' text-[20px] md:text-[40px] text-gray-500 pt-2 md:pt-4 tracking-tighter md:leading-12'>Why you should choose <span className='text-[25px] md:text-[45px] text-white'>Defcommstore</span></p>              
            </div>

           <div className='grid gap-10'>
                <div className='  bg-black p-8'>
                    <div className='flex gap-1'>
                        <div className='w-2 h-10 bg-lime-400 rounded-t-md rounded-b-md '></div>
                        <div className='w-2 h-10 bg-lime-400 rounded-t-md rounded-b-md '></div>
                        <div className='w-2 h-10 bg-lime-400 rounded-t-md rounded-b-md '></div>
                        <div className='w-2 h-10 bg-lime-400 rounded-t-md rounded-b-md '></div>
                    </div>
                    <h1 className='text-white'>Innovation</h1>
                    <p className='text-stone-600'>Harness cutting-edge technology to stay ahead in a rapidly evolving market landscape.</p>
                </div>

                <div className='bg-black p-8'>
                    <div className='flex gap-1'>
                        <div className=''>
                            <div className='w-4 h-4 bg-lime-800 rounded-[50px] '></div>
                            <div className='w-4 h-10 bg-lime-400  '></div>
                        </div>
                        <div className=''>
                            <div className='w-4 h-10 bg-lime-400  '>
                            </div><div className='w-4 h-4 bg-lime-800 rounded-[50px] '></div>
                       </div>
                       <div className=''>
                            <div className='w-4 h-4 bg-lime-800 rounded-[50px] '></div>
                            <div className='w-4 h-10 bg-lime-400 '></div>
                        </div>
                 
                  </div>
                    <h1 className='text-white'>Simplicity</h1>
                    <p className='text-stone-600'>Simplify complex process with intuitive and streamline workflows.</p>
                </div>

                <div className='bg-black p-8'>
                    <div className='flex  gap-1'>
                        <div className='flex items-center justify-center'>
                            <div className='w-6 h-6 bg-lime-800 rounded-[50px] '></div>
                            <div className='w-2 h-10 bg-lime-400'></div>
                        </div>                 
                  </div>
                    <h1 className='text-white'>Flexibility</h1>
                    <p className='text-stone-600'>Adapt similessly to changing business needs with customizable and scalable solutions.</p>
                </div>
            </div> 
        </div>
    </div>


        

  
    )
}

export default WhyUs

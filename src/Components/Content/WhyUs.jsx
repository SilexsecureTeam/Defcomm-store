import React from 'react'
import { GoDotFill } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";


function WhyUs() {
    return (
     <div className='bg-black w-full px-10 py-24  '>
        <div className='flex gap-10 bg-neutral-900 px-30 py-30 '>
            <div className=' text-white'>
                 <p className='flex items-center text-[13px]'> <span className='text-lime-400 text-xl'><GoDotFill /></span> WHY CHOOSE US</p>
                 <p className='text-[40px] text-gray-500 pt-4 tracking-tighter leading-12'>Why you should choose <span className='text-[45px] text-white'>Defcommstore</span></p>              
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



        <div className='flex gap-10 px-30 pt-30 '>
            <div className='relative text-white'>
                 <p className='flex items-center text-[13px]'> <span className='text-lime-400 text-xl'><GoDotFill /></span> FAQ</p>
                 <p className=' text-[45px] pt-4 text-white tracking-tighter leading-10'>Frequently <span className='text-[40px] text-gray-500'>asked Questions</span></p>              
                 
                 
                 <div className='absolute flex flex-col gap-2 top-[200px]  gap-1'>
                        <div className='flex'>
                            <div className='w-20 h-20 bg-lime-800 opacity-30 rounded-[50px] '></div>
                            <div className='w-40 h-20 bg-lime-400 opacity-30 rounded-lg '></div>
                        </div>
                        <div className='flex'>
                            <div className='w-40 h-20 bg-lime-400 opacity-30 rounded-lg '>
                            </div><div className='w-20 h-20 bg-lime-800 opacity-30  rounded-[50px] '></div>
                       </div>
                       <div className='flex'>
                            <div className='w-20 h-20 bg-lime-800 rounded-[50px] opacity-30'></div>
                            <div className='w-40 h-20 bg-lime-400  opacity-30 rounded-lg '></div>
                        </div>
                 
                </div>
            
            </div>
           <div className='grid pl-30 '>
                <div className='  bg-neutral-950  p-6 border-b-2 border-neutral-700'>
                    <div className='flex justify-between text-lime-400 font-bold text-xl '><h1>How can I signup for TeamWave?</h1><p> <FaMinus /></p></div>
                    <p className='text-white py-4'>SiginUp for TeamWave is easy. Visit our website, click the "SignUp" button, and follow the registration process. You can get started with our Free Plan right away?</p>
                </div>

                <div className=' p-6 border-b-2 border-neutral-700'>
                    <div className='flex justify-between text-white  '><p>What support options are availble?</p><p className='text-lime-400'> <FaPlus /></p></div>
               </div>

               <div className=' p-6 border-b-2 border-neutral-700'>
                    <div className='flex justify-between text-white  '><p>Is my data secure on TeamView?</p><p className='text-lime-400'> <FaPlus /></p></div>
               </div>

               <div className=' p-6 border-b-2 border-neutral-700'>
                    <div className='flex justify-between text-white  '><p>Can I Integrate TeamView on other apps?</p><p className='text-lime-400'> <FaPlus /></p></div>
               </div>

               <div className=' p-6 border-b-2 border-neutral-700'>
                    <div className='flex justify-between text-white  '><p>Do you offer training resources for users?</p><p className='text-lime-400'> <FaPlus /></p></div>
               </div>



                
            </div> 
        </div>




     </div>   
    )
}

export default WhyUs

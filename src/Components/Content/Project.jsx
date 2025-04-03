import React from 'react'
import { GoDotFill } from "react-icons/go";
import { CgArrowTopRight } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';


function Project() {

    const navigate = useNavigate()

    return (
        <div className='grid grid-cols-2 py-20 my-10 px-20 gap-8 mx-10'> 
            
            <div>

                <div>
                    <p className='flex items-center text-[13px]'> <span className='text-lime-700 text-xl'><GoDotFill /></span> LASTEST PROJECT</p>
                    <h1 className='text-[30px] py-2'>App Categories</h1>
                    
                    <div className='h-[350px] bg-stone-400 '>

                    </div>
                    <div className='flex items-center justify-between'>
                        
                        <div className='w-[500px] py-2'>
                            <h1 className='text-2xl'>Medicals</h1> 
                            <p className='flex items-center py-2  text-stone-600'>2024 <GoDotFill  /> UI/UX</p>
                        </div>
                        
                        
                        <button onClick={() => {navigate("/medical")}} className='bg-lime-700 py-3 px-3 cursor-pointer rounded-[50px]'>
                            <CgArrowTopRight />
                        </button>
                        
                     </div>
                </div>

                

                <div>
                    <div className='h-[350px] bg-stone-400 '>

                    </div>
                    <div className='flex items-center justify-between'>
                        
                        <div className='w-[500px] py-2'>
                            <h1 className='text-2xl'>Office</h1> 
                            <p className='flex items-center py-2 text-stone-600'>2024 <GoDotFill  /> Website</p>
                        </div>
                        
                        <button onClick={() => {navigate("/medical")}} className='bg-lime-700 py-3 px-3 cursor-pointer rounded-[50px]'>
                            <CgArrowTopRight />
                        </button>
                     </div>
                </div>

                

                <div> 
                    <div className='h-[350px] bg-stone-400 '>

                    </div>
                    <div className='flex items-center justify-between'>
                        
                        <div className='w-[500px] py-2'>
                            <h1 className='text-2xl'>Qaltra</h1> 
                            <p className='flex items-center py-2 text-stone-600'>2024 <GoDotFill  /> UI/UX</p>
                        </div>
                        
                        <button onClick={() => {navigate("/medical")}} className='bg-lime-700 py-3 px-3 cursor-pointer rounded-[50px]'>
                            <CgArrowTopRight />
                        </button>
                     </div>
                </div>

               
            </div>
            
            <div>

                <div>
                    <div className='h-[350px] bg-black py-2'>

                    </div>
                     
                     <div className='flex items-center justify-between'>
                        
                        <div className='w-[500px] py-2'>
                            <h1 className='text-2xl'>Communications</h1> 
                            <p className='flex items-center py-2 text-stone-600'>2024 <GoDotFill  /> Mobile App</p>
                        </div>
                        
                        <button onClick={() => {navigate("/medical")}} className='bg-lime-700 py-3 px-3 cursor-pointer rounded-[50px]'>
                            <CgArrowTopRight />
                        </button>
                     </div>
                </div>

                <div>
                    <div className='h-[350px] bg-stone-400 py-2'>

                    </div>
                     
                     <div className='flex items-center justify-between'>
                        
                        <div className='w-[500px] py-2'>
                            <h1 className='text-2xl'>Phronix</h1> 
                            <p className='flex items-center py-2 text-stone-600'>2024 <GoDotFill  /> Dashboard</p>
                        </div>
                        
                        <button onClick={() => {navigate("/medical")}} className='bg-lime-700 py-3 px-3 cursor-pointer rounded-[50px]'>
                            <CgArrowTopRight />
                        </button>
                     </div>
                </div>
  
  
  
                <div>
                        <div className='h-[350px] bg-stone-400  py-2'>

                        </div>
                        
                        <div className='flex items-center justify-between'>
                            
                            <div className='w-[500px] py-2'>
                                <h1 className='text-2xl'>Syntex</h1> 
                                <p className='flex items-center py-2 text-stone-600'>2024 <GoDotFill  /> Branding</p>
                            </div>
                            
                            <button onClick={() => {navigate("/medical")}} className='bg-lime-700 py-3 px-3 cursor-pointer rounded-[50px]'>
                            <CgArrowTopRight />
                        </button>
                        </div>

                    <div className='flex justify-center gap-1'>
                        <button className='bg-lime-400 py-2 px-3 rounded-md'>LEARN MORE</button>
                        <button onClick={() => {navigate("/medical")}} className='bg-lime-700 py-3 px-3 cursor-pointer rounded-[50px]'>
                            <CgArrowTopRight />
                        </button>
                    </div>    
                </div>
                
            </div>

        </div>
    )
}

export default Project

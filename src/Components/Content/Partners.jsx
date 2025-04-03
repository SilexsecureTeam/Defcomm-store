import React from 'react'
import { GoDotFill } from "react-icons/go";
import Mark from "../../assets/Mark.png"
import Mark1 from "../../assets/Mark One.png"
import Mark2 from "../../assets/Mark Two.png"
import Mark3 from "../../assets/Mark Three.png"
import Mark4 from "../../assets/Mark Four.png"
import Mark5 from "../../assets/Mark Five.png"
import { CgArrowTopRight } from "react-icons/cg";




function Partners() {
    return (
        <div className='px-10'>
             <div className='px-20 py-10'>
                    <p className='flex items-center text-[13px] py-2'> <span className='text-stone-800 text-lg'><GoDotFill /></span> 50% OUR PARTNER</p>
                       <div className='flex py-4 justify-between text-black '>
                            <div className='flex items-center text-2xl'><img src={Mark} alt="" />NEXTFLOWS</div>
                            <div className='flex items-center text-2xl'><img src={Mark1} alt="" />Fancywear</div>
                            <div className='flex items-center text-2xl'><img src={Mark2} alt="" />Globalchart</div>
                            <div className='flex items-center text-2xl'><img src={Mark3} alt="" />home2stay</div>
                            <div className='flex items-center text-2xl'><img src={Mark4} alt="" />PAYSCALE</div>
                            <div className='flex items-center text-2xl'><img src={Mark5} alt="" />Roommate</div>
                        </div>
             </div>

            <div className='bg-deffcom-lime py-20'>
                <div className='flex justify-between  px-30  '>
                    <div className=' text-white'>
                              <p className='flex items-center text-[13px]'> <span className='text-lime-400 text-xl'><GoDotFill /></span> ABOUT US</p>
                    </div>

                    <div>
                        <p className='text-3xl pb-8 text-white w-[600px]'>Defcomm Stores ensures that only verified, trusted application are made available to users operating within the Defcomm ecosystem.</p>
                        <div className='flex gap-4 text-black '>
                            <button className='py-2 px-5 bg-white rounded-md'>LEARN MORE</button>
                            <button className='bg-lime-400 py-2 px-3 rounded-[50px]'>
                                <CgArrowTopRight />
                            </button>
                        </div>
                    <div/> 
                </div>

                
            </div>
              
                <div className='flex justify-between px-30 pt-20'>
                    
                    <div className=''>
                        <div className='flex gap-2 py-2'>
                            <div className='w-25 h-25 bg-lime-400 opacity-20 rounded-3xl'></div>
                            <div className='w-25 h-25 bg-lime-400 opacity-15 rounded-3xl'></div>
                            <div className='w-25 h-25 bg-lime-400 opacity-10 rounded-3xl'></div>  
                        </div>
                        <div className='flex gap-3'>
                            <div className='w-25 h-25 bg-lime-400 opacity-20 rounded-3xl'></div>
                            <div className='w-24 h-24 bg-lime-400 opacity-15 rounded-3xl'></div>
                            <div className='w-23 h-23 bg-lime-400 opacity-10 rounded-3xl'></div>  
                        </div>
                        <div className='flex gap-3 py-2'>
                            <div className='w-25 h-25 bg-lime-400 opacity-20 rounded-3xl'></div>
                            <div className='w-24 h-24 bg-lime-400 opacity-15 rounded-3xl'></div>
                            <div className='w-23 h-23 bg-lime-400 opacity-10 rounded-3xl'></div>  
                        </div>                  
                    </div>

                    <div className='grid grid-cols-2 gap-6 w-[600px] text-white'>
                        <div>
                            <h1 className='font-bold py-2 text-xl'>End-to-EndEncryption</h1>
                            <p>All application published on Defcomm Stores undergo stringent encryption protocols to safeguard user data and </p>
                        </div>
                        <div>
                            <h1 className='font-bold py-2 text-xl'>Device Optimization</h1>
                            <p>Application are optimized for Defcomm hadware and software. ensuring seamless perfomance and enhanced security.</p>
                       
                        </div>
                        <div>
                            <h1 className='font-bold py-2 text-xl'>Vetted Applications</h1>
                            <p>Every app undergoes a figorous security review process before publication, ensuring it meets Defcomm's strick cybersecurity standards.</p>
                       
                        </div>
                        <div>
                            <h1 className='font-bold py-2 text-xl'>Isolated Ecosystem</h1>
                            <p>Defcomm Store sperate within a closed-loop securty framework. preventing unautor9zed access ajd reducing exposure to external threats.</p>
                       </div>
                    </div>
                </div>

                    


            
            
            </div>

              
        </div>
    )
}

export default Partners

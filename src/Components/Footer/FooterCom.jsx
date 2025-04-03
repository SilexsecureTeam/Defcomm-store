import React from 'react'
import { GoDotFill } from "react-icons/go";
import WhyUs from "../Content/WhyUs"

function Footer() {
    return (
        <>
            <WhyUs />
            <div className='bg-black text-white flex justify-between px-20'>
                <div>
                <p className='flex items-center text-2xl'> <span className='text-lime-400 text-4xl'><GoDotFill /></span> Defcomm</p>
                </div>
                <ul className='flex gap-10 text-sm text-neutral-300'>
                    <li>Term of Service</li>
                    <li>Privacy</li>
                    <li>Developer</li>
                    <li>Defcomm Store</li>
                </ul>
            </div>
        </>
        
    )
}

export default Footer

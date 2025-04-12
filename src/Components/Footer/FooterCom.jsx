import React from 'react'
import { GoDotFill } from "react-icons/go";
import { useNavigate, NavLink} from 'react-router-dom';

function Footer() {
    // const navigate = useNavigate()
    return (
        <>
            
            <div className='bg-black text-white flex items-center px-2 justify-between md:px-20'>
                <div>
                <p className='flex items-center text-sm md:text-2xl'> <span className='text-lime-400 text-4xl'><GoDotFill /></span> Defcomm</p>
                </div>
                <ul className='flex gap-2 md:gap-10 text-[7px] md:text-sm text-neutral-300'>
                    <NavLink to="termofuse" className="cursor-pointer hover:text-lime-400"><li>Term of Service</li></NavLink>
                    <NavLink to="privacy" className="cursor-pointer hover:text-lime-400"><li  >Privacy</li></NavLink>
                    <NavLink to="devagreement"><li className="cursor-pointer hover:text-lime-400">Developer</li></NavLink>
                    <li className="cursor-pointer hover:text-lime-400">Defcomm Store</li>
                   
                </ul>
            </div>
        </>
        
    )
}

export default Footer

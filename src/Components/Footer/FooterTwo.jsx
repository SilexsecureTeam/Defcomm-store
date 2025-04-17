import React from 'react'
import { GoDotFill } from "react-icons/go";
// import Defcomm from "../"
import Defcomm from "../../assets/Defcomm-03 4.png"

function FooterTwo() {
    return (
      
        <div  className='bg-white flex text-[7px] md:text-[10px] py-2 px-4 items-center text-xs justify-between md:py-6 text-black  md:px-10'>
            <div>
                <img src={Defcomm} alt=""  className='w-[150px]'/>
            </div>
            
            
             <ul className=" flex md:flex-col gap-2 md:flex-row justify-center  items-center md:gap-10">
                <li className="">PRODUCT</li>
                <li className="">SUPPORT</li>
                <li className=" ">COOPERATION</li>
                <li className="">COMMUNITY</li>
            </ul>
        </div>
     
        
    )
}

export default FooterTwo

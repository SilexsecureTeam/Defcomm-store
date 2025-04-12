import React from 'react'
import { GoDotFill } from "react-icons/go";
// import Defcomm from "../"
import Defcomm from "../../assets/Defcomm-03 4.png"

function FooterTwo() {
    return (
      
        <div  className='bg-white flex text-[10px] items-center text-xs justify-between py-6 text-black  px-10'>
            <div>
                <img src={Defcomm} alt=""  className='w-[150px]'/>
            </div>
            
            
             <ul className=" flex flex-col gap-6 md:flex-row justify-center  items-center md:gap-10">
                <li className="">PRODUCT</li>
                <li className="">SUPPORT</li>
                <li className=" ">COOPERATION</li>
                <li className="">COMMUNITY</li>
            </ul>
        </div>
     
        
    )
}

export default FooterTwo

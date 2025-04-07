import React from "react";
import { BsArrowDown } from "react-icons/bs";
import Logo from "../../assets/defcommlogo.png"
import FullLogo from "../../assets/DefcommLogofull.png"
export default function LoginPage() {
    return (
        <>
            <div className="relative min-h-screen bg-[#2e360c] text-white font-sans overflow-hidden px-8">
                {/* Top Right Login Button */}
                <button className="absolute top-6 right-6 bg-white text-black px-5 py-1 rounded-full text-sm z-50">
                    Login
                </button>
                <div>
                    <img src={Logo} alt="" className="w-12 h-12" />
                </div>

                {/* Correct Grid Pattern */}
                <div className="absolute top-[20%] left-[5%] grid grid-cols-4 gap-4 z-0">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="w-[40px] h-[40px] bg-white opacity-5" />
                    ))}
                </div>

                {/* Login Form */}
                <div className="relative z-10 flex justify-center items-center min-h-screen">
                    <div className="bg-[#3a4420] p-8 rounded-md w-80 shadow-lg">
                        <h2 className="text-center text-sm font-semibold mb-6">Developer Login</h2>
                        <input
                            type="text"
                            placeholder="username"
                            className="w-full px-4 py-2 mb-4 bg-transparent border border-white rounded text-white placeholder-white"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 mb-4 bg-transparent border border-white rounded text-white placeholder-white"
                        />
                        <button className="w-full bg-black text-white py-2 rounded">Login</button>
                        <div className="text-xs text-green-300 mt-2 text-center flex justify-between items-center">
                            <p className="text-[#C6FC2B]">  Dont have an account?</p>
                            <span className="text-white  cursor-pointer "> <a href="/register"> Sign up</a></span>
                        </div>
                    </div>
                </div>

                {/* LEFT Annotation 1 */}
                <div className="absolute top-[28%] left-[8%] text-xs w-[280px]">
                    <div className="absolute h-[1px] w-[100px] bg-white top-2 left-0" />
                    <div className="absolute w-2 h-2 bg-white rounded-full top-[2px] left-[100px] z-10" />
                    <div className="absolute h-[1px] w-[50px] bg-white top-2 left-[100px] rotate-45 origin-left" />
                    <p className="ml-[165px] mt-2">
                        Latest Version Of Wireless <br />
                        Remote Sensor Technology
                    </p>
                </div>

                {/* LEFT Annotation 2 */}
                <div className="absolute bottom-[20%] left-[8%] text-xs w-[300px]">
                    <div className="absolute h-[1px] w-[100px] bg-white top-2 left-0" />
                    <div className="absolute w-2 h-2 bg-white rounded-full top-[2px] left-[100px] z-10" />
                    <div className="absolute h-[1px] w-[50px] bg-white top-2 left-[100px] -rotate-45 origin-left" />
                    <p className=" mt-2">
                        Extra Dynamo Power. <br />
                        Waterproof And Anti-Dust
                    </p>
                </div>

                {/* RIGHT Annotation */}
                <div className="absolute top-[42%] right-[5%] text-xs text-right w-[300px]">
                    <div className="absolute h-[1px] w-[100px] bg-white top-2 right-0" />
                    <div className="absolute w-2 h-2 bg-white rounded-full top-[-27px] right-[128px] z-10" />
                    <div className="absolute h-[1px] w-[50px] bg-white top-2 right-[100px] rotate-45 origin-right" />
                    <p className="mr-[160px] mt-2">
                        The Propeller Is As Strong As Steel <br />
                        As Light As A Feather
                    </p>
                </div>

                {/* POEM Circle ABOVE + Arrow inside + Centered Vertical Line BELOW + Text under line */}
                <div className="absolute top-[10%] right-[17%] flex flex-col items-center text-xs">
                    {/* Circle with arrow inside */}
                    <div className="relative w-20 h-20 rounded-full bg-[#3a4420] flex items-center justify-center text-center">
                        <BsArrowDown className="absolute text-white text-2xl" />
                    </div>
                </div>
            </div>
            <div className="bg-[#36460A] py-32">
                <div className="text-center text-white pb-10">
                    <h1 className="font-bold text-2xl">360 Degree Protection</h1>
                    <p>Dronerly.Inc is a company producing the highest quality VR Drones</p>
                    <p> with the latest technology.</p>
                </div>

                <div className="border-t mx-12 border-white "></div>
                <div className="flex justify-between px-8 pt-6 flex-col md:flex-row items-center">
                    <div>
                        <img src={FullLogo} alt="" className="w-32 h-16 mx-auto" />
                    </div>
                    <div className="underline text-2xl text-center text-white flex space-x-5 py-4 md:py-0">
                        <p>PRODUCT</p>
                        <p>SUPPORT</p>
                        <p>ABOUT</p>
                    </div>
                    <div>
                        <p className="text-white">©Copyright Defcomm, All Rights Reserved. </p>
                    </div>
                </div>
            </div>
        </>
    );
}

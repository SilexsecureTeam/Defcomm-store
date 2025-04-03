import React from 'react'
import { GoHome } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { MdMicNone } from "react-icons/md";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuLaptopMinimal } from "react-icons/lu";
import { IoPhonePortraitOutline } from "react-icons/io5";
import headphone from "../../../../../assets/Image.png"
import { useNavigate } from 'react-router-dom';

function MedicalApp() {

    const navigate = useNavigate()
    return (
        <div className='bg-black px-10 py-30 text-white w-full'>
            <div className='flex justify-between py-14  px-10'>
                <div className=' leading-9'>
                    <h1 className='text-[36px] font-bold '>Search</h1>
                    <p className='text-[24px] text-gray-400'>Search your favourite apps</p>
                </div>
               
                <div className='flex gap-14'>
                    <div className='flex gap-4 text-[20px] text-center '>
                        <p className='flex items-center text-[30px] justify-center w-[64px] h-[64px] bg-lime-400 rounded-xl'><GoHome /></p>
                        <p>Home</p>
                    </div>
                    <div className='flex gap-4  leading-6 ' >
                        <p className='flex items-center justify-center text-[30px] w-[64px] h-[64px] bg-lime-400 rounded-xl'><IoSettingsOutline /></p>
                        <p className='text-[20px] font-bold'>Settings <br/><span className='text-[14px] font-light'>Configure store</span></p>
                    </div>
                </div>
                
            </div>

            <div className='flex items-center gap-10 bg-neutral-900 px-4 rounded-2xl mx-10'>
                <div className='flex gap-4 items-center'>
                    <p><IoIosSearch /></p>
                    <p>iSurvive</p>
                </div>
                <input type="text" className='w-[1200px] py-4 outline-none'/>
                <p><MdMicNone /></p>
            </div>


            <div className='grid grid-cols-2 gap-14 my-20'>
                <div className=' w-full bg-white text-black py-12 px-10'>
                    <div className='flex relative'>
                        <div className='w-[300px]'>
                            <h1 className='text-[16px] z-10 font-bold'>iSurvive-Map for Military Operations</h1>
                            <p className='text-[12px] z-10'>iSurvice provides you with DayZ and Arma 3 maps, lets you place tactical markers (player positions, tents, meeting points,..) on it and automatically shares those markers with the friends in your group - without the need for accounts, a registration or other services! Furthermore it provides a loot-map for DayZ.</p>
                            <h1 className='text-[12px] font-bold pt-10 text-lime-900'>Updated on</h1>
                            <p className='text-[9px]'>March 12, 2025</p>
                            <div className='flex pt-10 items-center gap-2'><p><IoPhonePortraitOutline /></p><p className='text-[10px]'>MOBILE PHONE</p></div>
                            <div className='flex py-4 gap-2'><p><LuLaptopMinimal /></p><p className='text-[12px]'>DEFCOM-PC</p></div>
                        </div>
                        <div className='absolute right-0'>
                            <img src={headphone} alt="" className=' -z-20'/>
                        </div>
                    </div>

                    <div className=' flex justify-between pt-20'>
                        <div className='flex flex-col gap-1 px-4 text-[30px] justify-center w-[64px] h-[64px] bg-black rounded-xl'>
                            <div className=' w-[28px] h-2 rounded-md bg-lime-600'></div>
                            <div className='w-[32px] h-2 rounded-md bg-lime-600'></div>
                            <div className='w-[24px] h-2 rounded-md bg-lime-600'></div>
                        </div>
                        <div>
                            <h1 className='font-bold text-[20px]'>PPT APP</h1>
                            <p className='text-[16px]'>New way to write note, right there</p>
                        </div>
                        <button onClick={() => {navigate("/PPT")}} className='flex items-center text-[30px] cursor-pointer justify-center w-[64px] h-[64px] text-white bg-lime-600 rounded-xl'>
                            <MdOutlineFileDownload />
                        </button>
                    </div>

                </div>

                <div className=' w-full bg-white text-black py-12 px-10'>
                    <div className='flex relative'>
                        <div className='w-[300px]'>
                            <h1 className='text-[16px] font-bold'>Design Features</h1>
                            <p className='text-[12px]'>iSurvice provides you with DayZ and Arma 3 maps, lets you place tactical markers (player positions, tents, meeting points,..) on it and automatically shares those markers with the friends in your group - without the need for accounts, a registration or other services! Furthermore it provides a loot-map for DayZ.</p>
                            <h1 className='text-[12px] font-bold pt-10 text-lime-900'>Updated on</h1>
                            <p className='text-[9px]'>March 12, 2025</p>
                            <div className='flex pt-10 items-center gap-2'><p><IoPhonePortraitOutline /></p><p className='text-[10px]'>MOBILE PHONE</p></div>
                            <div className='flex py-4 gap-2'><p><LuLaptopMinimal /></p><p className='text-[12px]'>DEFCOM-PC</p></div>
                        </div>
                        <div className='absolute right-0'>
                            <img src={headphone} alt="" className=' '/>
                        </div>
                    </div>

                    <div className=' flex justify-between  pt-20'>
                        <div className='flex flex-col gap-1 px-4 text-[30px] justify-center w-[64px] h-[64px] bg-black rounded-xl'>
                            <div className=' w-[28px] h-2 rounded-md bg-lime-600'></div>
                            <div className='w-[32px] h-2 rounded-md bg-lime-600'></div>
                            <div className='w-[24px] h-2 rounded-md bg-lime-600'></div>
                        </div>
                        <div>
                            <h1 className='font-bold text-[20px]'>PPT APP</h1>
                            <p className='text-[16px]'>New way to write note, right there</p>
                        </div>
                        <div className='flex items-center text-[30px] justify-center w-[64px] h-[64px] text-white bg-lime-600 rounded-xl'>
                        <button onClick={() => {navigate("/PPT")}} className='flex items-center text-[30px] cursor-pointer justify-center w-[64px] h-[64px] text-white bg-lime-600 rounded-xl'>
                            <MdOutlineFileDownload />
                        </button>
                        </div>
                    </div>

                </div>

                <div className=' w-full bg-white text-black py-12 px-10'>
                    <div className='flex relative'>
                        <div className='w-[300px]'>
                            <h1 className='text-[16px] font-bold'>iSurvive-Map for Military Operations</h1>
                            <p className='text-[12px]'>iSurvice provides you with DayZ and Arma 3 maps, lets you place tactical markers (player positions, tents, meeting points,..) on it and automatically shares those markers with the friends in your group - without the need for accounts, a registration or other services! Furthermore it provides a loot-map for DayZ.</p>
                            <h1 className='text-[12px] font-bold pt-10 text-lime-900'>Updated on</h1>
                            <p className='text-[9px]'>March 12, 2025</p>
                            <div className='flex pt-10 items-center gap-2'><p><IoPhonePortraitOutline /></p><p className='text-[10px]'>MOBILE PHONE</p></div>
                            <div className='flex py-4 gap-2'><p><LuLaptopMinimal /></p><p className='text-[12px]'>DEFCOM-PC</p></div>
                        </div>
                        <div className='absolute right-0'>
                            <img src={headphone} alt="" className=' '/>
                        </div>
                    </div>

                    <div className=' flex justify-between pt-20'>
                        <div className='flex flex-col gap-1 px-4 text-[30px] justify-center w-[64px] h-[64px] bg-black rounded-xl'>
                            <div className=' w-[28px] h-2 rounded-md bg-lime-600'></div>
                            <div className='w-[32px] h-2 rounded-md bg-lime-600'></div>
                            <div className='w-[24px] h-2 rounded-md bg-lime-600'></div>
                        </div>
                        <div>
                            <h1 className='font-bold text-[20px]'>PPT APP</h1>
                            <p className='text-[16px]'>New way to write note, right there</p>
                        </div>
                        <div className='flex items-center text-[30px] justify-center w-[64px] h-[64px] text-white bg-lime-600 rounded-xl'>
                        <button onClick={() => {navigate("/PPT")}} className='flex items-center text-[30px] cursor-pointer justify-center w-[64px] h-[64px] text-white bg-lime-600 rounded-xl'>
                            <MdOutlineFileDownload />
                        </button>
                        </div>
                    </div>

                </div>

                <div className=' w-full bg-white text-black py-12 px-10'>
                    <div className='flex relative'>
                        <div className='w-[300px]'>
                            <h1 className='text-[16px] font-bold'>iSurvive-Map for Military Operations</h1>
                            <p className='text-[12px]'>iSurvice provides you with DayZ and Arma 3 maps, lets you place tactical markers (player positions, tents, meeting points,..) on it and automatically shares those markers with the friends in your group - without the need for accounts, a registration or other services! Furthermore it provides a loot-map for DayZ.</p>
                            <h1 className='text-[12px] font-bold pt-10 text-lime-900'>Updated on</h1>
                            <p className='text-[9px]'>March 12, 2025</p>
                            <div className='flex pt-10 items-center gap-2'><p><IoPhonePortraitOutline /></p><p className='text-[10px]'>MOBILE PHONE</p></div>
                            <div className='flex py-4 gap-2'><p><LuLaptopMinimal /></p><p className='text-[12px]'>DEFCOM-PC</p></div>
                        </div>
                        <div className='absolute right-0'>
                            <img src={headphone} alt="" className=' '/>
                        </div>
                    </div>

                    <div className=' flex justify-between pt-20'>
                        <div className='flex flex-col gap-1 px-4 text-[30px] justify-center w-[64px] h-[64px] bg-black rounded-xl'>
                            <div className=' w-[28px] h-2 rounded-md bg-lime-600'></div>
                            <div className='w-[32px] h-2 rounded-md bg-lime-600'></div>
                            <div className='w-[24px] h-2 rounded-md bg-lime-600'></div>
                        </div>
                        <div>
                            <h1 className='font-bold text-[20px]'>PPT APP</h1>
                            <p className='text-[16px]'>New way to write note, right there</p>
                        </div>
                        <div className='flex items-center text-[30px] justify-center w-[64px] h-[64px] text-white bg-lime-600 rounded-xl'>
                        <button onClick={() => {navigate("/PPT")}} className='flex items-center text-[30px] cursor-pointer justify-center w-[64px] h-[64px] text-white bg-lime-600 rounded-xl'>
                            <MdOutlineFileDownload />
                        </button>
                        </div>
                    </div>

                </div>

                <div className=' w-full bg-white text-black py-12 px-10'>
                    <div className='flex relative'>
                        <div className='w-[300px]'>
                            <h1 className='text-[16px] font-bold'>iSurvive-Map for Military Operations</h1>
                            <p className='text-[12px]'>iSurvice provides you with DayZ and Arma 3 maps, lets you place tactical markers (player positions, tents, meeting points,..) on it and automatically shares those markers with the friends in your group - without the need for accounts, a registration or other services! Furthermore it provides a loot-map for DayZ.</p>
                            <h1 className='text-[12px] font-bold pt-10 text-lime-900'>Updated on</h1>
                            <p className='text-[9px]'>March 12, 2025</p>
                            <div className='flex pt-10 items-center gap-2'><p><IoPhonePortraitOutline /></p><p className='text-[10px]'>MOBILE PHONE</p></div>
                            <div className='flex py-4 gap-2'><p><LuLaptopMinimal /></p><p className='text-[12px]'>DEFCOM-PC</p></div>
                        </div>
                        <div className='absolute right-0'>
                            <img src={headphone} alt="" className=' '/>
                        </div>
                    </div>

                    <div className=' flex justify-between pt-20'>
                        <div className='flex flex-col gap-1 px-4 text-[30px] justify-center w-[64px] h-[64px] bg-black rounded-xl'>
                            <div className=' w-[28px] h-2 rounded-md bg-lime-600'></div>
                            <div className='w-[32px] h-2 rounded-md bg-lime-600'></div>
                            <div className='w-[24px] h-2 rounded-md bg-lime-600'></div>
                        </div>
                        <div>
                            <h1 className='font-bold text-[20px]'>PPT APP</h1>
                            <p className='text-[16px]'>New way to write note, right there</p>
                        </div>
                        <div className='flex items-center text-[30px] justify-center w-[64px] h-[64px] text-white bg-lime-600 rounded-xl'>
                        <button onClick={() => {navigate("/PPT")}} className='flex items-center text-[30px] cursor-pointer justify-center w-[64px] h-[64px] text-white bg-lime-600 rounded-xl'>
                            <MdOutlineFileDownload />
                        </button>
                        </div>
                    </div>

                </div>

                <div className=' w-full bg-white text-black py-12 px-10'>
                    <div className='flex relative'>
                        <div className='w-[300px]'>
                            <h1 className='text-[16px] font-bold'>iSurvive-Map for Military Operations</h1>
                            <p className='text-[12px]'>iSurvice provides you with DayZ and Arma 3 maps, lets you place tactical markers (player positions, tents, meeting points,..) on it and automatically shares those markers with the friends in your group - without the need for accounts, a registration or other services! Furthermore it provides a loot-map for DayZ.</p>
                            <h1 className='text-[12px] font-bold pt-10 text-lime-900'>Updated on</h1>
                            <p className='text-[9px]'>March 12, 2025</p>
                            <div className='flex pt-10 items-center gap-2'><p><IoPhonePortraitOutline /></p><p className='text-[10px]'>MOBILE PHONE</p></div>
                            <div className='flex py-4 gap-2'><p><LuLaptopMinimal /></p><p className='text-[12px]'>DEFCOM-PC</p></div>
                        </div>
                        <div className='absolute right-0'>
                            <img src={headphone} alt="" className=' '/>
                        </div>
                    </div>

                    <div className=' flex justify-between pt-20'>
                        <div className='flex flex-col gap-1 px-4 text-[30px] justify-center w-[64px] h-[64px] bg-black rounded-xl'>
                            <div className=' w-[28px] h-2 rounded-md bg-lime-600'></div>
                            <div className='w-[32px] h-2 rounded-md bg-lime-600'></div>
                            <div className='w-[24px] h-2 rounded-md bg-lime-600'></div>
                        </div>
                        <div>
                            <h1 className='font-bold text-[20px]'>PPT APP</h1>
                            <p className='text-[16px]'>New way to write note, right there</p>
                        </div>
                        <div className='flex items-center text-[30px] justify-center w-[64px] h-[64px] text-white bg-lime-600 rounded-xl'>
                        <button onClick={() => {navigate("/PPT")}} className='flex items-center text-[30px] cursor-pointer justify-center w-[64px] h-[64px] text-white bg-lime-600 rounded-xl'>
                            <MdOutlineFileDownload />
                        </button>
                        </div>
                    </div>

                </div>

                <div className=' w-full bg-white text-black py-12 px-10'>
                    <div className='flex relative'>
                        <div className='w-[300px]'>
                            <h1 className='text-[16px] font-bold'>iSurvive-Map for Military Operations</h1>
                            <p className='text-[12px]'>iSurvice provides you with DayZ and Arma 3 maps, lets you place tactical markers (player positions, tents, meeting points,..) on it and automatically shares those markers with the friends in your group - without the need for accounts, a registration or other services! Furthermore it provides a loot-map for DayZ.</p>
                            <h1 className='text-[12px] font-bold pt-10 text-lime-900'>Updated on</h1>
                            <p className='text-[9px]'>March 12, 2025</p>
                            <div className='flex pt-10 items-center gap-2'><p><IoPhonePortraitOutline /></p><p className='text-[10px]'>MOBILE PHONE</p></div>
                            <div className='flex py-4 gap-2'><p><LuLaptopMinimal /></p><p className='text-[12px]'>DEFCOM-PC</p></div>
                        </div>
                        <div className='absolute right-0'>
                            <img src={headphone} alt="" className=' '/>
                        </div>
                    </div>

                    <div className=' flex justify-between pt-20'>
                        <div className='flex flex-col gap-1 px-4 text-[30px] justify-center w-[64px] h-[64px] bg-black rounded-xl'>
                            <div className=' w-[28px] h-2 rounded-md bg-lime-600'></div>
                            <div className='w-[32px] h-2 rounded-md bg-lime-600'></div>
                            <div className='w-[24px] h-2 rounded-md bg-lime-600'></div>
                        </div>
                        <div>
                            <h1 className='font-bold text-[20px]'>PPT APP</h1>
                            <p className='text-[16px]'>New way to write note, right there</p>
                        </div>
                        <div className='flex items-center text-[30px] justify-center w-[64px] h-[64px] text-white bg-lime-600 rounded-xl'>
                        <button onClick={() => {navigate("/PPT")}} className='flex items-center text-[30px] cursor-pointer justify-center w-[64px] h-[64px] text-white bg-lime-600 rounded-xl'>
                            <MdOutlineFileDownload />
                        </button>
                        </div>
                    </div>

                </div>

                <div className=' w-full bg-white text-black py-12 px-10'>
                    <div className='flex relative'>
                        <div className='w-[300px]'>
                            <h1 className='text-[16px] font-bold'>iSurvive-Map for Military Operations</h1>
                            <p className='text-[12px]'>iSurvice provides you with DayZ and Arma 3 maps, lets you place tactical markers (player positions, tents, meeting points,..) on it and automatically shares those markers with the friends in your group - without the need for accounts, a registration or other services! Furthermore it provides a loot-map for DayZ.</p>
                            <h1 className='text-[12px] font-bold pt-10 text-lime-900'>Updated on</h1>
                            <p className='text-[9px]'>March 12, 2025</p>
                            <div className='flex pt-10 items-center gap-2'><p><IoPhonePortraitOutline /></p><p className='text-[10px]'>MOBILE PHONE</p></div>
                            <div className='flex py-4 gap-2'><p><LuLaptopMinimal /></p><p className='text-[12px]'>DEFCOM-PC</p></div>
                        </div>
                        <div className='absolute right-0'>
                            <img src={headphone} alt="" className=' '/>
                        </div>
                    </div>

                    <div className=' flex justify-between pt-20'>
                        <div className='flex flex-col gap-1 px-4 text-[30px] justify-center w-[64px] h-[64px] bg-black rounded-xl'>
                            <div className=' w-[28px] h-2 rounded-md bg-lime-600'></div>
                            <div className='w-[32px] h-2 rounded-md bg-lime-600'></div>
                            <div className='w-[24px] h-2 rounded-md bg-lime-600'></div>
                        </div>
                        <div>
                            <h1 className='font-bold text-[20px]'>PPT APP</h1>
                            <p className='text-[16px]'>New way to write note, right there</p>
                        </div>
                        <div className='flex items-center text-[30px] justify-center w-[64px] h-[64px] text-white bg-lime-600 rounded-xl'>
                            <button onClick={() => {navigate("/PPT")}} className='flex items-center text-[30px] cursor-pointer justify-center w-[64px] h-[64px] text-white bg-lime-600 rounded-xl'>
                                <MdOutlineFileDownload />
                            </button>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default MedicalApp

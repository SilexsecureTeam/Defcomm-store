import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaWalkieTalkie } from "react-icons/fa6";
import USArmy from "../../../../../../assets/USArmy.png"
import NigeriaFlag from "../../../../../../assets/NigeriaFlag.png"
import walkietalkie from "../../../../../../assets/walkie-talkie.png"
import defcommlogo from "../../../../../../assets/defcommlogo.png"
import { BiBell } from "react-icons/bi"
import Vectorbox from "../../../../../../assets/Vector box (2).png"
import mdimessagesecure from "../../../../../../assets/mdi_message-secure.png"
import carbonibmcloudsysdigsecure from "../../../../../../assets/carbon_ibm-cloud-sysdig-secure.png"
import fluentsyncoff20regular from "../../../../../../assets/fluent_sync-off-20-regular.png"
import fluentchat20regular from "../../../../../../assets/fluent_chat-20-regular.png"
import carboncheckbox from "../../.././../../../assets/carbon_checkbox.png"
import mdimessagesecureblack from "../../../../../../assets/mdi_message-secureblack.png"
import volume from "../../../../../../assets/ion_volume-medium.png"
import motorcycle1 from "../../../../../../assets/motorcycle 1.png"
import gameiconsnetworkbars from "../../../../../../assets/game-icons_network-bars.png"
import circumlocationon from "../../../../../../assets/circum_location-on.png"
import replay from "../../../../../../assets/replay 1.png"
import icons8group from "../../../../../../assets/icons8-group-100 1.png"
import Iconbusiness from "../../../../../../assets/Icon Business.png"
import SoundRecording from "../../../../../../assets/Sound Recording.png"
import ionvolumemediumblack from "../../../../../../assets/ion_volume-mediumblack.png" 
import Icon from "../../../../../../assets/Icon.png"
import imgs from "../../../../../../assets/2137.png"
import { FaArrowRight } from "react-icons/fa";
// import defcommlogo from "../../../../../../assets/defcommlogo.png"

function PPT() {
    return (

        <>
            <div className='bg-black px-10 py-30 text-white w-full'>
                
                <div className='flex justify-between py-14  px-10'>
                    <div className=' leading-9'>
                        <h1 className='text-[36px] font-bold '>About this</h1>
                        <p className='text-[24px] text-gray-400'>DefcommV 13</p>
                    </div>
                            
                    <div className='flex items-center gap-14'>
                        <div className='flex gap-4  leading-6 ' >
                            <p className='text-[20px] font-bold'>3 queued <br/><span className='text-[14px] font-light'>5 Note, Tiles for TV, Core...</span></p>
                        </div>

                        <div className='font-bold text-[24px]'><IoIosArrowForward /></div>
                    </div>            
                </div>

                <div className='flex bg-neutral-900  p-20 text-white'>
                    <div>
                        <div className='flex gap-14 items-center'>
                            <div className='bg-black p-14 rounded-4xl text-lime-400 text-[110px] '> <FaWalkieTalkie /></div>
                            
                            <div className='text-[24px]'>
                                <h1 className='text-lime-400 text-[40px]'>DefComm PPT</h1>
                                <p>OS: Defcomm O.s</p>
                                <p>Version:12</p>
                                <p>Branch: Alpha</p>
                                <p>Serial: 0000-OEM</p>
                            </div>
                        </div>
                        
                        <div className='bg-lime-500 text-[24px] rounded-2xl text-center mt-40 py-4 px-6'>
                            Update now
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

            <div className='bg-white px-10 py-14 '>
                <div className='flex justify-between '>
                   <div className='relative h-[860px] w-[400px]'>
                        <img src={USArmy} alt="" className='h-full w-full' />
                        <div className='absolute  h-full w-full top-0 bg-deffcomarmy-lime opacity-50'></div>
                        <img src={NigeriaFlag} alt="NigeriaLogo" className='absolute top-10 left-4 w-[32px] h-[32px]' />
                        <div className=' absolute bottom-32 left-40 flex items-center justify-center rounded-2xl bg-red-600 w-[95px] h-[140px]'><img src={walkietalkie } alt="" className='w-[60px]' /></div>
                   </div>
                    
                   <div className='relative h-[860px] w-[400px] overflow-x-hidden'>
                        <div className='absolute h-full w-full  bg-deffcomarmy-lime'></div>
                        
                        <div className='flex items-center justify-between absolute top-0 w-full p-2'>
                            <img src={defcommlogo} alt="" className=' h-[55px] w-[55px]' />
                            <div className='text-2xl border border-lime-600 text-white flex justify-center items-center rounded-[50px] w-[50px] h-[50px] '><BiBell /></div>
                        </div>

                        <div className='flex absolute top-8 py-10'> 
                            <div className='flex flex-col gap-1 justify-center px-2 bg-black w-[60px] h-[60px]'> 
                                <div className='bg-white w-6 h-1 rounded-md'></div>
                                <div className='bg-white w-10 h-1 rounded-md'></div>
                                <div className='bg-white w-8 h-1 rounded-md'></div>
                            </div>
                            <div className='flex items-center  justify-center bg-lime-600 w-[60px] text-4xl h-[60px]'><img src={replay} alt="" /></div>
                            <div className='flex items-center  justify-center bg-white w-[60px] h-[60px]'><img src={icons8group} alt="" /></div>
                            <div className='flex items-center  justify-center bg-black w-[60px] h-[60px]'><img src={circumlocationon} alt="" /></div>
                        </div>

                        <div className='flex items-center px-4 gap-6 absolute top-40'>

                                <div className='grid grid-cols-2 gap-1'>
                                    <div className='h-2 w-2 bg-white'></div>
                                    <div className='h-2 w-2 bg-white'></div>
                                    <div className='h-2 w-2 bg-white'></div>
                                    <div className='h-2 w-2 bg-white rounded-md'></div>
                                </div>
                                <p className='text-[20px] text-white'>Channels</p>
                        </div>

                        <div className='flex items-center px-4 gap-1 absolute top-50'>

                                <div className='text-white w-[80px] h-[80px] bg-lime-900/70 flex flex-col justify-center items-center'>
                                   <div><img src={Iconbusiness} alt="" /></div>
                                   <p className='text-[10px]'>Business</p>
                                   <p className='text-[14px]'>120</p>
                                </div>

                                <div className='text-white w-[80px] h-[80px] bg-lime-900/70 flex flex-col justify-center items-center'>
                                   <div><img src={Iconbusiness} alt="" /></div>
                                   <p className='text-[10px]'>Weapon</p>
                                   <p className='text-[14px]'>120</p>
                                </div>

                                <div className='text-white w-[80px] h-[80px] bg-lime-900/70 flex flex-col justify-center items-center'>
                                   <div><img src={Iconbusiness} alt="" /></div>
                                   <p className='text-[10px]'>Medical</p>
                                   <p className='text-[14px]'>120</p>
                                </div>

                                <div className='text-white w-[80px] h-[80px]  bg-lime-900/70 flex flex-col justify-center items-center'>
                                   <div><img src={Iconbusiness} alt="" /></div>
                                   <p className='text-[10px]'>Tacktical Ops</p>
                                   <p className='text-[14px]'>120</p>
                                </div>

                                <div className='text-white w-[80px] h-[80px] bg-lime-900/70 flex flex-col justify-center items-center'>
                                   {/* <div><img src={Iconbusiness} alt="" /></div> */}
                                   {/* <p className='text-[10px]'>Business</p> */}
                                   {/* <p className='text-[14px]'>120</p> */}
                                </div>
                               
                        </div>

                        <div className='absolute flex items-center justify-center px-4 h-[90px] top-75'>

                                <div className='flex flex-col px-4 items-center bg-red-700 gap-12   w-[30px]  h-full py-2'>
                                    <div className='w-[14px] h-[14px]'><img src={carboncheckbox} alt="" className='w-full h-full'/></div>
                                    <div className='w-[14px] h-[14px]'><img src={Vectorbox} alt="" className='w-full h-full'/></div>    
                                </div>
                                
                                <div className='  flex flex-col gap-2 px-1  bg-white  w-full h-full py-2'>
                                    
                                    <div className='flex justify-center items-center gap-1'>
                                        <p className='tracking-wide font-bold text-[12px]'>Emergency Room</p>
                                        <div><img src={mdimessagesecureblack} alt="" /></div>
                                        <div><img src={carbonibmcloudsysdigsecure} alt="" /></div>
                                        <div><img src={fluentsyncoff20regular} alt="" /></div>
                                        <div><img src={fluentchat20regular} alt="" /></div>
                                        <div><img src={volume} alt="" className='w-6' /></div>
                                        <div className='flex  gap-[1px] '>
                                            <div className='h-2 w-0.5 bg-lime-700 '></div>
                                            <div className='h-2 w-0.5 bg-lime-700 '></div>
                                            <div className='h-2 w-0.5 bg-lime-700 '></div>
                                            <div className='h-2 w-0.5 bg-lime-700 '></div>
                                            <div className='h-2 w-0.5 bg-lime-700 '></div>
                                            <div className='h-2 w-0.5 bg-black '></div>
                                            <div className='h-2 w-0.5 bg-black '></div>
                                            <div className='h-2 w-0.5 bg-black '></div>
                                            <div className='h-2 w-0.5 bg-black '></div>
                                            <div className='h-2 w-0.5 bg-black '></div>
                                            <div className='h-2 w-0.5 bg-black '></div>
                                            <div className='h-2 w-0.5 bg-black '></div>
                                            <div className='h-2 w-0.5 bg-black '></div>
                                        </div>
                                        <div><img src={motorcycle1} alt="" /></div>
                                        <div><img src={gameiconsnetworkbars} alt="" /></div>
                                    </div>
                                    <div>
                                        <img src={SoundRecording} alt="" className='w-[220px] h-[30px]'/>
                                    </div>
                                    <div className='flex'>
                                        <div className='w-36 h-1 bg-lime-900'></div>
                                        <div  className='w-10 h-1 bg-gray-100'></div>
                                        <div  className='w-20 h-1 bg-lime-600'></div>
                                        <div  className='w-16 h-1 bg-gray-100'></div>
                                    </div>
                                </div>

                                
                        </div>
                        
                        <div className='absolute flex items-center justify-center px-4 h-[90px] top-[400px]'>

                            <div className='flex flex-col px-4 items-center bg-red-700 gap-12   w-[30px]  h-full py-2'>
                                <div className='w-[14px] h-[14px]'><img src={carboncheckbox} alt="" className='w-full h-full'/></div>
                                <div className='w-[14px] h-[14px]'><img src={Vectorbox} alt="" className='w-full h-full'/></div>    
                            </div>

                            <div className='  flex flex-col gap-2 px-1  bg-white  w-full h-full py-2'>
                                
                                <div className='flex justify-center items-center gap-1'>
                                    <p className='tracking-wide font-bold text-[12px]'>Emergency Room</p>
                                    <div><img src={mdimessagesecure} alt="" /></div>
                                    <div><img src={carbonibmcloudsysdigsecure} alt="" /></div>
                                    <div><img src={fluentsyncoff20regular} alt="" /></div>
                                    <div><img src={fluentchat20regular} alt="" /></div>
                                    <div><img src={volume} alt="" className='w-6' /></div>
                                    <div className='flex  gap-[1px] '>
                                        <div className='h-2 w-0.5 bg-lime-700 '></div>
                                        <div className='h-2 w-0.5 bg-lime-700 '></div>
                                        <div className='h-2 w-0.5 bg-lime-700 '></div>
                                        <div className='h-2 w-0.5 bg-lime-700 '></div>
                                        <div className='h-2 w-0.5 bg-lime-700 '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                    </div>
                                    <div><img src={motorcycle1} alt="" /></div>
                                    <div><img src={gameiconsnetworkbars} alt="" /></div>
                                </div>
                                <div>
                                    <img src={SoundRecording} alt="" className='w-[220px] h-[30px]'/>
                                </div>
                                <div className='flex'>
                                    <div className='w-36 h-1 bg-lime-900'></div>
                                    <div  className='w-10 h-1 bg-gray-100'></div>
                                    <div  className='w-20 h-1 bg-lime-600'></div>
                                    <div  className='w-16 h-1 bg-gray-100'></div>
                                </div>
                            </div>


                        </div>

                        <div className='absolute flex items-center justify-center px-4 h-[90px] top-[500px]'>

                            <div className='flex flex-col px-4 items-center bg-red-700 gap-12   w-[30px]  h-full py-2'>
                                <div className='w-[14px] h-[14px]'><img src={carboncheckbox} alt="" className='w-full h-full'/></div>
                                <div className='w-[14px] h-[14px]'><img src={Vectorbox} alt="" className='w-full h-full'/></div>    
                            </div>

                            <div className='  flex flex-col gap-2 px-1  bg-white  w-full h-full py-2'>
                                
                                <div className='flex justify-center items-center gap-1'>
                                    <p className='tracking-wide font-bold text-[12px]'>Emergency Room</p>
                                    <div><img src={mdimessagesecure} alt="" /></div>
                                    <div><img src={carbonibmcloudsysdigsecure} alt="" /></div>
                                    <div><img src={fluentsyncoff20regular} alt="" /></div>
                                    <div><img src={fluentchat20regular} alt="" /></div>
                                    <div><img src={ionvolumemediumblack} alt="" className='w-6' /></div>
                                    <div className='flex  gap-[1px] '>
                                        <div className='h-2 w-0.5 bg-lime-700 '></div>
                                        <div className='h-2 w-0.5 bg-lime-700 '></div>
                                        <div className='h-2 w-0.5 bg-lime-700 '></div>
                                        <div className='h-2 w-0.5 bg-lime-700 '></div>
                                        <div className='h-2 w-0.5 bg-lime-700 '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                    </div>
                                    <div><img src={motorcycle1} alt="" /></div>
                                    <div><img src={gameiconsnetworkbars} alt="" /></div>
                                </div>
                                <div>
                                    <img src={SoundRecording} alt="" className='w-[220px] h-[30px]'/>
                                </div>
                                <div className='flex'>
                                    <div className='w-36 h-1 bg-lime-900'></div>
                                    <div  className='w-10 h-1 bg-gray-100'></div>
                                    <div  className='w-20 h-1 bg-lime-600'></div>
                                    <div  className='w-16 h-1 bg-gray-100'></div>
                                </div>
                            </div>


                        </div>

                        <div className='absolute flex items-center justify-center px-4 h-[90px] top-[600px]'>

                            <div className='flex flex-col px-4 items-center bg-red-700 gap-12   w-[30px]  h-full py-2'>
                                <div className='w-[14px] h-[14px]'><img src={carboncheckbox} alt="" className='w-full h-full'/></div>
                                <div className='w-[14px] h-[14px]'><img src={Vectorbox} alt="" className='w-full h-full'/></div>    
                            </div>

                            <div className='  flex flex-col gap-2 px-1  bg-white  w-full h-full py-2'>
                                
                                <div className='flex justify-center items-center gap-1'>
                                    <p className='tracking-wide font-bold text-[12px]'>Emergency Room</p>
                                    <div><img src={mdimessagesecure} alt="" /></div>
                                    <div><img src={carbonibmcloudsysdigsecure} alt="" /></div>
                                    <div><img src={fluentsyncoff20regular} alt="" /></div>
                                    <div><img src={fluentchat20regular} alt="" /></div>
                                    <div><img src={volume} alt="" className='w-6' /></div>
                                    <div className='flex  gap-[1px] '>
                                        <div className='h-2 w-0.5 bg-lime-700 '></div>
                                        <div className='h-2 w-0.5 bg-lime-700 '></div>
                                        <div className='h-2 w-0.5 bg-lime-700 '></div>
                                        <div className='h-2 w-0.5 bg-lime-700 '></div>
                                        <div className='h-2 w-0.5 bg-lime-700 '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                        <div className='h-2 w-0.5 bg-black '></div>
                                    </div>
                                    <div><img src={motorcycle1} alt="" /></div>
                                    <div><img src={gameiconsnetworkbars} alt="" /></div>
                                </div>
                                <div>
                                    <img src={SoundRecording} alt="" className='w-[220px] h-[30px]'/>
                                </div>
                                <div className='flex'>
                                    <div className='w-36 h-1 bg-lime-900'></div>
                                    <div  className='w-10 h-1 bg-gray-100'></div>
                                    <div  className='w-20 h-1 bg-lime-600'></div>
                                    <div  className='w-16 h-1 bg-gray-100'></div>
                                </div>
                            </div>


                        </div>

                        <div className='absolute w-full flex justify-center top-[720px]'>
                            <div className=' flex flex-col rounded-[50px] bg-lime-800 items-center justify-center px-4 w-[90px] h-[90px] '>
                                <img src={Icon} alt="" />
                                <p className='font-bold text-white'>TALK</p>
                            </div>
                        </div>
                   </div>
                   
                   <div className='relative h-[860px] w-[400px]'>
                    <img src={imgs} alt="" className='w-full h-full'/>
                   </div>

                </div>


                <div className='px-10 py-20'>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-4'>
                            <p className='text-[40px] font-bold'>05</p>
                            <p className='text-white px-8 py-4 grid items-center justify-center bg-lime-600 rounded-4xl text-[30px] font-bold'>App Description</p>
                        </div>
                        <div className='px-10 py-6 rounded-[50px] text-4xl border border-black flex items-center justify-center'>
                            <FaArrowRight  />
                        </div>
                    </div>

                    <div className='px-16'>
                        <h1 className='font-bold py-6'>Now with Arma 3 support!</h1>
                        <p className='text-[20px]'>iZurvive provides you with DayZ and Arma 3 maps, lets you place tactical markers (player positions, tents, meeting points,..) on it and automatically shares those markers with the friends in your group - without the need for accounts, a registration or other services! Furthermore it provides a loot-map for DayZ.</p>
                        <p className='py-4 text-[20px]'> Finding and coordinating your team in the huge open world of DayZ and Arma 3 has never been easier!</p>
                    </div>
                    

                    <div className='flex items-center gap-10 py-20'>
                        <div className='flex justify-center items-center w-[100px] h-[100px] bg-lime-800 rounded-[50px]'> <img src={defcommlogo} alt="" className='w-[70px]'/></div>
                        <div>
                            <h1 className='text-[30px] font-bold'>- Cap John D.</h1>
                            <p className='text-[20px]'>Founded of Tech Innovators</p>
                        </div>
                    </div>

                    <div className='py'>
                        <div className='flex justify-between'>
                            
                            <div className='flex flex-col justify-center items-center border border-lime-700 w-[260px] h-[180px]'>
                                <h1 className='text-[48px] text-indigo-900 font-bold'>50k</h1>
                                 <p className='text-[18px]'>Downloads</p>
                            </div>

                            <div className='flex flex-col justify-center items-center border border-lime-700 w-[260px] h-[180px]'>
                                <h1 className='text-[48px] text-indigo-900 font-bold'>500+</h1>
                                 <p className='text-[18px]'>Review</p>
                            </div>

                            <div className='flex flex-col justify-center items-center border border-lime-700 w-[260px] h-[180px]'>
                                <h1 className='text-[48px] text-indigo-900 font-bold'>25k</h1>
                                 <p className='text-[18px]'>Ratings</p>
                            </div>

                            <div className='flex flex-col justify-center items-center border border-lime-700 w-[260px] h-[180px]'>
                                <h1 className='text-[48px] text-indigo-900 font-bold'>149.9</h1>
                                 <p className='text-[18px]'>MB</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
        
    )
}

export default PPT

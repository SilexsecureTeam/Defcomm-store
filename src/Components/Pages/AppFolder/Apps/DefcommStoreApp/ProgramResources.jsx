import React from "react";
import NavTwo from "../../../../Header/NavTwo";
import divOne from "../../../../../assets/arcticons_govee-home.png";
import divTwo from "../../../../../assets/grommet-icons_resources.png";
import divThree from "../../../../../assets/gg_profile.png";
import divFour from "../../../../../assets/Group 5338.png";
import divFive from "../../../../../assets/Vector.png";
import divSix from "../../../../../assets/Vector (1).png";
import divSeven from "../../../../../assets/secure 2.png";
import divEight from "../../../../../assets/icons8-contacts 1.png";
import VectorA from "../../../../../assets/VectorA.png";
import { TfiArrowRight } from "react-icons/tfi";
import apps from "../../../../../assets/clarity_vmw-app-outline-badged.png";
import appanalystic from "../../../../../assets/clarity_analytics-line.png";
import mynaui from "../../../../../assets/mynaui_user-circle-solid.png";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Groupone from "../../../../../assets/Group 5335.png";
import start from "../../../../../assets/material-icon-theme_verified.png";
import fileDev from "../../../../../assets/Secure File Sharing.png";
import militarymail from "../../../../../assets/Secure Email.png";
import Bullet from "../../../../../assets/Armour (1) 1.png";
import iSurvive from "../../../../../assets/militar 1.png";
import { TbCircleCheck } from "react-icons/tb";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Discover() {
  const [playDisplay, setPlayDisplay] = useState(true);
  const [showpage, setShowPage] = useState(false);
  
  const navigate = useNavigate()

  const handleClick = () => {

    navigate("/appSub")

  }


  return (
    <>
      <NavTwo />
      <div className="bg-deffcom-limagradiant py-20">
        <div className="flex pt-4 pb-20 justify-between px-20 ">
          <div className="p-4 bg-stone-600 border-l-8 border-lime-400">
            <img
              src={divOne}
              alt=""
              className="p-6 rounded-3xl bg-deffcom-lima"
            />
          </div>

          <div className={`flex gap-4 ${showpage ? "block" : "hidden" }`}>
           
           
            
            
          </div>
          
          <div className={`flex gap-4 ${showpage ? "hidden" : "block"}`}>
            <div  className={``}>
              <img
                src={divTwo}
                alt=""
                className={`p-6 rounded-3xl ${
                  playDisplay ? "bg-white" : "bg-lime-400"
                }`}
              />
            </div>
            <div 
            >
              <img
                src={divThree}
                alt=""
              className="p-6  rounded-3xl bg-lime-900/20"

              
              />
            </div>
            
            <div
          >
              <img
                src={divFour}
                alt=""
            className="p-6  rounded-3xl bg-lime-900/20"

                
              />
            </div>
            <div>
              <img
                src={divFive}
                alt=""
            className="p-6  rounded-3xl bg-lime-900/20"
             
              />
            </div>
            <div>
              <img
                src={divSix}
                alt=""
                className="p-6  rounded-3xl bg-lime-900/20"

              />
            </div>
            <div>
              <img
                src={divSeven}
                alt=""
                className="p-6  rounded-3xl bg-lime-900/20"

              />
            </div>
            <div>
              <img
                src={divEight}
                alt=""
                className="p-6  rounded-3xl bg-lime-900/20"

              />
            </div>
          </div>
          <div className={`flex items-center gap-4 ${showpage ? "block" : "hidden" }`}>
            <h1 className="text-[40px] text-white">Defcomm New App Submition</h1>
            <div
                    className="bg-deffcom-lima border-2 border-lime-400 w-14 h-14 flex justify-center items-center rounded-4xl text-white"
                    onClick={handleClick}
                  >
                    <FaPlus />
                  </div>
          </div>
          

        </div>

        <div>
          {playDisplay ? (
            <div className={`   `}>
              <h1 className="px-20 py-8 text-white text-[40px]">
                Programs Resources
              </h1>

              <div className="flex gap-10 py-10 px-20">
                <div className="flex   ">
                  <div className="flex gap-70 rounded-l-[20px] flex-col justify-center items-center bg-amber-100 px-10 ">
                    <img src={VectorA} alt="" className="" />
                    <div className="bg-black w-14 h-14 flex justify-center items-center rounded-4xl text-white">
                      <TfiArrowRight />
                    </div>
                  </div>

                  <div className="flex flex-col py-10 gap-50 rounded-r-[20px] bg-gray-400 px-6">
                    <div>
                      <h1 className="font-bold text-[40px]">
                        Defcomm Store Connect
                      </h1>
                      <div className="flex gap-4 py-2 items-center">
                        <img src={apps} alt="" className="w-8" />
                        <p className="hover:underline cursor-pointer"
                        onClick={() => setPlayDisplay(!playDisplay)}>Apps</p>
                      </div>
                      <div className="flex gap-4 items-center">
                        <img src={appanalystic} alt="" className="w-8" />
                        <p className="hover:underline">App Analytics</p>
                      </div>

                      <div className="flex gap-4 py-2 items-center">
                        <img src={mynaui} alt="" className="w-8" />
                        <p className="hover:underline">Users and Access</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-[30px] underline">Get Started</p>
                    </div>
                  </div>
                </div>

                <div className="bg-deffcom-lima text-white rounded-[20px]  py-10 px-6">
                  <div>
                    <h1 className="text-[40px] ">
                      Certificates, IDs & Profiles{" "}
                    </h1>
                    <p className="py-5">
                      Manage the certificates, identifiers, profiles, and
                      devices required to develop, test, and distribute apps
                    </p>
                    <div className="">
                      <h1 className="underline">Competions</h1>
                      <p>Create, view and edit competition</p>
                    </div>
                    <div className="py-2">
                      <h1 className="underline">Games Settings</h1>
                      <p>View, modify and add registered games</p>
                    </div>
                    <div className="">
                      <h1 className="underline">Device List</h1>
                      <p>View, modify and add registered games</p>
                    </div>
                    <div className="py-2">
                      <h1 className="underline">App Settings</h1>
                      <p>View and your Dash Replenishment app settings</p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-center pt-20">
                    <div className="bg-black w-14 h-14 flex justify-center items-center rounded-4xl text-white">
                      <TfiArrowRight />
                    </div>
                    <p className="underline ">Get Started</p>
                  </div>
                </div>

                <div className="flex flex-col gap-8 rounded-[20px]  ">
                  <div className="bg-lime-400 px-10 rounded-4xl py-10">
                    <div className="flex justify-between items-center ">
                      <p className="underline text-xl">Get Started</p>
                      <div className="bg-black w-14 h-14 flex justify-center items-center rounded-4xl text-white">
                        <TfiArrowRight />
                      </div>
                    </div>

                    <div className="pt-40">
                      <h1 className="text-[30px] ">Services</h1>
                      <p>View and manage your usage of developer services.</p>
                    </div>
                  </div>

                  <div className="bg-white px-10 rounded-4xl">
                    <div className="py-10">
                      <h1 className="text-[25px] ">Security settings</h1>
                    </div>
                    <div className="flex justify-between py-10 items-center pt-10">
                      <p className="underline text-xl">Get Started</p>
                      <div className="bg-black w-14 h-14 flex justify-center items-center rounded-4xl text-white">
                        <TfiArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className={`px-20 ${showpage ? "hidden" : "none"}`}>
                <div className="flex w-full justify-between items-center ">
                  <h1 className="py-8 text-white text-[40px]">
                    App Submission
                  </h1>
                  <div
                    className="bg-deffcom-lima border-2 border-lime-400 w-14 h-14 flex justify-center items-center rounded-4xl text-white"
                    onClick={() => setShowPage(!showpage)}
                  >
                    <FaPlus />
                  </div>
                </div>

                <div className={`flex `}>
                  <div className="rounded-l-[20px] py-10 bg-lime-400 px-10 ">
                    <img src={VectorA} alt="" className="" />
                  </div>

                  <div className="py-10 rounded-r-[20px] bg-white  px-10">
                    <div>
                      <h1 className="font-bold text-[40px]">
                        Defcomm Store <br /> Connect
                      </h1>

                      <div className=" relative grid grid-cols-5 items-center gap-20 min-w-[300px]">
                        <div className="py-2 items-center">
                          <div className="flex items-center justify-center border border-lime-900 h-30  w-30 flex rounded-[60px] items-center">
                            <img src={Groupone} alt="" />
                          </div>
                          <div className="py-4">
                            <p className="text-[20px] ">
                              <strong>Secure Call</strong>
                            </p>
                            <div className="flex  items-center leading-2">
                              <img src={start} alt="" className="w-6" />
                              <p className="text-[10px]">
                                DefOS 12.0.0 Ready for Distribution
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="py-2 items-center">
                          <div className="flex items-center justify-center border border-lime-900 h-30  w-30 flex rounded-[60px] items-center">
                            <img src={fileDev} alt="" className="w-20" />
                          </div>
                          <div className="py-4">
                            <p className="text-[20px] ">
                              <strong>FileDev Sharing</strong>
                            </p>
                            <div className="flex  items-center leading-2">
                              <img src={start} alt="" className="w-6" />
                              <p className="text-[10px]">
                                DefOS 12.0.0 Ready for Distribution
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="py-2 items-center">
                          <div className="flex items-center justify-center border border-lime-900 h-30  w-30 flex rounded-[60px] items-center">
                            <img src={militarymail} alt="" className="w-20" />
                          </div>
                          <div className="py-4">
                            <p className="text-[20px] ">
                              <strong>MilitaryMail</strong>
                            </p>
                            <div className="flex  items-center leading-2">
                              <img src={start} alt="" className="w-6" />
                              <p className="text-[10px]">
                                DefOS 12.0.0 Ready for Distribution
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="py-2 items-center">
                          <div className="flex items-center justify-center border border-lime-900 h-30  w-30 flex rounded-[60px] items-center">
                            <img src={Bullet} alt="" className="w-20" />
                          </div>
                          <div className="py-4">
                            <p className="text-[20px] ">
                              <strong>Bullet Precision</strong>
                            </p>
                            <div className="flex  items-center leading-2">
                              <img src={start} alt="" className="w-6" />
                              <p className="text-[10px]">
                                DefOS 12.0.0 Ready for Distribution
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="py-2 items-center">
                          <div className="flex items-center justify-center border border-lime-900 h-30  w-30 flex rounded-[60px] items-center">
                            <img src={iSurvive} alt="" className="w-20" />
                          </div>
                          <div className="py-4">
                            <p className="text-[20px] ">
                              <strong>iSurvive</strong>
                            </p>
                            <div className="flex  items-center leading-2">
                              <img src={start} alt="" className="w-6" />
                              <p className="text-[10px]">
                                DefOS 12.0.0 Ready for Distribution
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="py-2 items-center">
                          <div className="flex items-center justify-center border border-lime-900 h-30  w-30 flex rounded-[60px] items-center">
                            <img src={Groupone} alt="" className="" />
                          </div>
                          <div className="py-4">
                            <p className="text-[20px] ">
                              <strong>Secure Call</strong>
                            </p>
                            <div className="flex  items-center leading-2">
                              <img src={start} alt="" className="w-6" />
                              <p className="text-[10px]">
                                DefOS 12.0.0 Ready for Distribution
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="py-2 items-center">
                          <div className="flex items-center justify-center border border-lime-900 h-30  w-30 flex rounded-[60px] items-center">
                            <img src={Groupone} alt="" className="" />
                          </div>
                          <div className="py-4">
                            <p className="text-[20px] ">
                              <strong>Secure Call</strong>
                            </p>
                            <div className="flex  items-center leading-2">
                              <img src={start} alt="" className="w-6" />
                              <p className="text-[10px]">
                                DefOS 12.0.0 Ready for Distribution
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="py-2 items-center">
                          <div className="flex items-center justify-center border border-lime-900 h-30  w-30 flex rounded-[60px] items-center">
                            <img src={Groupone} alt="" />
                          </div>
                          <div className="py-4">
                            <p className="text-[20px] ">
                              <strong>Secure Call</strong>
                            </p>
                            <div className="flex  items-center leading-2">
                              <img src={start} alt="" className="w-6" />
                              <p className="text-[10px]">
                                DefOS 12.0.0 Ready for Distribution
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="py-2 items-center">
                          <div className="flex items-center justify-center border border-lime-900 h-30  w-30 flex rounded-[60px] items-center">
                            <img src={Groupone} alt="" />
                          </div>
                          <div className="py-4">
                            <p className="text-[20px] ">
                              <strong>Secure Call</strong>
                            </p>
                            <div className="flex  items-center leading-2">
                              <img src={start} alt="" className="w-6" />
                              <p className="text-[10px]">
                                DefOS 12.0.0 Ready for Distribution
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="absolute right-6 bottom-14 bg-black w-14 h-14 flex justify-center items-center rounded-4xl text-white">
                          <TfiArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`px-20 ${showpage ? "block" : "hidden"}`}>
                <div className={`flex `}>
                  <div className="rounded-l-[20px] py-10 bg-lime-400 px-10 ">
                    <img src={VectorA} alt="" className="" />
                  </div>

                  <div className="relative grid pt-20 pb-30 rounded-r-[20px] bg-white w-full  px-40">
                    <label htmlFor="" className="">App Name</label>
                    <input type="text" placeholder="Max 100 Character" className=" rounded-xl px-4 py-3 text-sm outline-none obg-gray-200 min-w-[300px] mb-8 bg-gray-200"/>

                    <label htmlFor="">APP Description</label>
                    <input type="text" placeholder="Max 200 Charactter" className=" rounded-xl px-4 py-10 text-sm outline-none obg-gray-200 min-w-[300px] mb-8 bg-gray-200"/>


                    <label htmlFor="">App Categories</label>
                    <input type="text" placeholder="Choose Categories"  className=" rounded-xl px-4 py-3 text-sm outline-none obg-gray-200 min-w-[300px] mb-8 bg-gray-200"/>

                    <div className="flex justify-between">
                      <h1 className="font-bold py-3">App New User</h1>
                      <p className="flex items-center gap-4"><TbCircleCheck /> use my default support information</p>

                    </div>

                    
                    <label htmlFor="">
                    Customer support email address
                    </label>
                    <input type="text" placeholder="server@defcomm.ng" className="rounded-xl px-4 py-3 text-sm outline-none obg-gray-200 min-w-[300px] mb-8 bg-gray-200"/>


                    <label htmlFor="">Customers support phone</label>
                    <input type="text" placeholder="+234 ********43" className=" rounded-xl px-4 py-3 text-sm outline-none obg-gray-200 min-w-[300px] mb-8 bg-gray-200"/>

                    <label htmlFor="">Customers Support Email(Optional)</label>
                    <input type="text" placeholder="www.defcomm.ng" className="rounded-xl px-4 py-3 text-sm outline-none obg-gray-200 min-w-[300px] mb-8 bg-gray-200"/>

                    <div
                    className="bg-black w-14 h-14 absolute right-10 bottom-10 flex justify-center items-center rounded-4xl text-white"
                  >




                    <FiArrowRight />
                  </div>
                    

                  </div>
                </div>
              </div>


            </>
          )}
``        </div>
``      </div>
    </>
  );
}

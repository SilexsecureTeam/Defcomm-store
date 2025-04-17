import React from "react";
import { useNavigate } from "react-router-dom";
import { CgArrowTopRight } from "react-icons/cg";
import Nav from "../../Header/Nav";
import FooterTwo from "../../Footer/FooterTwo";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import defcommlogo from "../../../assets/defcommlogo.png";
import { LuCheck } from "react-icons/lu";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Membership() {
  const [changeText, setChangeText] = useState("individual");
  const [showForm, setShowForm] = useState(false);
  const [loginPassword, setLoginPassword] = useState(false);
  const [createAcct, setCreateAcct] = useState(false);
  const [activeTab, setActiveTab] = useState("register");
  const [passwordeye, setPasswordEye] = useState(false);

  const navigate = useNavigate();

  const listofregistration = {
   individual: [
        {
          bold: "Legal Name: ",
          text: " Your full legal name is required to enter into agreements with Apple. This name will also appear as the seller name for your apps on the App Store."
        },
        {
          bold: "Contact Information: ",
          text: " You must provide a valid email, phone number, and physical address. P.O. boxes are not accepted"
        }
      ],
    organization: [
      {
        bold: "Legal Binding Authority: ",
        text: "As the Account Holder, you must have the legal authority to bind your organization to agreements with Defcomm. This means you must be the owner/founder, an executive team member, a senior project lead, or an employee with legal authority granted by a senior leader.",
      },
      {
        bold: "Legal Entity Name and Status: ",
        text: "Your organization must be a registered legal entity that can enter into contracts with Defcomm. DBAs, fictitious business names, trade names, or branches are not accepted. The legal entity name will appear as the seller name on the App Store.",
      },
      { 
        bold: "License DPCOs No: ",
        text: "Except for government entities, your organization must have a License DPCOs, assigned by NDPC, to verify its identity, legal entity status, and address. You can check whether your organization already has a License DPCOs No and request one if needed.",
      },
      { 
        bold: "Phone and Email: ",
        text: "Your work email must be associated with your organization’s domain name.",
      },
      {
        bold: "Website: ",
        text: "Your organization must have a publicly accessible website, with a domain name linked to your organisation.",
      }
]};

  const handleChange = () => {
    setLoginPassword(!loginPassword);
    setCreateAcct(!createAcct);
  };

  return (
    <>
      <Nav />
      <div className="flex mx-4 md:mx-10 pt-30 flex-col text-[15px] font-[poppins] text-white items-center justify-center bg-deffcom-lime  ">
        <div className="md:w-[700px] ">
          <h1 className="font-bold w-full text-center text-[25px] md:text-[52px]">
            {changeText == "individual"
              ? "Become a Member"
              : "Enrolling your Organization"}
          </h1>
          <p className="py-2 px-4 md:px-10 text-[12px] md:text-md w-full text-justify md:text-center ">
            Becoming a developer for Defcomm Encrypted Solutions involves a
            structured process to ensure developer understand the platform,
            access necessary tools, and can build secure and innovative
            applications. Here's a step-by-step walkthrough:{" "}
          </p>
        </div>
      </div>

      <div className="flex mx-4 md:mx-10  flex-col text-[12px] md:text-[15px] font-[poppins] pb-20 md:pb-40 text-white items-center  bg-deffcom-lime   ">
        <hr className="hidden md:block mt-6 w-full text-neutral-100/10" />

        <div className="w-full px-4 md:w-[700px]  md:px-16 py-10 flex justify-between">
          <p
            onClick={() => {
              setChangeText("individual");
              setShowForm(false);
            }}
            className={`flex-1 text-[9px] md:text-[15px] text-center md:py-3 font-medium cursor-pointer ${
              changeText === "individual"
                ? "text-[#D1FF00] border-b-1 md:border-b-2 border-lime-400"
                : "text-white"
            }`}
          >
            Enrolling as an individual
          </p>

          <p
            onClick={() => {
              setChangeText("organization");
              setShowForm(false);
            }}
            className={`flex-1 text-[9px] md:text-[15px] text-center md:py-3 font-medium cursor-pointer ${
              changeText === "organization"
                ? "text-[#D1FF00] border-b-1 md:border-b-2 border-lime-400"
                : "text-white"
            }`}
          >
            Enrolling your Organization
          </p>
        </div>

        <div 
        // className="flex flex-col items-center justify-center w-full"
        >
          {/* Individual Form */}
          {changeText === "individual" &&
            (showForm ? (
              <>
                <div className="bg-white flex justify-center text-black p-8 rounded-2xl shadow-lg w-full max-w-4xl">
                  <form
                  // onSubmit={(e) => {
                  //   e.preventDefault();
                  // }}
                  >
                    <div className="flex items-center justify-between py-4 min-w-[270px] md:min-w-[300px]">
                      <div className="flex items-center  justify-between">
                        <div className="flex gap-4">
                          <div
                            className={`cursor-pointer underline-offset-8 ${
                              activeTab === "register"
                                ? "underline decoration-pink-500"
                                : ""
                            }`}
                          >
                            Register
                          </div>

                          <div
                            className={`cursor-pointer underline-offset-8 ${
                              activeTab === "login"
                                ? "underline decoration-pink-500"
                                : ""
                            }`}
                            onClick={() => {
                              setActiveTab("login");
                              navigate("/login");
                            }}
                          >
                            Login
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center items-center my-4 w-[40px] h-[40px] bg-lime-800 rounded-[50px]">
                      <img
                        src={defcommlogo}
                        alt=""
                        className="w-[30px] md:w-[30px]"
                      />
                    </div>
                    <p className="text-xs text-gray-500">
                      or register with email
                    </p>

                    <div
                      className={`${loginPassword ? "hidden" : "block"} ${
                        createAcct ? "hidden" : "none"
                      }`}
                    >
                      <div className="my-2">
                        <label htmlFor="email" className="block ">
                          Email:
                        </label>

                        <div className=" flex mb-1 justify-between items-center border rounded-xl py-1  border-gray-300">
                          <input
                            type="email"
                            id="email"
                            className="text-sm font-medium w-full px-4 outline-none py-2 "
                            placeholder="example@mail.com"
                          />
                          <div className="text-sm md:text-lg text-lime-700 mx-2">
                            <LuCheck />
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="w-full bg-[#36460A] text-white py-3 rounded-xl hover:bg-[#2e360c]"
                        onClick={() => setLoginPassword(!loginPassword)}
                      >
                        Create Account
                      </button>
                      <label className="flex items-center gap-2 text-xs my-4">
                        <input type="checkbox" />
                        Send me news and promotions
                      </label>
                    </div>

                    <div className={`${loginPassword ? "block" : "hidden"} `}>
                      <div className="my-2">
                        <label htmlFor="password" className="block ">
                          Password:
                        </label>

                        <div className=" flex justify-between items-center border rounded-xl py-1  border-gray-300">
                          <input
                            type={`${passwordeye ? "text" : "password"}`}
                            id="email"
                            className="text-sm font-medium w-full px-4 outline-none py-2 "
                            placeholder="********"
                          />
                          <div className="flex px-2">
                            <div className="text-lg text-lime-700 mx-2">
                              <LuCheck />
                            </div>
                            <div
                              onClick={() => setPasswordEye(!passwordeye)}
                              className="text-lg "
                            >
                              {passwordeye ? <GoEye /> : <GoEyeClosed />}
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </div>
                      <p className="text-xs  mb-4">8+ character</p>

                      <button
                        type="button"
                        className="w-full bg-[#36460A] text-white py-3 rounded-xl hover:bg-[#2e360c]"
                        onClick={handleChange}
                      >
                        Login
                      </button>
                      <label className="flex items-center gap-2 text-xs my-4">
                        <input type="checkbox" />
                        Remember Me
                      </label>
                      <div className="flex justify-center items center text-[9px]">
                        <p className="text-neutral-400">
                          By continuing I agree with the{" "}
                          <span
                            onClick={() => {
                              navigate("/termofuse");
                            }}
                            className="text-black cursor-pointer"
                          >
                            Terms & Conditions
                          </span>{" "}
                          <span
                            onClick={() => {
                              navigate("/privacy");
                            }}
                            className="text-black cursor-pointer"
                          >
                            Privacy Policy
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className={`${createAcct ? "block" : "hidden"}`}>
                      <div className="my-2">
                        <label htmlFor="email" className="block ">
                          Email:
                        </label>
                        <div className=" flex mb-1 justify-between items-center border rounded-xl py-1  border-gray-300">
                          <input
                            type="email"
                            id="email"
                            className="text-sm font-medium w-full px-4 outline-none py-2 "
                            placeholder="example@mail.com"
                          />
                          <div className="text-lg text-lime-700 mx-2">
                            <LuCheck />
                          </div>
                        </div>

                        <label htmlFor="password" className="block ">
                          Password:
                        </label>
                        <div className=" flex justify-between items-center border rounded-xl py-1  border-gray-300">
                          <input
                            type={`${passwordeye ? "text" : "password"}`}
                            id="email"
                            className="text-sm font-medium w-full px-4 outline-none py-2 "
                            placeholder="********"
                          />
                          <div className="flex px-2">
                            <div className="text-lg text-lime-700 mx-2">
                              <LuCheck />
                            </div>
                            <div
                              onClick={() => setPasswordEye(!passwordeye)}
                              className="text-lg "
                            >
                              {passwordeye ? <GoEye /> : <GoEyeClosed />}
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs  mb-4">8+ character</p>

                      <button
                        type="submit"
                        className="w-full bg-[#36460A] text-white py-3 rounded-xl hover:bg-[#2e360c]"
                      >
                        Create Account
                      </button>
                      <label className="flex items-center text-xs my-4 gap-2 ">
                        <input type="checkbox" />
                        Send me news and promotions
                      </label>
                      <div className="flex justify-center items center text-[9px]">
                        <p className="text-neutral-400">
                          By continuing I agree with the{" "}
                          <span
                            onClick={() => {
                              navigate("/termofuse");
                            }}
                            className="text-black cursor-pointer"
                          >
                            Terms & Conditions
                          </span>{" "}
                          <span
                            onClick={() => {
                              navigate("/privacy");
                            }}
                            className="text-black cursor-pointer"
                          >
                            Privacy Policy
                          </span>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              <div className="px-4 w-full md:w-[700px] ">
                <p className=" text-lime-400 py-3">
                  Verification Process
                </p>
                <p className="px-4 w-full md:w-[700px]  pb-4">
                  During enrollment, Apple will confirm the following;
                </p>
                <p className="px-4 w-full md:w-[700px]  pb-4 ">
                  If you are an individual or a sole proprietor/single-person
                  business, you must have an Defcomm Account with two-factor
                  authentication enabled and be of legal age. Ensure that you
                  use your legal name in the first and last name fields of your
                  Apple Account. Using an alias, nickname, or company name may
                  delay your enrolment approval.
                </p>
                {listofregistration[changeText].map((item, index) => (
                  <ul key={index} className="md:w-[700px]  text-[12px] px-6">
                    <li className="py-2"
                    style={{ listStyleType: "circle" }}><strong>{item.bold}</strong>{item.text}
                    
                    </li>
                    
                  </ul>
                ))}
              </div>
            ))}
        </div>

        {/* organization Form */}
        {changeText === "organization" &&
          (showForm ? (
            <>
              <div className="bg-white flex mx-4 justify-center text-black px-4 py-6 md:p-10 rounded-md shadow-lg  md:min-w-[300px]">
                <form>
                  <div className={`${createAcct ? "hidden" : "block"}`}>
                    <div className="flex flex-col justify-between md:flex-row ">
                      <div className="mb-4">

                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium mb-1"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full  py-2 px-4 text-sm border border-gray-300 rounded-xl"
                          placeholder="First Name"
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium mb-1"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-2 text-sm  border border-gray-300 rounded-xl"
                          placeholder="Last Name"
                        />
                      </div>

                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium mb-1"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        id="country"
                        className="w-full px-4 py-2  text-sm border border-gray-300 rounded-xl"
                        placeholder="Enter your country"
                      />
                    </div>

                    <div className="flex  items-center gap-2 mb-4">
                      <label className="block text-sm font-medium mb-1">
                        Gender:
                      </label>
                      <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            className="mr-2 rounded-xl"
                          />
                          Male
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            className="mr-2 rounded-xl"
                          />
                          Female
                        </label>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="birthday"
                        className="block text-sm font-medium mb-1"
                      >
                        Birthday
                      </label>
                      <input
                        type="date"
                        id="birthday"
                        className="w-full px-4 py-2  text-sm text-neutral-700 border border-gray-300 rounded-xl"
                      />
                      <small>
                        Let us know about your birthday so as not to miss a gift
                      </small>
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2  text-sm border border-gray-300 rounded-xl"
                        placeholder="example@mail.com"
                      />
                    </div>
                    <p className="text-xs">
                      This will be your new Defcomm Account
                    </p>
                    <div className="mb-4">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium mb-1"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded-xl"
                        placeholder="********"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="ConfirmPassword"
                        className="block text-sm font-medium mb-1"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        className="w-full px-4 py-2  text-sm border border-gray-300 rounded-xl"
                        placeholder="********"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-1"
                      >
                        Country Tel
                      </label>
                      <PhoneInput
                        country={"ng"}
                        inputStyle={{
                          width: "100%",
                          padding: "14px",
                          paddingLeft: "44px",
                          borderRadius: "0.375rem",
                          border: "1px solid #D1D5DB",
                        }}
                        placeholder="+234"
                        enableSearch

                        // onChange={(phone) => console.log(phone)}
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">
                        Verify With
                      </label>
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="verify"
                            value="text"
                            className=""
                          />
                          Text Message
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="radio" name="verify" value="email" />
                          Email
                        </label>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="w-full bg-[#36460A] text-white py-2 rounded hover:bg-[#2e360c]"
                      onClick={() => setCreateAcct(!createAcct)}
                    >
                      Continue
                    </button>
                  </div>
                  <div className={`${createAcct ? "block" : "hidden"}  text-center text-white`}>
                          <div className="min-w-[300px] bg-white rounded-md shadow-md">
                              <h1 className="font-bold text-black text-lg md:text-xl py-2 w-full">OTP Verifications</h1>
                              <div className="flex justify-between text-center items-center py-6 px-8">
                                <div className=" rounded-md bg-deffcom-lime flex justify-center items-center w-[30px] h-[30px] ">2</div>
                                <div className=" rounded-md bg-deffcom-lime flex justify-center items-center w-[30px] h-[30px]">1</div>
                                <div className=" rounded-md bg-deffcom-lime flex justify-center items-center w-[30px] h-[30px]">3</div>
                                <div className=" rounded-md bg-deffcom-lime flex justify-center items-center w-[30px] h-[30px]">4</div>
                              </div>
                              <div className="py-3 px-6 my-3 rounded-xl bg-deffcom-lime">Resend Code to devices</div>
                              <div className="py-3 px-6 rounded-xl bg-black ">Can't get to your device?</div>
                          </div>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <div className=" px-4 w-full md:w-[700px]">
              <p className=" text-lime-400 py-3">
                Verification Process
              </p>
              <p className="md:w-[700px]  pb-4">
                During enrollment, Apple will confirm the following;
              </p>
              <p className="md:w-[700px]  pb-4 ">
                To enroll your organization in the Defcomm Developer Program,
                you must have an Defcomm Account with two-factor authentication
                enabled. We recommend using your organization’s email address
                for your Defcomm Account. Additionally, ensure that your first
                and last names match your legal name—using an alias, nickname,
                or company name may delay your enrollment approval.
              </p>
              {listofregistration[changeText].map((item, index) =>  (
                <ul key={index} className="md:w-[700px] text-[12px] py-2  px-6">
                  <li style={{ listStyleType: "circle" }}>
                  <strong>{item.bold}</strong>{item.text}
                 </li>
                </ul>
              )
              )}
            </div>
          ))}

        <div className="md:w-[700px] flex py-4  gap-2 text-black ">
          <button
            onClick={() => setShowForm(true)}
            className={`py-2 px-5 text-xs bg-white rounded-md ${
              showForm ? "hidden" : "block"
            }`}
          >
            ENROLL NOW
          </button>

          <button
            onClick={() => setShowForm(true)}
            className={`bg-lime-600 p-2  rounded-[50px] ${
              showForm ? "hidden" : "block"
            }`}
          >
            <CgArrowTopRight />
          </button>
        </div>
      </div>

      <FooterTwo />
    </>
  );
}

export default Membership;

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
      "Legal Name: Your full legal name is required to enter into agreements with Apple. This name will also appear as the seller name for your apps on the App Store.",
      "Contact Information: You must provide a valid email, phone number, and physical address. P.O. boxes are not accepted",
    ],
    organization: [
      "Legal Binding Authority: As the Account Holder, you must have the legal authority to bind your organization to agreements with Defcomm. This means you must be the owner/founder, an executive team member, a senior project lead, or an employee with legal authority granted by a senior leader.",
      "Legal Entity Name and Status: Your organization must be a registered legal entity that can enter into contracts with Defcomm. DBAs, fictitious business names, trade names, or branches are not accepted. The legal entity name will appear as the seller name on the App Store.",
      "License DPCOs No: Except for government entities, your organization must have a License DPCOs, assigned by NDPC, to verify its identity, legal entity status, and address. You can check whether your organization already has a License DPCOs No and request one if needed.",
      "Phone and Email: Your work email must be associated with your organization’s domain name.",
      "Website: Your organization must have a publicly accessible website, with a domain name linked to your organisation.",
    ],
  };

  const handleChange = () => {
    setLoginPassword(!loginPassword);
    setCreateAcct(!createAcct);
  };

  return (
    <>
      <Nav />
      <div className="flex mx-10 pt-30 flex-col text-[15px] font-[poppins] text-white items-center justify-center bg-deffcom-lime  ">
        <div className="w-[700px] ">
          <h1 className="font-bold w-full text-center text-[52px]">
            {changeText == "individual"
              ? "Become a Member"
              : "Enrolling your Organization"}
          </h1>
          <p className="py-2 w-full text-center ">
            Becoming a developer for Defcomm Encrypted Solutions involves a
            structured process to ensure developer understand the platform,
            access necessary tools, and can build secure and innovative
            applications. Here's a step-by-step walkthrough:{" "}
          </p>
        </div>
      </div>

      <div className="flex mx-10  flex-col text-[15px] font-[poppins] pb-40 text-white items-center  bg-deffcom-lime   ">
        <hr className="mt-6 w-full text-neutral-100/10" />

        <div className="w-[700px] px-16 py-10 flex justify-between">
          <p
            onClick={() => {
              setChangeText("individual");
              setShowForm(false);
            }}
            className={`flex-1 text-center py-3 font-medium cursor-pointer ${
              changeText === "individual"
                ? "text-[#D1FF00] border-b-2 border-[#D1FF00]"
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
            className={`flex-1 text-center py-3 font-medium cursor-pointer ${
              changeText === "organization"
                ? "text-[#D1FF00] border-b-2 border-[#D1FF00]"
                : "text-white"
            }`}
          >
            Enrolling your Organization
          </p>
        </div>

        <div>
          {/* Individual Form */}
          {changeText === "individual" &&
            (showForm ? (
              <>
                <div className="bg-white flex justify-center text-black p-8 rounded-2xl shadow-lg w-full max-w-xl">
                  <form
                  // onSubmit={(e) => {
                  //   e.preventDefault();
                  // }}
                  >
                    <div className="flex items-center justify-between">
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
                          <div className="text-lg text-lime-700 mx-2">
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
              <>
                <p className="w-[700px] text-lime-400 py-3">
                  Verification Process
                </p>
                <p className="w-[700px]  pb-4">
                  During enrollment, Apple will confirm the following;
                </p>
                <p className="w-[700px]  ">
                  If you are an individual or a sole proprietor/single-person
                  business, you must have an Defcomm Account with two-factor
                  authentication enabled and be of legal age. Ensure that you
                  use your legal name in the first and last name fields of your
                  Apple Account. Using an alias, nickname, or company name may
                  delay your enrolment approval.
                </p>
                {listofregistration[changeText].map((item, index) => (
                  <ul key={index} className="w-[700px] text-[12px] px-6">
                    <li style={{ listStyleType: "circle" }}>{item}</li>
                  </ul>
                ))}
              </>
            ))}
        </div>

        {/* organization Form */}
        {changeText === "organization" &&
          (showForm ? (
            <>
              <div className="bg-white flex justify-center text-black p-8 rounded-md shadow-lg w-full max-w-md">
                <form>
                  <div className={`${createAcct ? "hidden" : "block"}`}>
                    <div className="flex space-x-6">
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
                          className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl"
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
                          className="w-full px-4 text-sm py-3 border border-gray-300 rounded-xl"
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
                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl"
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
                        className="w-full px-4 py-3 text-xs text-neutral-700 border border-gray-300 rounded-xl"
                      />
                      <small>
                        Let us know about your birthday so as not to miss a gift
                      </small>
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl"
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
                          <div className="max-w-md bg-white rounded-md shadow-md">
                              <h1 className="font-bold text-black text-xl py-4 w-full">OTP Verifications</h1>
                              <div className="flex justify-between items-center px-8">
                                <div className=" rounded-xl bg-deffcom-lime p-4">2</div>
                                <div className=" rounded-xl bg-deffcom-lime p-4">1</div>
                                <div className=" rounded-xl bg-deffcom-lime p-4">3</div>
                                <div className=" rounded-xl bg-deffcom-lime p-4">4</div>
                              </div>
                              <div className="py-3 px-6 my-3 rounded-xl bg-deffcom-lime">Resend Code to devices</div>
                              <div className="py-3 px-6 rounded-xl bg-black ">Can't get to your device?</div>
                          </div>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <>
              <p className="w-[700px] text-lime-400 py-3">
                Verification Process
              </p>
              <p className="w-[700px]  pb-4">
                During enrollment, Apple will confirm the following;
              </p>
              <p className="w-[700px]  ">
                To enroll your organization in the Defcomm Developer Program,
                you must have an Defcomm Account with two-factor authentication
                enabled. We recommend using your organization’s email address
                for your Defcomm Account. Additionally, ensure that your first
                and last names match your legal name—using an alias, nickname,
                or company name may delay your enrollment approval.
              </p>
              {listofregistration[changeText].map((item, index) => (
                <ul key={index} className="w-[700px] text-[12px] px-6">
                  <li style={{ listStyleType: "circle" }}>{item}</li>
                </ul>
              ))}
            </>
          ))}

        <div className="w-[700px] flex py-4  gap-2 text-black ">
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

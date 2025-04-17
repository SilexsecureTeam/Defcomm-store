import React from "react";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import SvgOne from "../LoginFolder/SVGs/SvgOne";
import SvgTwo from "../LoginFolder/SVGs/SvgTwo";
import SvgThree from "../LoginFolder/SVGs/SvgThree";
import Defcomm from "../../../assets/Defcomm-03 1.png";
import SvgFive from "../LoginFolder/SVGs/SvgFive";
import defcommlogo from "../../../assets/defcommlogo.png";
import { LiaLongArrowAltDownSolid } from "react-icons/lia";
import { LiaLongArrowAltUpSolid } from "react-icons/lia";
import { useNavigate, NavLink } from "react-router-dom";

function Login() {
  // For up rotation div
  const targetRef = useRef(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (val) => {
    console.log(val);
  });
  const rotationYscroll = useTransform(scrollY, [1, 400], ["0deg", "360deg"]);

  //For vector moves
  const moveDown = useTransform(scrollY, [0, 200], [0, 200]);
  const moveUp = useTransform(scrollY, [0, 200], [0, -160]);

  //For down rotation div
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (val) => {
    console.log(val);
  });
  const rotationYscrollDown = useTransform(
    scrollYProgress,
    [0, 1],
    ["0deg", "360deg"]
  );

  //for navigation to membership page
  const navigate = useNavigate();
  

  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();

    const { username, password } = inputValue;

    if (username.trim() === "" || password.trim() === "") {
      alert("Please fill in your details");
    }
  };

  return (
    <div className="relative bg-deffcom-lime h-[650px] md:h-[900px]">
      <div className="fixed px-2 z-30 left-0 top-0 w-full bg-nav-background flex justify-between bg-red-500 md:px-8 items-center">
       
        <NavLink to="/">
          <div>
            <img src={defcommlogo} alt="" className="w-[70px] h-[50px] md:w-[100px] md:h-[100px] " />
          </div>
        </NavLink>
        
        <div className=" w-[70px] md:text-xl text-center bg-white md:w-[130px] py-1 rounded-4xl">
          Login
        </div>
      </div>

      <div className="flex justify-center text-white h-[100%] pt-30">
        <motion.div
          className="hidden md:block absolute left-[380px] bottom-80"
          style={{ y: moveUp }}
        >
          <SvgOne />
          <p>
            Extra Dynamo Power. <br /> Waterproof And Anti-Dust
          </p>
        </motion.div>

        <motion.div
          className="hidden md:block absolute right-20 bottom-80"
          style={{ y: moveUp }}
        >
          <SvgTwo />
          <p className="px-26 ">
            The Propeller is as Stong as <br /> Steel as a feather.
          </p>
        </motion.div>

        <motion.div
          className="hidden md:block absolute left-[380px] top-58"
          style={{ y: moveDown }}
        >
          <p>
            Latest Version Of Wireless <br /> Remote Sensor Technology
          </p>
          <SvgThree />
        </motion.div>

        <div className=" bottom-100 absolute  left-0 md:bottom-40">
          <SvgFive />
        </div>

        <motion.div
          className="fixed z-30 top-[80px] right-4 md:top-20 md:right-40 text-white"
          style={{ rotate: rotationYscroll }}
          ref={targetRef}
        >
          <div className="relative w-[70px] h-[70px] md:w-[80px] md:h-[80px] flex items-center justify-center bg-lime-800 text-white text-4xl rounded-full">
            <p className="bg-black p-1 rounded-full text-[18px]">
              <LiaLongArrowAltDownSolid />
            </p>
            <svg className="absolute w-[60px] h-[60px]" viewBox="0 0 60 60">
              <defs>
                <path
                  id="circlePath"
                  d="M30,5 A25,25 0 1,1 29.99,5"
                  fill="transparent"
                />
              </defs>
              <text className="text-[6px] md:text-[8px] tracking-[6px] fill-white">
                <textPath
                  href="#circlePath"
                  startOffset="50%"
                  textAnchor="middle"
                >
                  P O E
                </textPath>
              </text>
            </svg>
          </div>
        </motion.div>

        <div className=" my-10 md:my-20 px-4 md:px-10 justify-center border-1 border-neutral-400/10 shadow-xl absolute md:ml-70 bg-deffcom-limetwo text-white w-[300px] h-[350px] md:w-[390px] md:h-[400px]">
         <form onSubmit={submitForm} className="flex gap-4 md:gap-6 flex-col py-8">
            <p className="font-bold w-full text-center my-4">Developer Login</p>
            <input
              type="username"
              name="username"
              onChange={handleChange}
              value={inputValue.username}
              placeholder="username"
              className="  border border-neutral-400/20  outline-none rounded-xl px-4  md:px-10 py-2 w-[270px] md:w-[300px]"
            />

            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={inputValue.password}
              placeholder="password"
              className="  border border-neutral-400/20 outline-none rounded-xl px-4 md:px-10 py-2 w-[270px] md:w-[300px]"
            />
            <button className="py-2 md:py-3 rounded-xl bg-black">Login</button>
          </form>
          
          <div className="flex text-xs justify-between">
            <button className="text-lime-400 cursor-pointer">
              Already have account?
            </button>
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="cursor-pointer"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>

      <div className="bg-deffcom-limetwo">
        <div className="w-full  text-center py-10 pb-20 text-white">
          <h1 className="text-[30px] md:text-[52px]">360 Degree Protection</h1>
          <p className="text-[12px] px-10  md:text-[18px] text-neutral-400">
            Dronerly.Inc is a company producing the highest quality VR Drones
            with the latest technology.
          </p>
        </div>
        <hr className=" md:mx-14 text-neutral-400  " />

        <div className="md:hidden block items-center text-xs justify-between py-8 text-white pb-14 px-14">
          <ul className="flex flex-col gap-4 md:flex-row justify-center items-center ">
              <li className="underline underline-offset-4">PRODUCT</li>
              <li className="underline underline-offset-4">SUPPORT</li>
              <li className="underline underline-offset-4">COOPERATION</li>
              <li className="underline underline-offset-4">COMMUNITY</li>
            </ul>
        </div>


        <div className="flex items-center px-4 text-xs justify-between  md:py-10 text-white md:pb-14 md:px-14">
          <div>
            <img src={Defcomm} alt="" className="w-[100px] md:w-[200px]" />
          </div>

          <div className="flex relative flex-col md:flex-row justify-center  items-center ">
            <ul className="hidden md:flex flex-col gap-4 md:flex-row justify-center items-center ">
              <li className="underline underline-offset-4">PRODUCT</li>
              <li className="underline underline-offset-4">SUPPORT</li>
              <li className="underline underline-offset-4">COOPERATION</li>
              <li className="underline underline-offset-4">COMMUNITY</li>
            </ul>

            <motion.div
              className="fixed right-4 z-30 bottom-20 md:bottom-40 md:right-20 text-lime-400 p-4 border border-lime-400 rounded-[50%]"
              style={{ rotate: rotationYscrollDown }}
              ref={targetRef}
            >
              <LiaLongArrowAltUpSolid />
            </motion.div>
          </div>

          <div className="">
            <p className="text-[10px]">&copy;Copyright Defcomm, All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

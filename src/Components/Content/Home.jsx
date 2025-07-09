import React, { useEffect, useState } from "react";
import { CiMobile1 } from "react-icons/ci";
import { SlScreenTablet } from "react-icons/sl";
import { MdLaptopChromebook } from "react-icons/md";
import { MdOutlineWatch } from "react-icons/md";
import { CgArrowTopRight } from "react-icons/cg";
import { BsDot } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import img1 from "../../assets/slide1.jpg";
import img2 from "../../assets/slide2.jpg";
import img3 from "../../assets/hero_img1.jpg";
import img4 from "../../assets/hero_img2.jpg";

import { NavLink, useNavigate } from "react-router-dom";

function Home({ slideShow = true }) {
  const imgslide = [img1, img2, img1, img2];
  const navigate = useNavigate();
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % imgslide.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-w-[300px] bg-deffcom-lime text-white px-4 pt-[20px] md:px-10 md:pt-[40px] md:mx-10">
      <div className="hidden md:block absolute right-10 top-[120px]">
        <ul className="flex gap-3 text-xs">
          <li className="active cursor-pointer flex gap-1 items-center">
            <p className="text-xl">
              <CiMobile1 />
            </p>
            MOBILE PHONE
          </li>

          <li className="active flex gap-1 cursor-pointer items-center">
            <p className="text-lg">
              <SlScreenTablet />
            </p>
            TABLET
          </li>

          <li className="active flex gap-1 cursor-pointer items-center">
            <p className="text-xl">
              <MdLaptopChromebook />
            </p>
            DEFCOM-PC
          </li>

          <li className="active flex gap-1 cursor-pointer items-center">
            <p className="text-xl">
              <MdOutlineWatch />
            </p>
            WATCH
          </li>
        </ul>
      </div>

      <div className="pt-20 md:pt-20 md:px-10">
        <div>
          <p className="flex md:py-8 items-center text-[13px]">
            {" "}
            <span className="text-lime-700 text-xl">
              <GoDotFill />
            </span>{" "}
            WE PROVIDE ABSOLUTE PRIVACY{" "}
          </p>
          <h1 className="text-3xl md:text-5xl tracking-tight lg:text-8xl">
            Transforming ideas into beautifully crafted products.
          </h1>
          <div className="flex py-4 md:py-8 gap-4 text-black ">
            <button
              className="py-2 px-5 bg-white cursor-pointer rounded-md"
              onClick={() => {
                navigate("/register");
              }}
            >
              GET STARTED
            </button>

            <button className="bg-lime-600 py-2 px-3 rounded-[50px]">
              <CgArrowTopRight />
            </button>
          </div>
        </div>

        {slideShow && (
          <div className="relative md:pt-20 overflow-x-hidden whitespace-nowrap w-full">
            <div className="flex  gap-10   animate-infinite-scroll w-max  h-96 md:h-[450px]">
              {[...imgslide, ...imgslide].map((img, index) => (
                <div key={index} className="flex-shrike-0">
                  <img src={img} alt={`slide-${index}`} className=" h-full" />
                </div>
              ))}
            </div>

            <div className="px-4 absolute w-full items-center justify-between bottom-[20px] flex text-stone-600 md:px-10">
              <div className="flex text-lime-900 md:text-4xl">
                <GoDotFill />
                <GoDotFill />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

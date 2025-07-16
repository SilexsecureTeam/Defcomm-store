import React from "react";
import { CiMobile1 } from "react-icons/ci";
import { SlScreenTablet } from "react-icons/sl";
import { MdLaptopChromebook, MdOutlineWatch } from "react-icons/md";
import { CgArrowTopRight } from "react-icons/cg";
import { GoDotFill } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import img1 from "../../assets/slide1.jpg";
import img2 from "../../assets/slide2.jpg";
import img3 from "../../assets/slide3.jpg";
import img4 from "../../assets/slide4.jpg";
import img5 from "../../assets/slide5.jpg";

import { useNavigate } from "react-router-dom";

const slideImages = [
  { src: img1, alt: "Privacy-first mobile interface" },
  { src: img2, alt: "User-friendly dashboard design" },
  { src: img3, alt: "Hero showcase product 1" },
  { src: img4, alt: "Hero showcase product 2" },
  { src: img5, alt: "Hero showcase product 3" },
];

const swiperOptions = {
  modules: [Autoplay, Pagination],
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { clickable: true, el: ".custom-swiper-pagination" },
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
};

function Home({ slideShow = true }) {
  const navigate = useNavigate();

  return (
    <div className="relative min-w-[300px] bg-deffcom-lime text-white px-4 pt-5 md:px-10 md:pt-10 md:mx-10">
      {/* Scoped Swiper Dot Styling */}
      <style>
        {`
          .custom-swiper-pagination {
            display: flex;
            gap: 0.75rem;
            position: absolute;
            bottom: 1rem;
            left: 1.25rem;
            z-index: 10;
          }
          .custom-swiper-pagination .swiper-pagination-bullet {
            width: 16px;
            height: 16px;
            background-color: #65a30d;
            opacity: 0.5;
            border-radius: 9999px;
            transition: all 0.3s ease;
          }
          .custom-swiper-pagination .swiper-pagination-bullet-active {
            background-color: white;
            opacity: 1;
            transform: scale(1.2);
          }
        `}
      </style>

      {/* Device Navigation (Only visible on desktop) */}
      <div className="hidden md:block absolute right-10 top-[120px]">
        <ul className="flex gap-3 text-xs">
          <li className="flex gap-1 cursor-pointer items-center">
            <p className="text-xl">
              <CiMobile1 />
            </p>{" "}
            MOBILE PHONE
          </li>
          <li className="flex gap-1 cursor-pointer items-center">
            <p className="text-lg">
              <SlScreenTablet />
            </p>{" "}
            TABLET
          </li>
          <li className="flex gap-1 cursor-pointer items-center">
            <p className="text-xl">
              <MdLaptopChromebook />
            </p>{" "}
            DEFCOM-PC
          </li>
          <li className="flex gap-1 cursor-pointer items-center">
            <p className="text-xl">
              <MdOutlineWatch />
            </p>{" "}
            WATCH
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="pt-20 md:px-10">
        <div>
          <p className="flex items-center text-[13px] md:py-8">
            <span className="text-lime-700 text-xl">
              <GoDotFill />
            </span>
            WE PROVIDE ABSOLUTE PRIVACY
          </p>
          <h1 className="text-3xl md:text-5xl tracking-tight lg:text-8xl">
            Transforming ideas into beautifully crafted products.
          </h1>
          <div
            onClick={() => navigate("/membership/individual")}
            className="cursor-pointer flex py-4 md:py-8 gap-4 text-black"
          >
            <button className="cursor-pointer py-2 px-5 bg-white rounded-md">
              GET STARTED
            </button>
            <button className="cursor-pointer bg-lime-600 py-2 px-3 rounded-full">
              <CgArrowTopRight />
            </button>
          </div>
        </div>

        {/* Swiper Section */}
        {slideShow && (
          <div className="relative md:pt-20 w-full">
            <Swiper {...swiperOptions} className="h-96 md:h-[450px] relative">
              {slideImages.map(({ src, alt }, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover object-top"
                  />
                </SwiperSlide>
              ))}
              <div className="custom-swiper-pagination" />
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

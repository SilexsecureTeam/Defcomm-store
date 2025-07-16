import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LuLaptopMinimal } from "react-icons/lu";
import { MdOutlineFileDownload } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function AppCard({ image, title, description, updated }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-black p-6 md:p-10 rounded-lg relative">
      <div className="md:flex gap-6 relative">
        <div className="md:w-[60%]">
          <h1 className="text-[16px] font-bold">{title}</h1>
          <p className="text-[12px] mt-2">{description}</p>
          <h2 className="text-[12px] font-bold pt-6 text-lime-900">
            Updated on
          </h2>
          <p className="text-[9px]">{updated}</p>

          <div className="flex pt-6 items-center gap-2 text-sm">
            <IoPhonePortraitOutline /> <span>MOBILE PHONE</span>
          </div>
          <div className="flex gap-2 pt-2 text-sm">
            <LuLaptopMinimal /> <span>DEFCOM-PC</span>
          </div>
        </div>
        <img
          src={image}
          alt=""
          className="absolute top-6 right-4 md:static md:opacity-100 opacity-30 max-w-[140px]"
        />
      </div>

      <div className="flex justify-between items-center pt-10">
        <div className="flex flex-col gap-1 px-4 text-[30px] justify-center w-[64px] h-[64px] bg-black rounded-xl">
          <div className="w-[28px] h-2 rounded-md bg-lime-600"></div>
          <div className="w-[32px] h-2 rounded-md bg-lime-600"></div>
          <div className="w-[24px] h-2 rounded-md bg-lime-600"></div>
        </div>
        <div className="px-2">
          <h1 className="font-bold text-[18px] md:text-[20px]">PPT APP</h1>
          <p className="text-sm">New way to write note, right there</p>
        </div>
        <button
          onClick={() => navigate("/PPT")}
          className="w-[64px] h-[64px] flex items-center justify-center text-[30px] text-white bg-lime-600 rounded-xl"
        >
          <MdOutlineFileDownload />
        </button>
      </div>
    </div>
  );
}

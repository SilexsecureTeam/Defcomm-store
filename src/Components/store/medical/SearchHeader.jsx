import React from "react";
import { IoIosSearch } from "react-icons/io";
import { MdMicNone } from "react-icons/md";

export default function SearchHeader() {
  return (
    <div className="flex flex-col gap-4 md:px-10 px-4">
      <div className="py-7 md:py-14">
        <h1 className="md:text-[36px] text-2xl font-bold text-white">Search</h1>
        <p className="md:text-[24px] text-gray-400">
          Search your favourite apps
        </p>
      </div>

      <div className="flex items-center gap-4 rounded-lg bg-neutral-900 px-4 md:rounded-2xl w-full">
        <div className="flex gap-4 items-center text-white">
          <IoIosSearch size={20} />
          <span>iSurvive</span>
        </div>
        <input
          type="text"
          className="flex-1 py-4 bg-transparent text-white outline-none"
        />
        <MdMicNone size={20} />
      </div>
    </div>
  );
}

import React from "react";

import { CgArrowTopRight } from "react-icons/cg";

function ActionButtons({ showForm, setShowForm }) {
  if (showForm) return null;

  return (
    <div className="flex gap-2 py-4 *:cursor-pointer">
      <button
        className="bg-white text-black text-xs py-2 px-5 rounded-md"
        onClick={() => setShowForm(true)}
      >
        ENROLL NOW
      </button>
      <button
        className="bg-lime-600 p-2 rounded-full"
        onClick={() => setShowForm(true)}
      >
        <CgArrowTopRight />
      </button>
    </div>
  );
}
export default ActionButtons;

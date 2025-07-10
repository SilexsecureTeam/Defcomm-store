import React from "react";
import { CgArrowTopRight } from "react-icons/cg";

function ActionButtons({
  showForm,
  setShowForm,
  authType = "register",
  changeText = "individual",
  navigate,
}) {
  if (showForm) return null;

  const handleClick = () => {
    setShowForm(true);
    navigate(`/membership/${changeText}/${authType}`);
  };

  return (
    <div className="flex gap-2 py-4 *:cursor-pointer">
      <button
        className="bg-white text-black text-xs py-2 px-5 rounded-md"
        onClick={handleClick}
      >
        ENROLL NOW
      </button>
      <button className="bg-lime-600 p-2 rounded-full" onClick={handleClick}>
        <CgArrowTopRight />
      </button>
    </div>
  );
}

export default ActionButtons;

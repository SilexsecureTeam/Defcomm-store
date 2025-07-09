import React from "react";

function HeaderSection({ changeText, passwordLogin, loginPassword }) {
  const isLogin = passwordLogin || loginPassword;
  return (
    <div className="flex flex-col items-center justify-center pt-30 bg-deffcom-lime text-white">
      <div className="md:w-[700px] text-center px-4">
        <h1
          className={`font-bold text-[25px] md:text-[52px] ${
            isLogin ? "hidden" : ""
          }`}
        >
          {changeText === "individual"
            ? "Become a Member"
            : "Enrolling your Organization"}
        </h1>
        {isLogin && (
          <h1 className="font-bold text-[25px] md:text-[52px]">
            Login as a member
          </h1>
        )}
        {!isLogin && (
          <p className="text-sm md:text-base py-2">
            Becoming a developer for Defcomm Encrypted Solutions involves a
            structured process to ensure developers understand the platform,
            access necessary tools, and can build secure and innovative
            applications. Here’s a step-by-step walkthrough:
          </p>
        )}
        {isLogin && (
          <p className="text-sm md:text-base py-2">
            One Defcomm Account is all you need to access all Defcomm Services.
            <span className="text-lime-400 ml-1 cursor-pointer">Register</span>
          </p>
        )}
      </div>
    </div>
  );
}
export default HeaderSection;

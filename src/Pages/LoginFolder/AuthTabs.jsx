import React from "react";

const AuthTabs = ({ activeTab, setActiveTab, setLoginPassword, setOtp }) => {
  return (
    <div className="flex items-center justify-between py-4 min-w-[270px] md:min-w-[300px]">
      <div className="flex gap-4">
        <div
          onClick={() => {
            setActiveTab("register");
            setLoginPassword(false);
          }}
          className={`cursor-pointer underline-offset-8 ${
            activeTab === "register" ? "underline decoration-pink-500" : ""
          }`}
        >
          Register
        </div>
        <div
          onClick={() => {
            setActiveTab("login");
            setLoginPassword(true);
            setOtp(false);
          }}
          className={`cursor-pointer underline-offset-8 ${
            activeTab === "login" ? "underline decoration-pink-500" : ""
          }`}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default AuthTabs;

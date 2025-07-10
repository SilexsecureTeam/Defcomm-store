import React from "react";

const AuthTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex items-center justify-between py-4 min-w-[270px] md:min-w-[300px]">
      <div className="flex gap-4">
        <div
          onClick={() => {
            setActiveTab("register");
          }}
          className={`cursor-pointer underline-offset-8 ${
            activeTab === "register"
              ? "pb-2 border-b-2 border-b-pink-500 text-black"
              : "text-gray-600"
          }`}
        >
          Register
        </div>
        <div
          onClick={() => {
            setActiveTab("login");
          }}
          className={`cursor-pointer underline-offset-8 ${
            activeTab === "login"
              ? "pb-2 border-b-2 border-b-pink-500 text-black"
              : "text-gray-600"
          }`}
        >
          Log in
        </div>
      </div>
    </div>
  );
};

export default AuthTabs;

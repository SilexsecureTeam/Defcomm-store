import React from "react";
import AuthForm from "./AuthForm";

const IndividualEnrollmentForm = ({
  loginPassword,
  setLoginPassword,
  passwordLogin,
  LoginClick,
  LoginChange,
  passwordChange,
  inputValue,
  createAcct,
  setCreateAcct,
  activeTab,
  setActiveTab,
  otp,
  setOtp,
  passwordeye,
  setPasswordEye,
}) => {
  return (
    <div className="w-full px-4 md:px-0 md:max-w-2xl mx-auto">
      <AuthForm
        loginPassword={loginPassword}
        setLoginPassword={setLoginPassword}
        passwordLogin={passwordLogin}
        LoginClick={LoginClick}
        LoginChange={LoginChange}
        passwordChange={passwordChange}
        inputValue={inputValue}
        createAcct={createAcct}
        setCreateAcct={setCreateAcct}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        otp={otp}
        setOtp={setOtp}
        passwordeye={passwordeye}
        setPasswordEye={setPasswordEye}
      />
    </div>
  );
};

export default IndividualEnrollmentForm;

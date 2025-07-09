import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../Header/Nav";
import FooterTwo from "../../Footer/FooterTwo";

import HeaderSection from "./HeaderSection";
import EnrollmentTabs from "./EnrollmentTabs";
import EnrollmentDescription from "./EnrollmentDescription";
import IndividualEnrollmentForm from "./IndividualEnrollmentForm";
import OrganizationEnrollmentForm from "./OrganizationEnrollmentForm";
import ActionButtons from "./ActionButtons";

import { listofregistration } from "../../../utils/dummies"; // external JSON or constants

const Membership = () => {
  const [changeText, setChangeText] = useState("individual");
  const [showForm, setShowForm] = useState(false);
  const [createAcct, setCreateAcct] = useState(false);
  const [activeTab, setActiveTab] = useState("register");
  const [loginPassword, setLoginPassword] = useState(false);
  const [passwordLogin, setPasswordLogin] = useState(false);
  const [otp, setOtp] = useState(false);
  const [passwordeye, setPasswordEye] = useState(false);

  const [inputValue, setInputValue] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const LoginClick = (e) => {
    e.preventDefault();
    if (inputValue.email === "") {
      alert("Please fill in your details");
    } else {
      setPasswordLogin(true);
    }
  };

  const LoginChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const passwordChange = () => {
    if (inputValue.password.length < 8) {
      alert("Password should be at least 8 characters");
      return;
    }
    navigate("/start");
  };

  return (
    <>
      <Nav />

      <HeaderSection
        changeText={changeText}
        passwordLogin={passwordLogin}
        loginPassword={loginPassword}
      />

      <div className="bg-deffcom-lime text-white font-[poppins] py-10 px-4 md:px-10">
        <EnrollmentTabs
          changeText={changeText}
          setChangeText={setChangeText}
          setShowForm={setShowForm}
        />

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {changeText === "individual" ? (
              showForm ? (
                <IndividualEnrollmentForm
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  setLoginPassword={setLoginPassword}
                  loginPassword={loginPassword}
                  passwordLogin={passwordLogin}
                  LoginClick={LoginClick}
                  LoginChange={LoginChange}
                  passwordChange={passwordChange}
                  passwordeye={passwordeye}
                  setPasswordEye={setPasswordEye}
                  inputValue={inputValue}
                  setCreateAcct={setCreateAcct}
                  createAcct={createAcct}
                  otp={otp}
                  setOtp={setOtp}
                />
              ) : (
                <EnrollmentDescription
                  type="individual"
                  list={listofregistration.individual}
                />
              )
            ) : showForm ? (
              <OrganizationEnrollmentForm
                createAcct={createAcct}
                setCreateAcct={setCreateAcct}
                otp={otp}
                setOtp={setOtp}
              />
            ) : (
              <EnrollmentDescription
                type="organization"
                list={listofregistration.organization}
              />
            )}
          </div>
        </div>

        <div className="flex max-w-4xl mx-auto">
          <ActionButtons showForm={showForm} setShowForm={setShowForm} />
        </div>
      </div>

      <FooterTwo />
    </>
  );
};

export default Membership;

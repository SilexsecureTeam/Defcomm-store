import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../Components/Header/Nav";
import FooterTwo from "../../Components/Footer/FooterTwo";

import HeaderSection from "./HeaderSection";
import EnrollmentTabs from "./EnrollmentTabs";
import EnrollmentDescription from "./EnrollmentDescription";
import IndividualEnrollmentForm from "./IndividualEnrollmentForm";
import OrganizationEnrollmentForm from "./OrganizationEnrollmentForm";
import ActionButtons from "./ActionButtons";

import { listofregistration } from "../../utils/dummies"; // external JSON or constants

const Membership = () => {
  const [changeText, setChangeText] = useState("individual");
  const [showForm, setShowForm] = useState(false);
  const [createAcct, setCreateAcct] = useState(false);
  const [activeTab, setActiveTab] = useState("register");
  const [loginPassword, setLoginPassword] = useState(false);
  const [passwordLogin, setPasswordLogin] = useState(false);
  const [otp, setOtp] = useState(false);

  const navigate = useNavigate();
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
                <IndividualEnrollmentForm />
              ) : (
                <EnrollmentDescription
                  type="individual"
                  list={listofregistration.individual}
                />
              )
            ) : showForm ? (
              <OrganizationEnrollmentForm />
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

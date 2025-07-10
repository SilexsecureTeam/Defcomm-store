import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../../Components/Header/Nav";
import FooterTwo from "../../Components/Footer/FooterTwo";

import HeaderSection from "./HeaderSection";
import EnrollmentTabs from "./EnrollmentTabs";
import EnrollmentDescription from "./EnrollmentDescription";
import IndividualEnrollmentForm from "./IndividualEnrollmentForm";
import OrganizationEnrollmentForm from "./OrganizationEnrollmentForm";
import ActionButtons from "./ActionButtons";

import { listofregistration } from "../../utils/dummies";

const Membership = () => {
  const { userType = "individual", authTab = "" } = useParams();

  const changeText = userType; // ✅ derived directly from URL
  const [showForm, setShowForm] = useState(
    authTab === "register" || authTab === "login"
  );
  const [activeTab, setActiveTab] = useState(authTab || "register");
  const [loginPassword, setLoginPassword] = useState(false);
  const [passwordLogin, setPasswordLogin] = useState(false);

  useEffect(() => {
    setActiveTab(authTab || "register");
    setShowForm(authTab === "register" || authTab === "login");
  }, [authTab]);

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
          setShowForm={setShowForm}
          showForm={showForm}
        />

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            {changeText === "individual" ? (
              showForm ? (
                <IndividualEnrollmentForm
                  activeTab={activeTab}
                  userType={changeText}
                />
              ) : (
                <EnrollmentDescription
                  type="individual"
                  list={listofregistration.individual}
                />
              )
            ) : showForm ? (
              <OrganizationEnrollmentForm
                activeTab={activeTab}
                userType={changeText}
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
          <ActionButtons
            showForm={showForm}
            setShowForm={setShowForm}
            authType={activeTab}
            changeText={changeText}
            navigate={useNavigate()}
          />
        </div>
      </div>

      <FooterTwo />
    </>
  );
};

export default Membership;

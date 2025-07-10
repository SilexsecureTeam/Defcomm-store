import React from "react";
import AuthForm from "./AuthForm";

const OrganizationEnrollmentForm = ({ activeTab, userType }) => {
  return (
    <div className="w-full px-4 md:px-0 md:max-w-2xl mx-auto">
      <AuthForm activeTab={activeTab} userType={userType} />
    </div>
  );
};

export default OrganizationEnrollmentForm;

import React from "react";
import OTPVerification from "./OTPVerification";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const OrganizationEnrollmentForm = ({ createAcct, setCreateAcct }) => {
  return (
    <div className="bg-white text-black rounded-md p-6 md:p-10 shadow-md w-full max-w-2xl mx-auto">
      <form>
        {!createAcct ? (
          <>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl"
                  placeholder="John"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Country</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl"
                placeholder="Enter your country"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Gender</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" value="male" />
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="gender" value="female" />
                  Female
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Birthday</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl"
              />
              <small className="text-gray-500">
                Let us know about your birthday so as not to miss a gift
              </small>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl"
                placeholder="example@company.com"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl"
                placeholder="********"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl"
                placeholder="********"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Country Tel
              </label>
              <PhoneInput
                country="ng"
                inputStyle={{
                  width: "100%",
                  padding: "14px",
                  paddingLeft: "44px",
                  borderRadius: "0.375rem",
                  border: "1px solid #D1D5DB",
                }}
                placeholder="+234"
                enableSearch
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">
                Verify With
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input type="radio" name="verify" value="text" />
                  Text Message
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="verify" value="email" />
                  Email
                </label>
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-[#36460A] text-white py-2 rounded hover:bg-[#2e360c]"
              onClick={() => setCreateAcct(true)}
            >
              Continue
            </button>
          </>
        ) : (
          <OTPVerification />
        )}
      </form>
    </div>
  );
};

export default OrganizationEnrollmentForm;

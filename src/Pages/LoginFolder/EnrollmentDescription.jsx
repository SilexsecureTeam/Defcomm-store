import React from "react";
import { listofregistration } from "../../utils/dummies";

const EnrollmentDescription = ({ type }) => {
  const list = listofregistration[type] || [];

  return (
    <div className="w-full mx-auto px-4">
      <p className="text-sm">
        If you are an individual or a sole proprietor/single-person business,
        you must have an Defcomm Account with two-factor authentication enabled
        and be of legal age*. Ensure that you use your legal name in the first
        and last name fields of your Apple Account. Using an alias, nickname, or
        company name may delay your enrolment approval.Verification Process
        During enrollment, Apple will confirm the following: Legal Name: Your
        full legal name is required to enter into agreements with Apple. This
        name will also appear as the seller name for your apps on the App Store.
        Contact Information: You must provide a valid email, phone number, and
        physical address. P.O. boxes are not accepted.
      </p>
      <h2 className="text-lime-400 font-semibold py-3 text-lg">
        Verification Process
      </h2>

      <p className="pb-4 text-sm md:text-base">
        During enrollment, Defcomm will confirm the following:
      </p>

      <p className="pb-4 text-sm md:text-base">
        {type === "individual"
          ? "Individuals must use legal names and enable two-factor authentication for Defcomm Accounts."
          : "Organizations must use verified company emails and legal names to avoid enrollment delays."}
      </p>

      {list.length > 0 && (
        <ul className="list-disc list-inside space-y-2 text-sm">
          {list.map((item, index) => (
            <li key={index}>
              <strong>{item.bold}</strong> {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EnrollmentDescription;

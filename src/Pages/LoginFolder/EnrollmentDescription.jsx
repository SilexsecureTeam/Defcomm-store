import React from "react";
import { listofregistration } from "../../utils/dummies";

const EnrollmentDescription = ({ type }) => {
  const list = listofregistration[type] || [];

  const introText = {
    individual:
      "If you are registering as an individual or a sole proprietor (single-person business), you must have a Defcomm Account with two-factor authentication enabled and be of legal age. You are required to use your full legal name in the first and last name fields of your account. The use of aliases, nicknames, or company names may cause delays in the approval of your enrollment.",
    organization:
      "Organizations must use verified company email addresses and their legal registered names to avoid delays in the enrollment process.",
  };

  const sectionTitle =
    type === "individual"
      ? "Verification Process for Individuals"
      : "Verification Process for Organizations";

  return (
    <div className="w-full mx-auto px-4">
      <p className="text-sm md:text-base pb-4">{introText[type]}</p>

      <h2 className="text-lime-400 font-semibold py-3 text-lg">
        {sectionTitle}
      </h2>

      {list.length > 0 && (
        <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
          {list.map((item, index) => (
            <li key={index}>
              <strong>{item.bold}</strong>
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EnrollmentDescription;

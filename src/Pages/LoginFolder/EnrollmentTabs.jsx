import React from "react";

const EnrollmentTabs = ({ changeText, setChangeText, setShowForm }) => {
  const tabs = [
    { key: "individual", label: "Enrolling as an Individual" },
    { key: "organization", label: "Enrolling your Organization" },
  ];

  return (
    <div className="w-full flex justify-center px-4 md:px-0 py-10">
      <div className="w-full max-w-[700px] flex gap-2 justify-between text-center overflow-x-auto">
        {tabs.map((tab) => (
          <p
            key={tab.key}
            className={`flex-1 cursor-pointer font-medium py-3 text-xs md:text-[15px] ${
              changeText === tab.key
                ? "text-[#D1FF00] border-b-2 border-lime-400"
                : "text-white border-b-2 border-white"
            }`}
            onClick={() => {
              setChangeText(tab.key);
              setShowForm(false);
            }}
          >
            {tab.label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default EnrollmentTabs;

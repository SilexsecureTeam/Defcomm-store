import React from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const AppVerificationStatusCard = ({ type, data, error }) => {
  const isSuccess = type === "success";

  return (
    <div
      className={`mt-4 w-full rounded-lg border p-4 text-sm transition-all duration-300 shadow-sm ${
        isSuccess
          ? "bg-green-50 border-green-300 text-green-700"
          : "bg-red-50 border-red-300 text-red-700"
      }`}
    >
      <div className="flex items-center gap-2 mb-2 font-medium">
        {isSuccess ? (
          <FaCheckCircle className="text-green-500" />
        ) : (
          <FaExclamationCircle className="text-red-500" />
        )}
        <span>
          {isSuccess
            ? "APK Signature Verified"
            : "Signature Verification Failed"}
        </span>
      </div>

      {isSuccess ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs">Name</span>
            <span className="font-medium text-gray-800">{data.name}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs">Package</span>
            <span className="font-medium text-gray-800 break-all">
              {data.package}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs">Version Code</span>
            <span className="font-medium text-gray-800">
              {data.versionCode}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 text-xs">Version Name</span>
            <span className="font-medium text-gray-800">
              {data.versionName}
            </span>
          </div>
        </div>
      ) : (
        <p className="text-xs">{error}</p>
      )}
    </div>
  );
};

export default AppVerificationStatusCard;

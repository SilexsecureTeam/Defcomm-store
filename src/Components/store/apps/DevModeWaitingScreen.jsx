import React from "react";
import { FiClock } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

const DevModeWaitingScreen = () => {
  const { authDetails } = useContext(AuthContext);
  const company = authDetails?.user?.developer_display_name || "Your Company";

  return (
    <div className="mx-auto mt-12 bg-white text-gray-800 rounded-3xl shadow-lg border border-yellow-200">
      <div className="p-10 md:p-16 space-y-6">
        {/* Header with icon and title */}
        <div className="flex items-center gap-4">
          <div className="bg-yellow-100 p-3 rounded-full">
            <FiClock className="text-yellow-500 text-3xl" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-600">
            Application Under Review
          </h1>
        </div>

        {/* Company branding */}
        <div className="border-l-4 border-yellow-400 pl-4">
          <p className="text-sm text-gray-500">Developer Name</p>
          <p className="text-xl font-semibold">{company}</p>
        </div>

        {/* Body message */}
        <p className="text-gray-600 leading-relaxed text-lg">
          Thank you for submitting your developer application. Our team is
          currently reviewing your submission. You will be notified via email
          and in your dashboard once the approval process is complete.
        </p>

        {/* Optional info */}
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl text-sm text-yellow-800">
          <p>
            If you have any questions or updates, please contact support at{" "}
            <a
              href="mailto:support@defcomm.store.com"
              className="underline font-medium"
            >
              support@defcomm.store.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevModeWaitingScreen;

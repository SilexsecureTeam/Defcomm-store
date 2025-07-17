import React, { useContext } from "react";
import { FiClock } from "react-icons/fi";
import { MdBlock } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { AuthContext } from "../../../context/AuthContext";

const DevModeStatusScreen = () => {
  const { authDetails } = useContext(AuthContext);
  const user = authDetails?.user;
  const company = user?.developer_display_name || "Your Company";
  const status = user?.statusApp?.toLowerCase() || "pending";
  const comment = user?.commentApp;

  const contactSupport = (colorScheme) => (
    <div
      className={`bg-${colorScheme}-50 border border-${colorScheme}-200 p-4 rounded-xl text-sm text-${colorScheme}-800 mt-4`}
    >
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
  );

  const renderCard = ({
    icon,
    iconBg,
    title,
    message,
    titleColor,
    borderColor,
    commentBg,
    commentBorder,
    commentText,
    supportColor,
  }) => (
    <div
      className={`mx-auto mt-12 bg-white text-gray-800 rounded-3xl shadow-lg border ${borderColor}`}
    >
      <div className="p-10 md:p-16 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-full ${iconBg}`}>{icon}</div>
          <h1 className={`text-2xl md:text-3xl font-bold ${titleColor}`}>
            {title}
          </h1>
        </div>

        {/* Developer Name */}
        <div className="border-l-4 border-gray-300 pl-4">
          <p className="text-sm text-gray-500">Developer Name</p>
          <p className="text-xl font-semibold">{company}</p>
        </div>

        {/* Main Message */}
        <p className="leading-relaxed text-lg text-gray-700">{message}</p>

        {/* Admin Comment */}
        {comment && (
          <div
            className={`border ${commentBorder} ${commentBg} p-4 rounded-xl`}
          >
            <p className="text-sm text-gray-500 mb-1">Admin Comment:</p>
            <p className={`text-base font-medium ${commentText} italic`}>
              {<span dangerouslySetInnerHTML={{ __html: comment }} />}
            </p>
          </div>
        )}

        {/* Contact Support */}
        {contactSupport(supportColor)}
      </div>
    </div>
  );

  switch (status) {
    case "pending":
      return renderCard({
        icon: <FiClock className="text-yellow-500 text-3xl" />,
        iconBg: "bg-yellow-100",
        title: "Application Under Review",
        message:
          "Thank you for submitting your developer application. Our team is currently reviewing your submission. You will be notified via email and in your dashboard once the approval process is complete.",
        titleColor: "text-yellow-600",
        borderColor: "border-yellow-200",
        commentBg: "bg-yellow-50",
        commentBorder: "border-yellow-200",
        commentText: "text-yellow-800",
        supportColor: "yellow",
      });

    case "reject":
      return renderCard({
        icon: <ImCross className="text-red-500 text-2xl" />,
        iconBg: "bg-red-100",
        title: "Application Rejected",
        message:
          "Unfortunately, your developer application was not approved at this time. You may contact support for clarification or to reapply in the future.",
        titleColor: "text-red-600",
        borderColor: "border-red-200",
        commentBg: "bg-red-50",
        commentBorder: "border-red-200",
        commentText: "text-red-800",
        supportColor: "red",
      });

    case "block":
      return renderCard({
        icon: <MdBlock className="text-gray-700 text-3xl" />,
        iconBg: "bg-gray-200",
        title: "Access Blocked",
        message:
          "Your developer access has been blocked. Please reach out to support if you believe this was in error or need further assistance.",
        titleColor: "text-gray-800",
        borderColor: "border-gray-400",
        commentBg: "bg-gray-50",
        commentBorder: "border-gray-200",
        commentText: "text-gray-700",
        supportColor: "gray",
      });

    default:
      return (
        <div className="text-center text-red-600 mt-10 font-semibold">
          Unknown application status.
        </div>
      );
  }
};

export default DevModeStatusScreen;

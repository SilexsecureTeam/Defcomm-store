import React from "react";
import { motion } from "framer-motion";
import {
  FaExclamationTriangle,
  FaBan,
  FaTimesCircle,
  FaPowerOff,
  FaCheckCircle,
} from "react-icons/fa";

export default function EmergencyRoom({ app, onToggle, isLoading }) {
  if (!app || !app.status) return null;

  const { status } = app;

  const statusConfig = {
    active: {
      icon: <FaCheckCircle className="text-green-400 text-3xl" />,
      title: "App is Live",
      message:
        "This app is currently live to the public. You can temporarily disable it here.",
      button: {
        label: "Disable App",
        disabled: false,
        style: "bg-red-600 hover:bg-red-700 text-white",
      },
    },
    disable: {
      icon: <FaPowerOff className="text-yellow-400 text-3xl" />,
      title: "App is Disabled",
      message:
        "This app is currently disabled and not available to the public.",
      button: {
        label: "App Disabled",
        disabled: true,
        style: "bg-gray-700 text-gray-400 cursor-not-allowed",
      },
    },
    block: {
      icon: <FaBan className="text-red-500 text-3xl" />,
      title: "App was Blocked",
      message:
        "This app has been blocked due to a serious violation. Please contact support.",
      button: {
        label: "Blocked",
        disabled: true,
        style: "bg-gray-800 text-gray-500 cursor-not-allowed",
      },
    },
    reject: {
      icon: <FaTimesCircle className="text-red-400 text-3xl" />,
      title: "App was Rejected",
      message:
        "This app was rejected during the review process. Check your submission details.",
      button: {
        label: "Rejected",
        disabled: true,
        style: "bg-gray-800 text-gray-500 cursor-not-allowed",
      },
    },
    pending: {
      icon: <FaExclamationTriangle className="text-yellow-300 text-3xl" />,
      title: "App Pending Approval",
      message:
        "This app is currently under review. You’ll be notified once the review is complete.",
      button: {
        label: "Pending Review",
        disabled: true,
        style: "bg-yellow-900 text-yellow-400 cursor-not-allowed",
      },
    },
  };

  const current = statusConfig[status?.toLowerCase()];
  if (!current) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0f0f0f] border border-red-600 rounded-xl p-6 space-y-4 shadow-lg"
    >
      <div className="flex items-center gap-4">
        {current.icon}
        <div>
          <h2 className="text-lg font-semibold text-white">{current.title}</h2>
          <p className="text-gray-400">{current.message}</p>
        </div>
      </div>

      <button
        onClick={onToggle}
        disabled={current.button.disabled || isLoading}
        className={`px-6 py-2 rounded-xl font-medium transition ${
          current.button.style
        } ${isLoading ? "opacity-50" : ""}`}
      >
        {isLoading ? "Processing..." : current.button.label}
      </button>
    </motion.div>
  );
}

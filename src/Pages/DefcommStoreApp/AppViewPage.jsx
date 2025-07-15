import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { TbDownload, TbShieldLock, TbMail, TbPhoneCall } from "react-icons/tb";
import { motion } from "framer-motion";
import useApp from "../../hooks/useApp";
import { FaSpinner, FaMobileAlt } from "react-icons/fa";

export default function AppViewPage() {
  const { id } = useParams();
  const { getAppByIdQuery } = useApp();
  const { data: app, isLoading } = getAppByIdQuery(id);

  const [iconError, setIconError] = useState(false);
  const [featureError, setFeatureError] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-80 flex items-center justify-center bg-black text-white">
        <FaSpinner className="animate-spin text-4xl text-lime-400" />
        <p className="ml-3 text-lg">Loading app...</p>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="min-h-80 flex items-center justify-center text-red-500">
        App not found.
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#0f1510] to-[#181e1b] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 space-y-12">
        {/* Header */}
        <motion.div
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="w-20 h-20 rounded-2xl border border-white/20 shadow-md bg-lime-900/20 flex items-center justify-center text-lime-400 text-3xl">
            {app.app_icon && !iconError ? (
              <img
                src={`${import.meta.env.VITE_BASE_URL}${app.app_icon}`}
                alt="App Icon"
                className="w-full h-full rounded-2xl object-cover"
                onError={() => setIconError(true)}
              />
            ) : (
              <FaMobileAlt />
            )}
          </div>

          <div className="flex-1 w-full">
            <h1 className="text-3xl font-bold text-white">
              {app.app_name || "Unnamed App"}
            </h1>
            <p className="text-sm text-gray-300 mt-1">
              {app.category || "Uncategorized"} • by{" "}
              <span className="font-semibold">
                {app.developer || "Unknown Developer"}
              </span>
            </p>
            <div className="flex gap-4 items-center text-sm text-gray-400 mt-2">
              <span>⭐ {app.rating || "4.5"}</span>
              <span className="text-gray-500">•</span>
              <span>{app.downloads || "1K+"} downloads</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="bg-lime-500 hover:bg-lime-600 text-black px-6 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-md"
          >
            <TbDownload size={18} /> Install
          </motion.button>
        </motion.div>

        {/* Feature Image */}
        <motion.div
          className="rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-black h-[420px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {app.feature_image && !featureError ? (
            <img
              src={`${import.meta.env.VITE_BASE_URL}${app.feature_image}`}
              alt="Feature"
              className="w-full h-full object-cover"
              onError={() => setFeatureError(true)}
            />
          ) : (
            <FaMobileAlt className="text-5xl text-gray-600" />
          )}
        </motion.div>

        {/* About */}
        <motion.div
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-lg p-6 md:p-8"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-3">
            About this app
          </h2>
          <p className="text-gray-300 text-[15px] leading-relaxed">
            {app.description || "No description provided."}
          </p>
        </motion.div>

        {/* Privacy & Support */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {/* Privacy */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <TbShieldLock /> Privacy
            </h3>
            {app.collect_data === "yes" ? (
              <ul className="list-disc pl-6 text-sm text-gray-300 space-y-1">
                {[
                  app.contact_name,
                  app.contact_email,
                  app.contact_phone,
                  app.contact_address,
                  app.contact_other,
                ]
                  .filter((item) => item && item !== "false")
                  .map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-400">
                This app does not collect personal data.
              </p>
            )}
            {app.policy && (
              <a
                href={app.policy}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-400 text-sm underline mt-3 inline-block"
              >
                View Privacy Policy
              </a>
            )}
          </div>

          {/* Support */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-3">Support</h3>
            <div className="text-sm text-gray-300 space-y-2">
              {app.email && (
                <p className="flex items-center gap-2">
                  <TbMail className="text-lime-400" /> {app.email}
                </p>
              )}
              {app.phone && (
                <p className="flex items-center gap-2">
                  <TbPhoneCall className="text-lime-400" /> {app.phone}
                </p>
              )}
              <p>
                <span className="font-semibold">Version:</span>{" "}
                {app.version || "1.0"}
              </p>
              <p>
                <span className="font-semibold">OS:</span> {app.os || "N/A"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

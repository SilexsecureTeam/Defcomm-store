import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TbDownload } from "react-icons/tb";
import { motion } from "framer-motion";
import useApp from "../../hooks/useApp";
import icon from "../../assets/logo-icon.png";
import img from "../../assets/2137.png";

export default function AppViewPage() {
  const { id } = useParams();
  const { getAppListQuery } = useApp();
  const [app, setApp] = useState(null);

  // Normalize data from backend
  const normalizeAppData = (data) => ({
    ...data,
    app_icon: icon,
    feature_image: img,
    rating: data.rating || (Math.random() * 1 + 4).toFixed(1), // Fake 4.0-5.0
    downloads: data.downloads || "1K+",
    collectsData: data.collect_data === "yes",
    privacy: [
      data.contact_name === "true" && "Name",
      data.contact_email === "true" && "Email",
      data.contact_phone === "true" && "Phone Number",
      data.contact_address === "true" && "Address",
      data.contact_other === "true" && "Other Info",
    ].filter(Boolean),
  });

  useEffect(() => {
    if (getAppListQuery.data && id) {
      const foundApp = getAppListQuery.data.find(
        (a) => String(a.id) === String(id)
      );
      if (foundApp) {
        setApp(normalizeAppData(foundApp));
      }
    }
  }, [getAppListQuery.data, id]);

  if (getAppListQuery.isLoading) {
    return <div className="p-10 text-center text-gray-400">Loading app...</div>;
  }

  if (!app) {
    return <div className="p-10 text-center text-red-500">App not found.</div>;
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
          <img
            src={app.app_icon}
            alt="App Icon"
            className="w-20 h-20 rounded-2xl object-cover border border-white/20 shadow-md"
          />
          <div className="flex-1 w-full">
            <h1 className="text-3xl font-bold text-white">{app.name}</h1>
            <p className="text-sm text-gray-300 mt-1">
              {app.category} • by{" "}
              <span className="font-semibold">
                {app.contact_name || "Anonymous"}
              </span>
            </p>
            <div className="flex gap-4 items-center text-sm text-gray-400 mt-2">
              <span>⭐ {app.rating}</span>
              <span className="text-gray-500">•</span>
              <span>{app.downloads} downloads</span>
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
          className="rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-black"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <img
            src={app.feature_image}
            alt="Feature"
            className="w-full h-[420px] object-cover"
          />
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
            {app.description}
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
            <h3 className="text-xl font-semibold text-white mb-3">Privacy</h3>
            {app.collectsData ? (
              <ul className="list-disc pl-6 text-sm text-gray-300 space-y-1">
                {app.privacy.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-400">
                This app does not collect data.
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
              {app.contact_email && (
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href={`mailto:${app.contact_email}`}
                    className="text-lime-400 underline"
                  >
                    {app.contact_email}
                  </a>
                </p>
              )}
              {app.contact_phone && (
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  {app.contact_phone}
                </p>
              )}
              <p>
                <span className="font-semibold">Version:</span>{" "}
                {app.version || "1.0"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

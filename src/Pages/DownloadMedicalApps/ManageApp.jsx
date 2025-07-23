import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import useApp from "../../hooks/useApp";
import AppDetails from "../../Components/store/AppDetails";
import StatCard from "../../Components/store/StatCard";
import EmergencyRoom from "../../Components/store/EmergencyRoom";

export default function ManageApp() {
  const { id } = useParams();
  const { getAppByIdQuery, updateAppStatusMutation } = useApp();
  const { data: app, isLoading, isError } = getAppByIdQuery(id);

  const isPending = updateAppStatusMutation.isPending;

  const handleToggleStatus = () => {
    if (!app) return;

    let newStatus = "";

    if (app.status === "approved") {
      newStatus = "active"; // First-time publish
    } else if (app.status === "active") {
      newStatus = "disable"; // Disable published app
    } else if (app.status === "disable") {
      newStatus = "active"; // Re-enable app
    } else {
      return;
    }

    updateAppStatusMutation.mutate({
      id,
      status: newStatus,
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-lime-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 font-bold text-xl">
        Failed to load app data. Please try again.
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 space-y-8 bg-[#1b1f10]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-4xl font-bold text-lime-400">{app?.app_name}</h1>
      </motion.div>

      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap gap-6"
      >
        <StatCard num="20+" label="Downloads" />
        <StatCard num="30+" label="Reviews" />
        <StatCard num="15+" label="Users" />
        <StatCard num="4.5★" label="Avg. Rating" />
      </motion.div>

      <AppDetails app={app} />

      {(app?.status === "approved" || app?.status === "disable") && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#0f0f0f] p-6 rounded-xl shadow-xl border border-lime-600 space-y-4"
        >
          <h3 className="text-xl font-semibold text-white">
            Ready to publish your app?
          </h3>
          <p className="text-gray-400">
            Your app has been verified. Click the button below to release it to
            the public.
          </p>
          <button
            onClick={handleToggleStatus}
            disabled={isPending}
            className="cursor-pointer bg-lime-500 hover:bg-lime-600 transition px-6 py-2 rounded-xl text-white font-medium disabled:opacity-50"
          >
            {isPending
              ? "Publishing..."
              : app.status === "disable"
              ? "Re-enable App"
              : "Publish App"}
          </button>
        </motion.div>
      )}

      <EmergencyRoom
        app={app}
        isLoading={isPending}
        onToggle={handleToggleStatus}
      />
    </div>
  );
}

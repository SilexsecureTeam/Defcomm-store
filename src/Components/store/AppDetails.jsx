import React from "react";

export default function AppDetails({ app }) {
  return (
    <div className="bg-[#222814] border border-[#2f3a1d] rounded-2xl p-6 md:p-8 text-gray-300 shadow-xl">
      <h2 className="text-2xl md:text-3xl font-semibold text-lime-400 mb-6">
        About
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
        <div className="space-y-2">
          <Detail label="OS" value={app?.os || "N/A"} />
          <Detail label="Version" value={app?.version || "N/A"} />
          <Detail label="Release" value={app?.release || "N/A"} />
        </div>
        <div className="space-y-2">
          <Detail label="App ID" value={app?.app_id || "N/A"} />
          <Detail
            label="Package Name"
            value={app?.app_id_name || "com.example.app"}
          />
          <Detail
            label="Last Updated"
            value={
              app?.updated_at
                ? new Date(app.updated_at).toLocaleDateString()
                : "N/A"
            }
          />
        </div>
      </div>

      {app?.comment && (
        <div className="mt-6">
          <h3 className="font-semibold text-lime-500">Comment</h3>
          <p className="text-sm text-gray-400 mt-1">{app.comment}</p>
        </div>
      )}
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <p className="text-sm md:text-base">
      <span className="text-gray-400 font-medium">{label}:</span>{" "}
      <span className="text-white">{value}</span>
    </p>
  );
}

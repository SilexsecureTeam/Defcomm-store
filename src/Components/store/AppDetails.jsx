import React from "react";
import DOMPurify from "dompurify";
export default function AppDetails({ app }) {
  return (
    <div className="bg-[#222814] border border-[#2f3a1d] rounded-2xl p-6 md:p-8 text-gray-300 shadow-xl">
      {/* Icon + Title */}
      <div className="flex items-center gap-4 mb-6">
        {app?.app_icon && (
          <img
            src={`${import.meta.env.VITE_BASE_URL}${app.app_icon}`}
            alt={`${app?.name || "App"} icon`}
            className="w-16 h-16 rounded-xl border border-[#2f3a1d] object-cover"
          />
        )}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-lime-400">
            {app?.app_name || "Unnamed App"}
          </h2>
          <p className="text-gray-400 text-sm">
            {app?.developer || "Unknown Developer"}
          </p>
        </div>
      </div>

      {/* Feature Image */}
      {app?.feature_image && (
        <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden mb-6 bg-slate-700/30">
          <img
            src={`${import.meta.env.VITE_BASE_URL}${app.feature_image}`}
            alt={`${app?.name || "App"} feature`}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* About Section */}
      <h3 className="text-xl font-semibold text-lime-400 mb-4">About</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
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

      {/* Comment */}
      {app?.comment && (
        <div className="mt-6">
          <h3 className="font-semibold text-lime-500">Comment</h3>
          <p
            className="text-sm text-gray-400 mt-1"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(app.comment),
            }}
          ></p>
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

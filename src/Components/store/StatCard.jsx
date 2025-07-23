import React from "react";

export default function StatCard({ num, label }) {
  return (
    <div className="flex-1 min-w-[120px] bg-white shadow-md border border-lime-700 rounded-xl p-6 text-center">
      <h1 className="text-4xl font-bold text-indigo-900">{num}</h1>
      <p className="text-lg text-gray-600">{label}</p>
    </div>
  );
}

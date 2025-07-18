import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  Line,
  Bar,
} from "recharts";
import {
  BsBarChartFill,
  BsGraphUpArrow,
  BsPeopleFill,
  BsStarFill,
} from "react-icons/bs";
import useApp from "../hooks/useApp";
import { growthData } from "../utils/dummies";

export default function AppAnalytics() {
  const { getMyAppListQuery } = useApp();
  const { data: apps = [] } = getMyAppListQuery;

  const enrichedApps = apps.map((app, index) => ({
    name: app.app_name || `App ${index + 1}`,
    downloads: Math.floor(Math.random() * 2000) + 500,
    activeUsers: Math.floor(Math.random() * 1000) + 200,
    revenue: Math.floor(Math.random() * 3000) + 100,
    rating: (Math.random() * 1.5 + 3.5).toFixed(1),
  }));

  const totalDownloads = enrichedApps.reduce(
    (sum, app) => sum + app.downloads,
    0
  );
  const totalUsers = enrichedApps.reduce(
    (sum, app) => sum + app.activeUsers,
    0
  );
  const totalRevenue = enrichedApps.reduce((sum, app) => sum + app.revenue, 0);
  const averageRating = (
    enrichedApps.reduce((sum, app) => sum + parseFloat(app.rating), 0) /
    enrichedApps.length
  ).toFixed(2);

  return (
    <div className="p-6 bg-[#1b1f10] min-h-screen text-white">
      <h2 className="text-2xl font-bold mb-6 text-lime-400">
        📊 App Analytics
      </h2>

      {/* Summary cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          {
            icon: <BsBarChartFill />,
            label: "Total Downloads",
            value: totalDownloads,
            bg: "bg-[#2e331c]",
          },
          {
            icon: <BsPeopleFill />,
            label: "Active Users",
            value: totalUsers,
            bg: "bg-[#24361f]",
          },
          {
            icon: <BsGraphUpArrow />,
            label: "Revenue",
            value: `$${totalRevenue.toLocaleString()}`,
            bg: "bg-[#352f1a]",
          },
          {
            icon: <BsStarFill />,
            label: "Avg. Rating",
            value: averageRating,
            bg: "bg-[#2d242e]",
          },
        ].map(({ icon, label, value, bg }, idx) => (
          <div
            key={idx}
            className={`${bg} border border-lime-500 rounded-xl shadow p-4`}
          >
            <div className="flex items-center gap-2 text-sm text-lime-300 mb-1">
              {icon} {label}
            </div>
            <h3 className="text-xl font-bold">{value}</h3>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-[#1f2414] rounded-xl shadow p-4">
          <h4 className="text-lg font-semibold text-lime-400 mb-2">
            📥 Downloads per App
          </h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={enrichedApps}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Legend />
              <Bar dataKey="downloads" fill="#84cc16" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#1f2414] rounded-xl shadow p-4">
          <h4 className="text-lg font-semibold text-lime-400 mb-2">
            📈 Downloads Growth
          </h4>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="downloads"
                stroke="#10b981"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#12150d] rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-[#1f2414] text-gray-300 border-b border-gray-700">
            <tr>
              <th className="p-3 text-left">App Name</th>
              <th className="p-3 text-left">Downloads</th>
              <th className="p-3 text-left">Active Users</th>
              <th className="p-3 text-left">Revenue</th>
              <th className="p-3 text-left">Rating</th>
            </tr>
          </thead>
          <tbody>
            {enrichedApps.map((app, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-700 hover:bg-[#1f2710]"
              >
                <td className="p-3 font-medium text-white">{app.name}</td>
                <td className="p-3 text-gray-300">
                  {app.downloads.toLocaleString()}
                </td>
                <td className="p-3 text-gray-300">
                  {app.activeUsers.toLocaleString()}
                </td>
                <td className="p-3 text-gray-300">
                  ${app.revenue.toLocaleString()}
                </td>
                <td className="p-3 text-lime-400">{app.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

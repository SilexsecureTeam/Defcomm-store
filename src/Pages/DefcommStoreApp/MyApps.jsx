import React from "react";
import VectorA from "../../assets/VectorA.png";
import HeaderBarTwo from "../../Components/store/HeaderBarTwo";
import HeaderBar from "../../Components/store/HeaderBar";
import useApp from "../../hooks/useApp";
import AppGrid from "../../Components/store/apps/AppGrid";
import AppGridSkeleton from "../../Components/store/apps/AppGridSkeleton";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function MyApps() {
  const { authDetails } = useContext(AuthContext);
  const { getMyAppListQuery } = useApp();
  const { data: apps, isLoading, isError, error } = getMyAppListQuery;

  return (
    <div className="space-y-10">
      <HeaderBarTwo
        title={authDetails?.user?.isDevMode ? "App Submission" : "Apps"}
        link={authDetails?.user?.isDevMode && "/store/app/new"}
      />

      <div className="md:flex rounded-[20px] overflow-hidden mt-2">
        {/* Sidebar Icon */}
        <div className="bg-lime-400 p-6 flex-shrink-0 flex justify-center">
          <img src={VectorA} alt="VectorA" className="w-20 md:w-24 h-fit" />
        </div>

        {/* Content Area */}
        <div className="bg-white flex-1 p-6 md:p-10">
          <h2 className="text-2xl font-bold mb-4">Defcomm Store Connect</h2>

          {isLoading && <AppGridSkeleton />}

          {isError && (
            <div className="text-center py-10 text-red-600">
              Failed to load apps: {error?.message || "Something went wrong."}
            </div>
          )}

          {!isLoading && !isError && <AppGrid apps={apps} />}
        </div>
      </div>
    </div>
  );
}

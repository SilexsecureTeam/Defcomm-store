import React from "react";
import Nav from "../Components/Header/Nav";
import SearchHeader from "../Components/store/medical/SearchHeader";
import AppCard from "../Components/store/medical/AppCard";
import headphone from "../assets/Image.png";
import useApp from "../hooks/useApp";

export default function MedicalApp() {
  const { getAppListQuery } = useApp();
  const { data, isLoading, isError } = getAppListQuery;

  const fallbackImage = headphone;

  return (
    <>
      <div className="bg-black py-20 w-full">
        <SearchHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-10 mt-12">
          {isLoading && (
            <p className="text-white text-center col-span-2">Loading apps...</p>
          )}

          {isError && (
            <p className="text-red-400 text-center col-span-2">
              Failed to load apps.
            </p>
          )}

          {data?.data?.map((app, index) => (
            <AppCard
              key={app.id || index}
              image={app.icon || fallbackImage}
              title={app.name}
              description={app.description}
              updated={app.updated_at || "Unknown"}
            />
          ))}
        </div>
      </div>
    </>
  );
}

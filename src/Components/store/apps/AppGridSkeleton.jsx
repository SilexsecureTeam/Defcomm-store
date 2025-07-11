import React from "react";

const AppGridSkeleton = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 animate-pulse">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="text-center space-y-2">
          <div className="rounded-full bg-gray-300 h-20 w-20 mx-auto" />
          <div className="h-3 w-16 mx-auto bg-gray-300 rounded" />
          <div className="h-2 w-24 mx-auto bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
};

export default AppGridSkeleton;

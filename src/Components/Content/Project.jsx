import React from "react";
import { GoDotFill } from "react-icons/go";
import { CgArrowTopRight } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import useApp from "../../hooks/useApp";

function Project() {
  const navigate = useNavigate();
  const { getAppListQuery } = useApp();
  const { data, isLoading, isError, error } = getAppListQuery;

  // Loading UI
  if (isLoading) {
    return (
      <div className="w-full px-4 py-20 md:px-20">
        <div className="flex justify-center mb-10">
          <div className="h-12 w-12 border-4 border-lime-500 border-t-transparent animate-spin rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="animate-pulse space-y-3">
              <div className="h-72 bg-stone-200 rounded-lg" />
              <div className="flex justify-between items-center">
                <div>
                  <div className="h-6 bg-stone-300 rounded w-3/4 mb-2" />
                  <div className="h-4 bg-stone-200 rounded w-1/2" />
                </div>
                <div className="h-10 w-10 rounded-full bg-stone-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Error UI
  if (isError) {
    return (
      <div className="w-full px-4 py-20 md:px-20 text-center text-red-500">
        <p>Something went wrong while fetching projects.</p>
        {import.meta.env.MODE === "development" && (
          <pre className="mt-2 text-xs text-stone-500">
            {error?.message || "Unknown error"}
          </pre>
        )}
      </div>
    );
  }

  // No Data UI
  if (!data || data.length === 0) {
    return (
      <div className="w-full px-4 py-10 md:px-20 md:py-20">
        <div>
          <p className="flex items-center text-[13px] mb-1">
            <span className="text-lime-700 text-xl mr-1">
              <GoDotFill />
            </span>
            LATEST PROJECTS
          </p>
          <h1 className="text-[30px] font-semibold">App Categories</h1>
        </div>
        <p className="w-full px-4 py-20 md:px-20 bg-neutral-100 text-gray-500 min-h-32 flex items-center justify-center">
          No apps available at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-10 md:px-20 md:py-20">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="flex flex-col gap-10">
          <div>
            <p className="flex items-center text-[13px] mb-1">
              <span className="text-lime-700 text-xl mr-1">
                <GoDotFill />
              </span>
              LATEST PROJECTS
            </p>
            <h1 className="text-[30px] font-semibold">App Categories</h1>
          </div>

          {data
            .filter((_, i) => i % 2 === 0)
            .map((app) => (
              <div key={app.id}>
                <div className="h-72 bg-stone-200 overflow-hidden mb-3">
                  {app.image && (
                    <img
                      src={app.image}
                      alt={app.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <article>
                    <h1 className="text-2xl">{app.name}</h1>
                    <p className="text-sm text-stone-500 flex items-center">
                      {new Date(app.created_at).getFullYear()}
                      <GoDotFill className="mx-1 text-[7px]" />
                      {app.category || "Tech"}
                    </p>
                  </article>
                  <button
                    onClick={() => navigate(app.route)}
                    className="cursor-pointer bg-lime-700 text-white p-3 rounded-full"
                  >
                    <CgArrowTopRight />
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-10">
          {data
            .filter((_, i) => i % 2 !== 0)
            .map((app) => (
              <div key={app.id}>
                <div className="h-72 bg-stone-200 overflow-hidden mb-3">
                  {app.image && (
                    <img
                      src={app.image}
                      alt={app.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <article>
                    <h1 className="text-2xl">{app.name}</h1>
                    <p className="text-sm text-stone-500 flex items-center">
                      {new Date(app.created_at).getFullYear()}
                      <GoDotFill className="mx-1 text-[7px]" />
                      {app.category || "Tech"}
                    </p>
                  </article>
                  <button
                    onClick={() => navigate(app.route || "/medical")}
                    className="cursor-pointer bg-lime-700 text-white p-3 rounded-full"
                  >
                    <CgArrowTopRight />
                  </button>
                </div>
              </div>
            ))}

          {/* Learn More */}
          <div className="flex justify-center items-center gap-2 mt-3">
            <button className="bg-[#C6FC2B] py-2 px-5 rounded-md text-black font-semibold hover:bg-[#cae481] transition">
              LEARN MORE
            </button>
            <button
              onClick={() => navigate("/more")}
              className="bg-[#C6FC2B] p-3 rounded-full"
            >
              <CgArrowTopRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

import React from "react";
import { FaRegSadTear } from "react-icons/fa";
import { useParams } from "react-router-dom";

export default function CategoryFallback() {
  const { category } = useParams();
  const formattedCategory = category.toLowerCase();

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center bg-white rounded-3xl shadow-inner">
      <div className="bg-gray-200 p-6 rounded-full shadow-md mb-6">
        <FaRegSadTear className="text-5xl text-gray-500" />
      </div>

      <div className="max-w-xl space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 capitalize truncate">
          No {category} Available
        </h2>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Sorry, we couldn’t find any{" "}
          <span className="break-all">{formattedCategory}</span> at the moment.
          You can try again later or explore other categories in the meantime.
        </p>
      </div>
    </section>
  );
}

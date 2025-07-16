import React from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const ProfileField = ({
  label,
  value,
  onChange,
  isEditing,
  isReadOnly = false,
  icon,
  toggleVisibility,
  type = "text", // text | date | select
  options = [], // for select
}) => {
  const inputId = `input-${label.replace(/\s+/g, "-").toLowerCase()}`;
  const isDisabled = isReadOnly || !isEditing;

  return (
    <div>
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-500 mb-1"
      >
        {label}
      </label>

      <div className="relative">
        {type === "select" ? (
          <select
            id={inputId}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            disabled={isDisabled}
            className={`w-full p-3 rounded-lg border text-sm ${
              isDisabled
                ? "bg-gray-100 cursor-not-allowed"
                : "bg-white focus:ring-2 focus:ring-[#759719] focus:outline-none"
            }`}
          >
            <option value="">Select Gender</option>
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={inputId}
            type={type}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            disabled={isDisabled}
            className={`w-full p-3 rounded-lg border text-sm ${
              icon ? "pl-8" : ""
            } ${
              isDisabled
                ? "bg-gray-100 cursor-not-allowed"
                : "bg-white focus:ring-2 focus:ring-[#759719] focus:outline-none"
            }`}
          />
        )}

        {icon && type !== "select" && (
          <div className="absolute inset-y-0 left-3 flex items-center text-gray-400 pointer-events-none">
            {icon}
          </div>
        )}

        {toggleVisibility && type !== "select" && (
          <button
            type="button"
            onClick={toggleVisibility}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {value?.includes("*") ? (
              <MdVisibility size={18} />
            ) : (
              <MdVisibilityOff size={18} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileField;

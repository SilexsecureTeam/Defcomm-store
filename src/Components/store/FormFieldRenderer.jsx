// Path: src/Components/store/FormFieldRenderer.jsx
import React from "react";
import { useFormContext } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const FormFieldRenderer = ({ field }) => {
  const {
    name,
    label,
    placeholder,
    type,
    required,
    options,
    maxLength,
    desc,
    layout,
    component,
    text,
    className: extraClassName,
  } = field;

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  // Handle display type fields (h3, p, custom HTML)
  if (type === "display") {
    const DisplayComponent = component || "div";
    const paddingClass = component === "p" ? "" : "";
    return (
      <DisplayComponent
        key={name}
        className={`${extraClassName || ""} ${paddingClass} ${
          component === "h3"
            ? "text-xl font-semibold mt-4 text-gray-800 mb-4"
            : "text-gray-700 text-sm mb-3 whitespace-pre-line"
        }`}
        dangerouslySetInnerHTML={text ? { __html: text } : undefined}
      />
    );
  }

  const fieldValue = watch(name);
  const isFileSelected = fieldValue instanceof File;
  const previewUrl = isFileSelected ? URL.createObjectURL(fieldValue) : null;

  const handleClearFile = (e) => {
    e.preventDefault();
    setValue(name, null);
  };

  return (
    <div
      key={name}
      className={`my-6 ${
        layout ? "md:grid md:grid-cols-[200px_1fr] md:gap-2" : "flex flex-col"
      }`}
    >
      {label && type !== "checkbox" && (
        <label htmlFor={name} className="mb-1 font-medium">
          {label}
          {label && required && <span className="text-red-500">*</span>}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          id={name}
          placeholder={placeholder}
          maxLength={maxLength}
          {...register(name, {
            required: required ? `${label} is required` : false,
          })}
          className="w-full bg-gray-100 px-4 py-3 text-sm rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400"
          rows={4}
        />
      ) : type === "radio-group" || type === "radio-group-flex" ? (
        <div
          className={`mt-2 ${
            type === "radio-group-flex"
              ? "flex flex-wrap gap-4 md:gap-7 items-center"
              : "space-y-2"
          }`}
        >
          {options.map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                value={opt}
                {...register(name, {
                  required: required ? `${label} is required` : false,
                })}
                className="appearance-none h-4 w-4 border border-gray-400 rounded-full checked:bg-lime-500 checked:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all duration-150"
              />
              <span className="text-sm text-gray-700">{opt}</span>
            </label>
          ))}
        </div>
      ) : type === "file" || type === "image" ? (
        <div className="relative group">
          <label
            htmlFor={name}
            className={`min-h-40 text-gray-600 border border-dashed border-gray-400 bg-gray-50 flex flex-col items-center justify-center text-center p-6 rounded-md
              ${
                isFileSelected
                  ? "cursor-default"
                  : "hover:bg-gray-100 transition cursor-pointer"
              }`}
          >
            <input
              id={name}
              type="file"
              className="hidden"
              onChange={(e) => {
                setValue(name, e.target.files[0]);
              }}
            />
            {isFileSelected ? (
              <div className="relative w-full h-full max-h-60 flex flex-col items-center justify-center space-y-2">
                {fieldValue.type.startsWith("image/") ? (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-20 h-20 object-contain rounded-md"
                  />
                ) : (
                  <div className="text-center p-4 bg-gray-200 rounded-md">
                    <p className="text-sm font-semibold">{fieldValue.name}</p>
                    <p className="text-xs text-gray-500">
                      {(fieldValue.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                )}
                <button
                  type="button"
                  onClick={handleClearFile}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md text-red-500 hover:text-red-700 transition-colors duration-200"
                  title="Clear selected file"
                >
                  <MdCancel size={20} />
                </button>
              </div>
            ) : (
              <>
                <div className="w-12 h-12 mb-3 bg-gray-200 rounded-full flex items-center justify-center">
                  <FaUpload size="24" className="text-gray-600" />
                </div>
                <p className="text-sm font-semibold text-gray-700">
                  {desc || label}
                </p>
              </>
            )}
          </label>
        </div>
      ) : type === "checkbox" ? (
        <div className={`flex items-center gap-3 ${layout ? "" : "mt-2"}`}>
          <input
            id={name}
            type="checkbox"
            {...register(name)}
            className="h-4 w-4 text-lime-600 border-gray-300 rounded focus:ring-lime-500"
          />

          <div>
            <label
              htmlFor={name}
              className="text-sm text-gray-700 font-medium cursor-pointer"
            >
              {label}
            </label>
            {desc && <p className="text-gray-700 text-sm">{desc}</p>}
          </div>
        </div>
      ) : (
        <div>
          <input
            id={name}
            type={type}
            placeholder={placeholder}
            maxLength={maxLength}
            {...register(name, {
              required: required ? `${label} is required` : false,
            })}
            className="w-full bg-gray-100 px-4 py-3 text-sm rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lime-400"
          />
          {desc && <p className="text-gray-600 text-xs mt-1 italic">{desc}</p>}
        </div>
      )}
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default FormFieldRenderer;

import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { FaSpinner, FaUpload } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useEffect } from "react";
import useApp from "../../../hooks/useApp";
import AppVerificationStatusCard from "./AppVerificationStatusCard";
import { extractErrorMessage } from "../../../utils/formmaters";
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
    maxSizeMB,
    className: extraClassName,
  } = field;

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const { verifyApk } = useApp();

  const [uploadProgress, setUploadProgress] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [apkSignatureInfo, setApkSignatureInfo] = useState(null);
  const [apkSignatureError, setApkSignatureError] = useState(null);
  const fieldValue = watch(name);
  const isFileSelected = fieldValue instanceof File;
  const previewUrl = isFileSelected ? URL.createObjectURL(fieldValue) : null;

  const handleClearFile = (e) => {
    e.preventDefault();
    setUploadProgress(null);
    setValue(name, null);
    setApkSignatureError(null);
    setApkSignatureInfo(null);
  };

  const handleFileChange = async (file) => {
    if (file && file.size > maxSizeMB * 1024 * 1024) {
      alert(`File size must not exceed ${maxSizeMB}MB`);
      return;
    }

    setApkSignatureInfo(null);
    setApkSignatureError(null);
    setUploadProgress(0); // show progress bar

    const isApk = name === "app_bundle" && file.name.endsWith(".apk");

    if (isApk) {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 98) progress = 98;
        setUploadProgress(progress);
      }, 300);

      try {
        const app = await verifyApk.mutateAsync({ file });
        clearInterval(interval);
        setUploadProgress(100);

        setTimeout(() => {
          setUploadProgress(null); // ✅ hide progress
          setApkSignatureInfo(app || null);
          setValue(name, file); // ✅ only if valid
          setValue("name_release", app.name);
          setValue("version", app.versionName);
          // setValue("certificate_fingerprint", app.certificateFingerprint); // hidden field
        }, 500);
      } catch (err) {
        clearInterval(interval);
        setUploadProgress(100);

        setTimeout(() => {
          setUploadProgress(null); // ✅ hide progress
          setApkSignatureError(
            extractErrorMessage(err) ||
              "Invalid APK signature. Please upload a valid signed APK."
          );
        }, 500);
      }
    } else {
      simulateUpload(() => {
        setUploadProgress(null); // ✅ hide progress
        setValue(name, file); // ✅ set only after upload
      });
    }
  };

  const simulateUpload = (onComplete) => {
    let progress = 0;
    setUploadProgress(progress);
    const interval = setInterval(() => {
      progress += 20;
      setUploadProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 300); // simulate delay before hiding
      }
    }, 200);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileChange(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  if (type === "display") {
    const DisplayComponent = component || "div";
    return (
      <DisplayComponent
        key={name}
        className={`${extraClassName || ""} ${
          component === "h3"
            ? "text-xl font-semibold mt-4 text-gray-800 mb-4"
            : "text-gray-700 text-sm mb-3 whitespace-pre-line"
        }`}
        dangerouslySetInnerHTML={text ? { __html: text } : undefined}
      />
    );
  }

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
          {required && <span className="text-red-500">*</span>}
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
        <div
          className={`relative group border border-dashed rounded-md ${
            isDragging
              ? "border-lime-500 bg-lime-50"
              : "border-gray-400 bg-gray-50"
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <label
            htmlFor={name}
            className="w-full h-full flex flex-col items-center justify-center text-center p-6 cursor-pointer"
          >
            <input
              id={name}
              type="file"
              className="hidden"
              onChange={(e) => handleFileChange(e.target.files[0])}
            />

            {isFileSelected ? (
              <div className="relative w-full h-full max-h-60 flex flex-col items-center justify-center space-y-2">
                {fieldValue.type?.startsWith("image/") ? (
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
                  {desc || "Click or drag to upload"}
                </p>
              </>
            )}

            {uploadProgress !== null && (
              <div className="w-full mt-4">
                <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-lime-400 to-lime-600 transition-all duration-300 ease-in-out"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between mt-1 text-xs text-gray-600">
                  <span>{verifyApk.isPending ? "Verifying APK..." : null}</span>
                  {verifyApk.isPending && (
                    <FaSpinner className="animate-spin ml-2 text-gray-500" />
                  )}
                </div>
              </div>
            )}

            {apkSignatureInfo && (
              <AppVerificationStatusCard
                type="success"
                data={apkSignatureInfo}
              />
            )}

            {apkSignatureError && (
              <AppVerificationStatusCard
                type="error"
                error={apkSignatureError}
              />
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

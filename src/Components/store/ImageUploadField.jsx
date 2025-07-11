import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FaUpload } from "react-icons/fa";

const ImageUploadField = ({ name, label, desc, required }) => {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext(); // Or pass control as prop
  const uploadedFile = watch(name); // To display preview if you implement it

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-400 py-4">{desc}</p>
      <figure className="grid md:grid-cols-[200px_1fr] items-start gap-4">
        <label className="text-sm font-semibold text-gray-700 mt-2">
          {label}
        </label>
        <Controller
          name={name}
          control={control}
          rules={{ required }}
          render={({ field }) => (
            <label
              htmlFor={name}
              className="min-h-60 text-gray-600 border border-dashed border-gray-400 bg-gray-50 flex flex-col items-center justify-center text-center p-6 hover:bg-gray-100 transition cursor-pointer"
            >
              <input
                id={name}
                type="file"
                className="hidden"
                onChange={(e) => field.onChange(e.target.files[0])} // Store the File object
              />
              {uploadedFile ? (
                <p className="text-sm text-lime-600">
                  File selected: {uploadedFile.name}
                </p>
              ) : (
                <>
                  <div className="w-12 h-12 mb-3 bg-gray-200 rounded-full flex items-center justify-center">
                    <FaUpload size="30" />
                  </div>
                  <p className="text-xs max-w-xs mt-2">
                    {desc || "Drop PNG or JPEG to upload"}
                  </p>
                </>
              )}
            </label>
          )}
        />
      </figure>
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">This field is required</p>
      )}
    </div>
  );
};
export default ImageUploadField;

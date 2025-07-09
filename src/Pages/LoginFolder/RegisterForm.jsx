import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useAuth from "../../hooks/useAuth";
import { FaSpinner } from "react-icons/fa6";
import { FiCheckCircle, FiXCircle, FiEye, FiEyeOff } from "react-icons/fi";

const RegisterForm = () => {
  const { registerMutation, verifyEmailMutation } = useAuth();
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [verify, setVerify] = useState("text");
  const [emailVerified, setEmailVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onChange", // or "onBlur"
  });

  const email = watch("email");
  const password = watch("password");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (email && email.includes("@")) {
        verifyEmailMutation.mutate(email, {
          onSuccess: (data) => {
            if (data?.status === "200") {
              setEmailVerified(true);
              clearErrors("email");
            }
          },
          onError: () => {
            setEmailVerified(false);
            setError("email", {
              type: "manual",
              message: "This email is already in use",
            });
          },
        });
      }
    }, 800);

    return () => clearTimeout(timeout);
  }, [email]);

  const onSubmit = (data) => {
    if (!emailVerified) {
      setError("email", {
        type: "manual",
        message: "Please use a verified email",
      });
      return;
    }

    const payload = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone,
      password: data.password,
      country: data.country,
      dob: data.birthday,
      gender,
      role: "user",
    };

    registerMutation.mutate(payload);
  };

  const errorClass = "text-sm text-red-500 mt-1";
  const isStrongPassword = password && password.length >= 6;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl">
      {/* First Name & Last Name */}
      <div className="flex flex-col justify-between md:flex-row max-w-4xl">
        <div className="mb-4 w-full md:mr-2">
          <input
            {...register("firstName", { required: "First name is required" })}
            className="w-full py-2 px-4 border border-gray-300 rounded-xl"
            placeholder="First Name"
          />
          {errors.firstName && (
            <p className={errorClass}>{errors.firstName.message}</p>
          )}
        </div>

        <div className="mb-4 w-full md:ml-2">
          <input
            {...register("lastName", { required: "Last name is required" })}
            className="w-full py-2 px-4 border border-gray-300 rounded-xl"
            placeholder="Last Name"
          />
          {errors.lastName && (
            <p className={errorClass}>{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Country */}
      <div className="mb-4">
        <input
          {...register("country", { required: "Country is required" })}
          className="w-full py-2 px-4 border border-gray-300 rounded-xl"
          placeholder="Country/Region"
        />
        {errors.country && (
          <p className={errorClass}>{errors.country.message}</p>
        )}
      </div>

      {/* Gender */}
      <div className="mb-4">
        <span className="block font-medium mb-1">Gender:</span>
        <div className="flex items-center gap-4">
          {["male", "female"].map((g) => (
            <label key={g} className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value={g}
                checked={gender === g}
                onChange={(e) => setGender(e.target.value)}
              />
              {g.charAt(0).toUpperCase() + g.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Birthday */}
      <div className="mb-4">
        <input
          type="date"
          {...register("birthday", { required: "Birthday is required" })}
          className="w-full py-2 px-4 border border-gray-300 rounded-xl"
          placeholder="Birthday"
        />
        <p className="text-xs text-gray-500 mt-1">
          Let us know about your birthday so as not to miss a gift
        </p>
        {errors.birthday && (
          <p className={errorClass}>{errors.birthday.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <div className="relative">
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className={`w-full py-2 px-4 pr-12 border ${
              errors.email
                ? "border-red-500"
                : emailVerified
                ? "border-green-500"
                : "border-gray-300"
            } rounded-xl`}
            placeholder="Email adress"
          />
          {email && (
            <div className="absolute inset-y-0 right-3 flex items-center">
              {verifyEmailMutation.isPending ? (
                <FaSpinner className="animate-spin text-gray-400 text-lg" />
              ) : emailVerified ? (
                <FiCheckCircle className="text-green-500 text-xl" />
              ) : errors.email ? (
                <FiXCircle className="text-red-500 text-xl" />
              ) : null}
            </div>
          )}
        </div>
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      {/* Password */}
      {/* Password */}
      <div className="mb-4">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: "Password is required" })}
            className={`w-full py-2 px-4 pr-20 border ${
              errors.password
                ? "border-red-500"
                : isStrongPassword
                ? "border-green-500"
                : "border-gray-300"
            } rounded-xl`}
            placeholder="Password"
          />

          {/* Eye Toggle */}
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>

          {/* Valid or Error Icon */}
          <span className="absolute right-10 top-1/2 transform -translate-y-1/2">
            {errors.password ? (
              <FiXCircle className="text-red-500" />
            ) : isStrongPassword ? (
              <FiCheckCircle className="text-green-500" />
            ) : null}
          </span>
        </div>
        {errors.password && (
          <p className={errorClass}>{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="mb-4">
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className={`w-full py-2 px-4 pr-20 border ${
              errors.confirmPassword
                ? "border-red-500"
                : isStrongPassword &&
                  watch("password") === watch("confirmPassword")
                ? "border-green-500"
                : "border-gray-300"
            } rounded-xl`}
            placeholder="Confirmed password"
          />

          {/* Eye Toggle */}
          <span
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
          </span>

          {/* Valid or Error Icon */}
          <span className="absolute right-10 top-1/2 transform -translate-y-1/2">
            {errors.confirmPassword ? (
              <FiXCircle className="text-red-500" />
            ) : isStrongPassword &&
              watch("password") === watch("confirmPassword") ? (
              <FiCheckCircle className="text-green-500" />
            ) : null}
          </span>
        </div>
        {errors.confirmPassword && (
          <p className={errorClass}>{errors.confirmPassword.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="mb-4">
        <PhoneInput
          country={"ng"}
          value={phone}
          onChange={setPhone}
          enableSearch
          inputProps={{ required: true }}
          placeholder="Country Options"
          inputStyle={{
            width: "100%",
            padding: "14px",
            paddingLeft: "44px",
            borderRadius: "0.375rem",
            border: "1px solid #D1D5DB",
          }}
        />
      </div>

      {/* Verify With */}
      <div className="mb-4">
        <span className="block font-medium mb-1">Verify with:</span>
        <div className="flex items-center gap-4">
          {["text", "email"].map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="radio"
                name="verify"
                value={option}
                checked={verify === option}
                onChange={(e) => setVerify(e.target.value)}
              />
              {option === "text" ? "Text Message" : "Email"}
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#36460A] text-white py-2 rounded hover:bg-[#2e360c]"
        disabled={registerMutation.isPending}
      >
        {registerMutation.isPending ? "Submitting..." : "Continue"}
      </button>
    </form>
  );
};

export default RegisterForm;

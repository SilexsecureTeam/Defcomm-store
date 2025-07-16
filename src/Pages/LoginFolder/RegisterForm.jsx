import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "react-otp-input";
import { getNames, getCode } from "country-list";
import useAuth from "../../hooks/useAuth";
import { FaSpinner } from "react-icons/fa6";
import { FiCheckCircle, FiXCircle, FiEye, FiEyeOff } from "react-icons/fi";
import OtpScreen from "./OtpScreen";

const countries = getNames();

const RegisterForm = ({ userType = "individual" }) => {
  const role = userType === "organization" ? "company" : "user";

  const {
    registerMutation,
    verifyEmailMutation,
    requestOtpMutation,
    verifyOtpMutation,
  } = useAuth();

  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [verify, setVerify] = useState("text");
  const [emailVerified, setEmailVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otpSuccess, setOtpSuccess] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Nigeria");
  const [phoneCountry, setPhoneCountry] = useState("ng");

  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const email = watch("email");
  const password = watch("password");
  const isStrongPassword = password && password.length >= 6;

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
    if (!phone || phone.length <= getCode(selectedCountry).length + 1) {
      setError("phone", {
        type: "manual",
        message: "Please enter a valid phone number.",
      });
      return;
    }
    const payload = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: phone.startsWith("+") ? phone : `+${phone}`,
      password: data.password,
      country: selectedCountry,
      dob: data.birthday,
      gender,
      role,
    };
    registerMutation.mutate(payload, {
      onSuccess: () => {
        setRegistrationComplete(true);
      },
    });
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 4) {
      setOtpError("Enter a valid 4-digit OTP.");
      return;
    }

    const identifier =
      verify === "text" ? (phone.startsWith("+") ? phone : `+${phone}`) : email;

    verifyOtpMutation.mutate(
      verify === "text"
        ? { phone: identifier, otp }
        : { email: identifier, otp },
      {
        onSuccess: () => {
          setOtpSuccess(true);
          setOtpError("");
        },
        onError: () => {
          setOtpError("Invalid OTP. Please try again.");
        },
      }
    );
  };

  const errorClass = "text-sm text-red-500 mt-1";

  if (registrationComplete && !otpSuccess) {
    return (
      <OtpScreen
        identifier={verify === "text" ? `+${phone}` : email}
        type={verify} // "text" or "email"
        onVerified={() => setOtpSuccess(true)}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          {...register("firstName", { required: "First name is required" })}
          className="w-full py-2 px-4 border border-gray-300 rounded"
          placeholder="First Name"
        />
        <input
          {...register("lastName", { required: "Last name is required" })}
          className="w-full py-2 px-4 border border-gray-300 rounded"
          placeholder="Last Name"
        />
      </div>

      <div>
        <select
          {...register("country", { required: "Country is required" })}
          className="w-full py-2 px-4 border border-gray-300 rounded bg-white"
          value={selectedCountry}
          onChange={(e) => {
            const name = e.target.value;
            const code = getCode(name)?.toLowerCase();
            setSelectedCountry(name);
            setPhoneCountry(code || "ng");
          }}
        >
          <option value="" disabled>
            Select your country
          </option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {errors.country && (
          <p className={errorClass}>{errors.country.message}</p>
        )}
      </div>

      <div>
        <span className="block font-medium mb-1">Gender:</span>
        <div className="flex gap-4">
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

      <div className="mb-4">
        <input
          type="date"
          {...register("birthday", {
            required: "Birthday is required",
            validate: (value) => {
              const dob = new Date(value);
              const today = new Date();
              const minAgeDate = new Date(
                today.getFullYear() - 5,
                today.getMonth(),
                today.getDate()
              );

              if (dob > today) {
                return "Birthday cannot be in the future.";
              }

              if (dob > minAgeDate) {
                return "Please enter a valid birth date. You must be at least 5 years old.";
              }

              return true;
            },
          })}
          max={new Date().toISOString().split("T")[0]} // ensures the date picker restricts future dates
          className="w-full py-2 px-4 border border-gray-300 rounded"
        />
        <p className="text-xs text-gray-500 mt-1">
          Let us know your birthday so we don’t miss sending you a gift!
        </p>
        {errors.birthday && (
          <p className="text-sm text-red-500 mt-1">{errors.birthday.message}</p>
        )}
      </div>

      {/* EMAIL INPUT WITH ICON */}
      <div>
        <div className="relative">
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className={`lowercase w-full py-2 px-4 pr-12 border ${
              errors.email
                ? "border-red-500"
                : emailVerified
                ? "border-green-500"
                : "border-gray-300"
            } rounded`}
            placeholder="Email address"
          />
          <div className="absolute inset-y-0 right-3 flex items-center">
            {verifyEmailMutation.isPending ? (
              <FaSpinner className="animate-spin text-gray-400 text-lg" />
            ) : emailVerified ? (
              <FiCheckCircle className="text-green-500 text-xl" />
            ) : errors.email ? (
              <FiXCircle className="text-red-500 text-xl" />
            ) : null}
          </div>
        </div>
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      {/* Password Field */}
      <div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: "Password is required" })}
            className="w-full py-2 px-4 pr-12 border rounded border-gray-300"
            placeholder="Password"
          />
          <span
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
          <span className="absolute right-10 top-1/2 -translate-y-1/2">
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

      {/* CONFIRM PASSWORD WITH ICON */}
      <div>
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
            } rounded`}
            placeholder="Confirmed password"
          />
          <span
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          >
            {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
          </span>
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
          <p className="text-sm text-red-500 mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      {/* PHONE INPUT */}
      <div>
        <PhoneInput
          country={phoneCountry}
          value={phone}
          onChange={setPhone}
          enableSearch
          inputProps={{ required: true }}
          inputStyle={{
            width: "100%",
            padding: "14px",
            paddingLeft: "44px",
            borderRadius: "0.375rem",
            border: "1px solid #D1D5DB",
          }}
        />
        {errors.phone && (
          <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <span className="block font-medium mb-1">Verify with:</span>
        <div className="flex gap-4">
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
        className="cursor-pointer w-full bg-[#36460A] text-white py-2 rounded hover:bg-[#2e360c]"
        disabled={registerMutation.isPending}
      >
        {registerMutation.isPending ? "Submitting..." : "Continue"}
      </button>
    </form>
  );
};

export default RegisterForm;

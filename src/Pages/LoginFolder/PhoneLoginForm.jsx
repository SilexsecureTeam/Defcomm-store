import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "react-otp-input";
import useAuth from "../../hooks/useAuth";
import { FaSpinner } from "react-icons/fa";
import { isValidPhoneNumber } from "libphonenumber-js";
import OtpScreen from "./OtpScreen";

const PhoneLoginForm = () => {
  const { requestOtpMutation, verifyOtpMutation } = useAuth();

  const [phone, setPhone] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(60);
  const [success, setSuccess] = useState(false);

  // Countdown timer effect
  useEffect(() => {
    if (!showOtp || timer === 0) return;

    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) clearInterval(countdown);
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [showOtp, timer]);

  const handlePhoneChange = (value) => {
    setPhone(value);
    setError("");
  };

  const handleRequestOtp = () => {
    if (!isValidPhoneNumber(`+${phone}`)) {
      setError("Please enter a valid phone number.");
      return;
    }

    requestOtpMutation.mutate(
      { phone: `+${phone}` },
      {
        onSuccess: () => {
          setShowOtp(true);
          setTimer(60);
          setError("");
        },
        onError: () => {
          setError("Failed to send OTP. Please try again.");
        },
      }
    );
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 4) {
      setError("Enter a valid 4-digit OTP.");
      return;
    }

    verifyOtpMutation.mutate(
      { phone: `+${phone}`, otp },
      {
        onSuccess: () => {
          setError("");
          setSuccess(true);
          // Optional: navigate("/dashboard");
        },
        onError: () => {
          setError("Invalid OTP. Please try again.");
        },
      }
    );
  };

  return (
    <div className="w-full max-w-80">
      {!showOtp ? (
        <>
          <div className="mb-4">
            <label htmlFor="phone" className="sr-only">
              Phone Number
            </label>
            <PhoneInput
              country="ng"
              value={phone}
              onChange={handlePhoneChange}
              enableSearch
              inputProps={{ required: true, id: "phone" }}
              inputStyle={{
                width: "100%",
                height: "42px",
                padding: "14px",
                paddingLeft: "44px",
                borderRadius: "0.75rem",
                border: "1px solid #D1D5DB",
              }}
              containerStyle={{ height: "42px" }}
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            type="button"
            onClick={handleRequestOtp}
            className="cursor-pointer w-full bg-[#36460A] text-white py-3 rounded-xl hover:bg-[#2e360c]"
            disabled={requestOtpMutation.isPending}
          >
            {requestOtpMutation.isPending ? (
              <FaSpinner className="animate-spin mx-auto" />
            ) : (
              "Send OTP"
            )}
          </button>
        </>
      ) : (
        <OtpScreen
          identifier={`+${phone}`}
          type="text"
          onVerified={() => setSuccess(true)}
        />
      )}
    </div>
  );
};

export default PhoneLoginForm;

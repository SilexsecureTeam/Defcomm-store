import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "react-otp-input";
import useAuth from "../../../hooks/useAuth";
import { FaSpinner } from "react-icons/fa";

const PhoneLoginForm = () => {
  const { requestOtpMutation, verifyOtpMutation } = useAuth();

  const [phone, setPhone] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(60); // ⏱ 60 seconds countdown

  useEffect(() => {
    let countdown;
    if (showOtp && timer > 0) {
      countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(countdown);
  }, [showOtp, timer]);

  const handlePhoneChange = (value) => {
    setPhone(value);
    setError("");
  };

  const handleRequestOtp = () => {
    if (!phone || phone.length < 8) {
      setError("Please enter a valid phone number.");
      return;
    }

    requestOtpMutation.mutate(
      { phone: `+${phone}` },
      {
        onSuccess: () => {
          setShowOtp(true);
          setTimer(60); // restart timer on successful send
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
          console.log("✅ OTP verified");
          setError("");
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
            <PhoneInput
              country="ng"
              value={phone}
              onChange={handlePhoneChange}
              enableSearch
              inputProps={{ required: true }}
              inputStyle={{
                width: "100%",
                padding: "14px",
                paddingLeft: "44px",
                borderRadius: "0.75rem",
                border: "1px solid #D1D5DB",
              }}
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            type="button"
            onClick={handleRequestOtp}
            className="w-full bg-[#36460A] text-white py-3 rounded-xl hover:bg-[#2e360c]"
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
        <>
          <p className="text-sm text-gray-600 mb-3">
            Enter the 4-digit OTP sent to <strong>+{phone}</strong>
          </p>

          <OtpInput
            value={otp}
            onChange={(value) => {
              if (/^\d*$/.test(value)) {
                setOtp(value);
                setError("");
              }
            }}
            numInputs={4}
            isInputNum
            shouldAutoFocus
            containerStyle="flex gap-2 mb-4"
            inputStyle={{
              background: "#36460A",
              borderRadius: "10px",
              color: "white",
              width: "50px",
              fontSize: "25px",
              height: "50px",
            }}
            renderInput={(props) => <input {...props} inputMode="numeric" />}
          />

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <button
            type="button"
            onClick={handleVerifyOtp}
            className="w-full bg-[#36460A] text-white py-3 rounded-xl hover:bg-[#2e360c]"
            disabled={verifyOtpMutation.isPending || otp.length !== 4}
          >
            {verifyOtpMutation.isPending ? (
              <FaSpinner className="animate-spin mx-auto" />
            ) : (
              "Verify OTP"
            )}
          </button>

          {timer === 0 ? (
            <button
              type="button"
              onClick={handleRequestOtp}
              className="w-full mt-3 bg-black hover:bg-gray-800 text-white py-3 rounded-xl"
              disabled={requestOtpMutation.isPending}
            >
              {requestOtpMutation.isPending ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Resending...
                </>
              ) : (
                "Resend code to device"
              )}
            </button>
          ) : (
            <p className="mt-4 text-center text-gray-600 text-sm">
              Resend OTP in {timer}s
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default PhoneLoginForm;

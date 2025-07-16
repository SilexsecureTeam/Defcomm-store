import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { FaSpinner } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const OtpScreen = ({ identifier, type = "text", onVerified }) => {
  const { requestOtpMutation, verifyOtpMutation } = useAuth();

  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = ""; // Required for Chrome
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Start countdown
  useEffect(() => {
    if (timer === 0) return;
    const countdown = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  const handleSendOtp = () => {
    const payload =
      type === "text" ? { phone: identifier } : { email: identifier };
    requestOtpMutation.mutate(payload, {
      onSuccess: () => {
        setTimer(60);
        setError("");
        setOtp("");
      },
      onError: () => {
        setError("Failed to send OTP. Please try again.");
      },
    });
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 4) {
      setError("Enter a valid 4-digit OTP.");
      return;
    }

    const payload =
      type === "text" ? { phone: identifier, otp } : { email: identifier, otp };

    verifyOtpMutation.mutate(payload, {
      onSuccess: () => {
        setSuccess(true);
        setError("");
        onVerified?.(); // optional callback
      },
      onError: () => {
        setError("Invalid OTP. Please try again.");
        setSuccess(false);
      },
    });
  };

  return (
    <div className="max-w-md mx-auto text-center">
      <p className="mb-3 text-gray-700">
        OTP sent to <strong>{identifier}</strong>
      </p>

      <OtpInput
        value={otp}
        onChange={(val) => /^\d*$/.test(val) && setOtp(val)}
        numInputs={4}
        isInputNum
        shouldAutoFocus
        containerStyle="flex justify-center gap-2 mb-4"
        inputStyle={{
          background: "#36460A",
          borderRadius: "10px",
          color: "white",
          width: "50px",
          fontSize: "24px",
          height: "50px",
        }}
        renderInput={(props) => (
          <input {...props} inputMode="numeric" aria-label="OTP Digit" />
        )}
      />

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
      {success && (
        <p className="text-green-600 text-sm mb-3">✅ OTP Verified!</p>
      )}

      <button
        onClick={handleVerifyOtp}
        disabled={verifyOtpMutation.isPending || otp.length !== 4}
        className="cursor-pointer w-full bg-[#36460A] text-white py-2 rounded hover:bg-[#2e360c]"
      >
        {verifyOtpMutation.isPending ? "Verifying..." : "Verify OTP"}
      </button>

      {timer === 0 ? (
        <button
          onClick={handleSendOtp}
          disabled={requestOtpMutation.isPending}
          className="cursor-pointer w-full mt-3 bg-black hover:bg-gray-800 text-white py-2 rounded"
        >
          {requestOtpMutation.isPending ? (
            <>
              <FaSpinner className="animate-spin mr-2 inline-block" />
              Resending...
            </>
          ) : (
            "Resend OTP"
          )}
        </button>
      ) : (
        <p className="mt-4 text-gray-600 text-sm">Resend OTP in {timer}s</p>
      )}
    </div>
  );
};

export default OtpScreen;

import React from "react";
function OTPVerification() {
  return (
    <div className="text-center text-white bg-white rounded-md shadow-md">
      <h1 className="font-bold text-black text-xl py-4">OTP Verification</h1>
      <div className="flex justify-center gap-2 py-6">
        {[2, 1, 3, 4].map((n, i) => (
          <div
            key={i}
            className="w-[30px] h-[30px] bg-deffcom-lime flex items-center justify-center rounded"
          >
            {n}
          </div>
        ))}
      </div>
      <div className="bg-deffcom-lime text-black py-2 px-6 my-2 rounded-xl">
        Resend Code to Devices
      </div>
      <div className="bg-black text-white py-2 px-6 rounded-xl">
        Can't get to your device?
      </div>
    </div>
  );
}
export default OTPVerification;

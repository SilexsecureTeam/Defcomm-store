import { useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../services/axios-client";
import { AuthContext } from "../context/AuthContext";

import { extractErrorMessage } from "../utils/formmaters";
import {
  onFailure,
  onSuccess,
  onPrompt,
} from "../utils/notifications/Notification";

const useAuth = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { authDetails, updateAuth } = useContext(AuthContext);
  const client = axiosClient(authDetails?.access_token);

  // ✅ Register Mutation
  const registerMutation = useMutation({
    mutationFn: async (formData) => {
      const { data } = await axiosClient().post("/register", formData);
      return data;
    },
    onSuccess: (data) => {
      onSuccess({
        message: "Account Created",
        success: "Account created successfully!",
      });
      navigate("/login");
    },
    onError: (err) => {
      onFailure({
        message: "Registration failed",
        error: extractErrorMessage(err),
      });
    },
  });

  // ✅ Email Verification Mutation
  const verifyEmailMutation = useMutation({
    mutationFn: async (email) => {
      const { data } = await client.post("/emailVerify", { email });
      return data;
    },
  });

  // 🔢 OTP Request
  const requestOtpMutation = useMutation({
    mutationFn: async (credential) => {
      const { data } = await client.post("/requestOtpSms", {
        phone: credential?.phone,
      });
      if (data?.status !== 200) throw new Error("An error occurred");
      return data;
    },
    onSuccess: (data) => {
      onSuccess({
        message: "OTP Requested!",
        success: `Here is the otp- ${data?.otp}`,
      });
    },
    onError: (err) => {
      onFailure({
        message: "OTP Request Failed",
        error: extractErrorMessage(err),
      });
    },
  });

  // ✅ OTP Verify
  const verifyOtpMutation = useMutation({
    mutationFn: async (otpData) => {
      const { data } = await client.post("/loginWithPhone", otpData);
      if (data?.status !== 200)
        throw new Error("Invalid response: User data not found");
      return data.data;
    },
    onSuccess: (userData, variables) => {
      updateAuth(userData);
      navigate(variables?.from || "/start", { replace: true });
      onSuccess({
        message: "OTP Verified!",
        success: "Continuing to dashboard",
      });
    },
    onError: (err) => {
      onFailure({
        message: "OTP Verification Failed",
        error: extractErrorMessage(err),
      });
    },
  });

  return {
    registerMutation,
    verifyEmailMutation,
    verifyOtpMutation,
    requestOtpMutation,
  };
};

export default useAuth;

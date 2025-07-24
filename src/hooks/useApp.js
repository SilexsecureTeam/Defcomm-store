import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "../services/axios-client";
import { onSuccess, onFailure } from "../utils/notifications/Notification";
import { extractErrorMessage } from "../utils/formmaters";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const useApp = () => {
  const { authDetails, updateAuth } = useContext(AuthContext);
  const client = axiosClient(authDetails?.access_token);
  const queryClient = useQueryClient();

  // GET: List all apps
  const getAppListQuery = useQuery({
    queryKey: ["appList"],
    queryFn: async () => {
      const { data } = await client.get("/app/list");
      return data?.data || [];
    },
    refetchOnWindowFocus: false,
  });

  const getMyAppListQuery = useQuery({
    queryKey: ["myApps"],
    queryFn: async () => {
      const { data } = await client.get("/app/ownlist");
      return data?.data || [];
    },
    enabled: !!authDetails?.access_token,
  });

  // GET: Single app
  const getAppByIdQuery = (id) =>
    useQuery({
      queryKey: ["app", id],
      queryFn: async () => {
        const { data } = await client.get(`/app/listId/${id}`);
        return data?.data[0] || null;
      },
      enabled: !!id,
    });

  // POST: Create app
  const createAppMutation = useMutation({
    mutationFn: (payload) =>
      client.post("/app/create", payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["myApps"]);
      onSuccess({ message: "App created successfully" });
    },
    onError: (err) =>
      onFailure({
        message: "Failed to create app",
        error: extractErrorMessage(err),
      }),
  });

  // PUT/POST: Update app
  const updateAppStatusMutation = useMutation({
    mutationFn: (payload) => client.post("/app/status", payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["myApps"]);
      onSuccess({ message: "App status updated successfully" });
    },
    onError: (err) =>
      onFailure({
        message: "Failed to update app",
        error: extractErrorMessage(err),
      }),
  });

  // POST: Developer Application
  const developerApplicationMutation = useMutation({
    mutationFn: (formData) =>
      client.post("/app/developermode", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: ({ data }) => {
      onSuccess({ message: "Developer application submitted successfully" });
      updateAuth({
        ...authDetails,
        user: { ...data?.data },
      });
    },
    onError: (err) =>
      onFailure({
        message: "Failed to submit developer application",
        error: extractErrorMessage(err),
      }),
  });

  const verifyAppMutation = useMutation({
    mutationFn: async ({ file, onProgress }) => {
      const formData = new FormData();
      formData.append("apk", file);

      const { data } = await axios.post(
        import.meta.env.VITE_APP_VERIFIER_URL, // must be local API
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return data?.app;
    },
  });

  return {
    getAppListQuery,
    getMyAppListQuery,
    getAppByIdQuery,
    createAppMutation,
    updateAppStatusMutation,
    developerApplicationMutation,
    verifyApk: verifyAppMutation,
  };
};

export default useApp;

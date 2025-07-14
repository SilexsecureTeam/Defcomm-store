import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "../services/axios-client";
import { onSuccess, onFailure } from "../utils/notifications/Notification";
import { extractErrorMessage } from "../utils/formmaters";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const useApp = () => {
  const { authDetails } = useContext(AuthContext);
  const client = axiosClient(
    authDetails?.access_token ||
      "337|HMnUSuDklMcerXpI3lF2ZQPe516EK29lXldbP5m636f49284"
  );
  const queryClient = useQueryClient();

  // GET: List all apps
  const getAppListQuery = useQuery({
    queryKey: ["appList"],
    queryFn: async () => {
      const { data } = await client.get("/app/list");
      return data?.data || [];
    },
    //enabled: !!authDetails,
  });

  // GET: Single app
  const getAppByIdQuery = (id) =>
    useQuery({
      queryKey: ["app", id],
      queryFn: async () => {
        const { data } = await client.get(`/app/${id}`);
        return data?.data || null;
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
      queryClient.invalidateQueries(["appList"]);
      onSuccess({ message: "App created successfully" });
    },
    onError: (err) =>
      onFailure({
        message: "Failed to create app",
        error: extractErrorMessage(err),
      }),
  });

  // PUT/POST: Update app
  const updateAppMutation = useMutation({
    mutationFn: (payload) => client.post("/app/update", payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["appList"]);
      onSuccess({ message: "App updated successfully" });
    },
    onError: (err) =>
      onFailure({
        message: "Failed to update app",
        error: extractErrorMessage(err),
      }),
  });

  return {
    getAppListQuery,
    getAppByIdQuery,
    createAppMutation,
    updateAppMutation,
  };
};

export default useApp;

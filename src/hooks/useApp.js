import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosClient } from "../services/axios-client";
import { onSuccess, onFailure } from "../utils/notifications/Notification";
import { extractErrorMessage } from "../utils/formmaters";

const useApp = () => {
  const client = axiosClient(
    "45|VGtvjqAhxSvccBMCTqYkn6DgaXoVui4kgnHXnmuY6d746ba2"
  );
  const queryClient = useQueryClient();

  // GET: List all apps
  const getAppListQuery = useQuery({
    queryKey: ["appList"],
    queryFn: async () => {
      const { data } = await client.get("/app/list");
      return data?.data || [];
    },
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
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
    mutationFn: (payload) => client.post("/app/create", payload),
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

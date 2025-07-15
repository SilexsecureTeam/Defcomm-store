import React, { createContext, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();

  // Helper to inject isDevMode
  const enhanceUser = (user) => {
    if (!user) return null;
    const status = user?.statusApp === "approved";
    return {
      ...user,
      user: {
        ...user.user,
        isDevMode: status,
      },
    };
  };

  // Read from sessionStorage on mount
  const [authDetails, setAuthDetails] = useState(() => {
    const storedUser = sessionStorage.getItem("authUser");
    const parsed = storedUser ? JSON.parse(storedUser) : null;
    return enhanceUser(parsed?.user);
  });

  // Query for getting auth details (React Query cache)
  const { data } = useQuery({
    queryKey: ["authUser"],
    queryFn: () => Promise.resolve(authDetails),
    initialData: authDetails,
    staleTime: 0,
  });

  // Sync query data with auth state
  useEffect(() => {
    if (data) {
      const enhanced = enhanceUser(data);
      setAuthDetails(enhanced);
    }
  }, [data]);

  // Function to update auth state and React Query
  const updateAuth = (newUser) => {
    const enhanced = enhanceUser(newUser);
    setAuthDetails(enhanced);

    if (enhanced) {
      sessionStorage.setItem("authUser", JSON.stringify(enhanced));
      queryClient.setQueryData(["authUser"], enhanced);
    } else {
      sessionStorage.removeItem("authUser");
      queryClient.removeQueries(["authUser"]);
    }
  };

  const isAuthenticated = !!authDetails;

  return (
    <AuthContext.Provider value={{ authDetails, updateAuth, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const extractErrorMessage = (error) => {
  const getString = (data) => {
    if (!data) return "An unknown error occurred";

    if (typeof data === "string") return data;

    if (Array.isArray(data)) return data.join(", ");

    if (typeof data === "object") {
      const firstKey = Object.keys(data)[0];
      const value = data[firstKey];
      if (Array.isArray(value)) return value.join(", ");
      return typeof value === "string" ? value : JSON.stringify(value);
    }

    return JSON.stringify(data);
  };

  const responseData = error?.response?.data;

  // Priority order
  if (responseData?.data) return getString(responseData.data);
  if (responseData?.message) return getString(responseData.message);
  if (responseData?.error) return getString(responseData.error);
  if (error?.response?.error) return getString(error.response.error);

  return getString(error?.message || "An unknown error occurred");
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

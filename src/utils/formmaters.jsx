export const extractErrorMessage = (error) => {
  const getString = (data) => {
    return typeof data === "string" ? data : JSON.stringify(data);
  };

  if (error?.response?.data?.message) {
    return getString(error.response.data.message);
  }

  if (error?.response?.data?.error) {
    return getString(error.response.data.error);
  }

  if (error?.response?.error) {
    return getString(error.response.error);
  }

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

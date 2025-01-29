export const formatDate = (date) => {
  if (!date) {
    console.log("invalid date");
    return null;
  }
  return new Date(date).toISOString().split("T")[0];
};

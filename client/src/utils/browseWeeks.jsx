export const browseWeeks = (currentDate, direction) => {
  const date = new Date(currentDate);
  date.setDate(date.getDate() + direction * 7);
  return date.toLocaleDateString("en-CA");
};

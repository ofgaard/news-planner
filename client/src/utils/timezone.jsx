import { toZonedTime, format } from "date-fns-tz";

export const convertToTimeZone = (date, timeZone = "America/Mexico_City") => {
  const zonedDate = toZonedTime(date, timeZone);
  return zonedDate;
};

export const formatDateInTimeZone = (
  date,
  timeZone = "America/Mexico_City",
  formatString = "yyyy-MM-dd HH:mm:ssXXX"
) => {
  const zonedDate = convertToTimeZone(date, timeZone);
  return format(zonedDate, formatString);
};

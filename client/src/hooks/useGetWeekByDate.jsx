import { startOfWeek } from "date-fns/startOfWeek";
import { formatISO } from "date-fns/formatISO";
import { toZonedTime } from "date-fns-tz";

export const useGetWeekByDate = (
  date = new Date(),
  timeZone = "America/Mexico_City"
) => {
  const zonedDate = toZonedTime(date, timeZone);
  const weekStartDate = startOfWeek(zonedDate, { weekStartsOn: 1 });
  return {
    weekStartDate: formatISO(weekStartDate, { representation: "date" }),
  };
};

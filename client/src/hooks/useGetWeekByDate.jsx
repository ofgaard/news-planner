import { startOfWeek } from "date-fns/startOfWeek";
import { formatISO } from "date-fns/formatISO";

export const useGetWeekByDate = (date = new Date()) => {
  const weekStartDate = startOfWeek(new Date(date), { weekStartsOn: 1 });
  return {
    weekStartDate: formatISO(weekStartDate, { representation: "date" }),
  };
};

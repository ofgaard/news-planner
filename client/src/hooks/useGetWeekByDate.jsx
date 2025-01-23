import { startOfWeek } from "date-fns/startOfWeek";
import { formatISO } from "date-fns/formatISO";

export const useGetWeekByDate = (date = new Date()) => {
  const start = startOfWeek(new Date(date), { weekStartsOn: 1 });
  return {
    start: formatISO(start, { representation: date }),
  };
};

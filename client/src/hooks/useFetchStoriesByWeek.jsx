import { useEffect, useState } from "react";
import { useGetWeekByDate } from "./useGetWeekByDate";
import { fetchStoriesByWeek } from "../services/api/Stories";

export const useFetchStoriesByWeek = (date) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { weekStartDate } = useGetWeekByDate(date);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedStories = await fetchStoriesByWeek(weekStartDate);
        setStories(fetchedStories);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [weekStartDate]);
  return { stories, loading };
};

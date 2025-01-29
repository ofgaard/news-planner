import { useEffect, useState } from "react";
import { fetchStoriesByDay } from "../services/api/Stories";

export const useFetchStoriesByDay = (date) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedStories = await fetchStoriesByDay(date);
        if (fetchedStories) {
          console.log("useFetchStoriesByDay", fetchedStories);
        }
        setStories(fetchedStories);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [date]);
  return { stories, loading };
};

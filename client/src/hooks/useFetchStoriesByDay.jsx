import { useEffect, useState } from "react";
import { fetchStoriesByDay } from "../services/api/Stories";

export const useFetchStoriesByDay = (date) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("2: useFetchStoriesByDay:", date);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedStories = await fetchStoriesByDay(date);
        console.log(fetchedStories);
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

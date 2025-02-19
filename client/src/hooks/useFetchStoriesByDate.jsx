import { useEffect, useState } from "react";
import { fetchStoriesByDate } from "../services/api/Stories";

export const useFetchStoriesByDate = (date) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStories = async () => {
      setLoading(true);
      try {
        const data = await fetchStoriesByDate(date);

        setStories(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadStories();
  }, [date]);

  return { stories, setStories, loading, error };
};

import { useEffect, useState } from "react";
import { fetchStoriesByDate } from "../services/api/Stories";

export const useFetchStoriesByDate = (date) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStories = async () => {
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
  return { stories, loading, error };
};

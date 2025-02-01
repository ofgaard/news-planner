import { useEffect, useState } from "react";
import { fetchStoriesByWeek } from "../services/api/Stories";

export const useFetchStoriesByWeek = (startDate) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadStories = async () => {
    setLoading(true);
    try {
      const data = await fetchStoriesByWeek(startDate);

      setStories(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStories();
  }, [startDate]);
  return { stories, loading, error, loadStories };
};

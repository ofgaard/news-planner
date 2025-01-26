import { useState, useEffect } from "react";
import { fetchStoryById } from "../services/api/Stories";

export const useFetchStoryById = (id) => {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedStory = await fetchStoryById(id);
        setStory(fetchedStory);
        console.log("story in hook:", story);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);
  return { story, loading };
};

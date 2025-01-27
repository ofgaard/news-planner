import { fetchStoryById } from "../services/api/Stories";
import { useEffect } from "react";
import { useState } from "react";

export const useFetchStoryById = (id) => {
  const [loading, setLoading] = useState(false);
  const [story, setStory] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await fetchStoryById(id);
        setStory(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);
  return { loading, story };
};

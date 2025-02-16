import { useEffect, useState } from "react";
import { searchStory } from "../services/api/Stories";

export const useFetchSearchResult = (query) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    const searchStories = async () => {
      setLoading(true);
      setResult(null);
      try {
        const response = await searchStory(query);
        if (!response) {
          console.log("no stories found");
          setResult([]);
        } else {
          setResult(response);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    searchStories();
  }, [query]);
  return { result, loading };
};

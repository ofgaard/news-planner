import { useState, useEffect } from "react";
import { getUserStories } from "../../services/api/Users";

export const useFetchUserStories = (id) => {
  const [userStories, setUserStories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getStories = async () => {
      setLoading(true);
      try {
        const stories = await getUserStories(id);
        setUserStories(stories);
      } catch (err) {
        console.log(err, "error in custom hook");
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      getStories();
    }
  }, [id]);
  return { userStories, loading };
};

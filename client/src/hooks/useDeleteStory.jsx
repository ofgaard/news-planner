import { useState } from "react";
import { deleteStory } from "../services/api/Stories";

export const useDeleteStory = () => {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(false);

  const deleteStoryById = async (id) => {
    setLoading(true);
    try {
      const response = await deleteStory(id);
      setStory(response);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, story, deleteStoryById };
};

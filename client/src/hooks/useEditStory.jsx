import { editStory } from "../services/api/Stories";
import { useState } from "react";

export const useEditStory = () => {
  const [loading, setLoading] = useState(false);

  const editStoryById = async (id, updates) => {
    setLoading(true);
    try {
      console.log(id);
      const updatedStory = await editStory(id, updates);
      return updatedStory;
    } catch (err) {
      console.error("error updating", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { editStoryById, loading };
};

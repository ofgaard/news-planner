import { useState } from "react";
import { addStory } from "../services/api/Stories";

export const useSubmitStory = () => {
  const [loading, setLoading] = useState(false);

  const submitStory = async (storyData) => {
    try {
      const data = await addStory(storyData);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, submitStory };
};

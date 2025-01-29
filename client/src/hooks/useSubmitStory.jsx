import { useState } from "react";
import { postStory } from "../services/api/Stories";

export const useSubmitStory = () => {
  const [loading, setLoading] = useState(false);

  const submitStory = async (submission) => {
    setLoading(true);
    try {
      const data = await postStory(submission);
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, submitStory };
};

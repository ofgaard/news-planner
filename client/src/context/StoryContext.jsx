import { createContext, useState, useEffect, useContext } from "react";
import { useFetchStoriesByDate } from "../hooks/useFetchStoriesByDate";

const StoriesContext = createContext();

export const StoriesProvider = ({ children }) => {
  const [date, setDate] = useState(null);
  const {
    stories: dailyStories,
    loadStories: fetchDailyStories,
    loading: loadingDailyStories,
  } = useFetchStoriesByDate(date);

  const [storiesByDate, setStoriesByDate] = useState(dailyStories);

  useEffect(() => {
    setStoriesByDate(dailyStories);
  }, [dailyStories]);

  const updateDate = (newDate) => {
    setDate(newDate);
  };

  const refreshStories = async () => {
    await fetchDailyStories();
    setStoriesByDate((prevStories) =>
      prevStories.filter((story) => story.id !== null)
    );
  };

  return (
    <StoriesContext.Provider
      value={{
        storiesByDate,
        setStoriesByDate,
        refreshStories,
        updateDate,
        loadingDailyStories,
      }}
    >
      {children}
    </StoriesContext.Provider>
  );
};

export const useStories = () => useContext(StoriesContext);

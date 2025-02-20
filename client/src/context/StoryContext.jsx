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
    const updatedStoriesByDate = await fetchDailyStories();
    setStoriesByDate(updatedStoriesByDate);
  };

  return (
    <StoriesContext.Provider
      value={{ storiesByDate, refreshStories, updateDate, loadingDailyStories }}
    >
      {children}
    </StoriesContext.Provider>
  );
};

export const useStories = () => useContext(StoriesContext);

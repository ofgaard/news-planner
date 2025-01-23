import { useEffect, useState } from "react";
import { useGetWeekByDate } from "./useGetWeekByDate";

const useFetchStoriesByWeek = (date) => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { start } = useGetWeekByDate(date);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      //   try {
      //   fetchedStories = await fetchStoriesByWeek(date);
      //   setStories(fetchedStories);
      //   }
    };
  });
};

import { useParams } from "react-router";
import { useEffect } from "react";
import { useFetchStoriesByWeek } from "../hooks/useFetchStoriesByWeek";
import { WeekDay } from "../components/UI/Cards/WeekDay";
import { useSubmission } from "../context/SubmissionContext";

export const WeekOverview = () => {
  const { newStorySubmitted } = useSubmission();
  const { startDate } = useParams();
  const storiesDate = startDate || new Date().toLocaleDateString("en-CA");
  const { stories, loading, loadStories } = useFetchStoriesByWeek(storiesDate);

  useEffect(() => {
    if (newStorySubmitted) {
      setTimeout(() => {
        loadStories();
      }, 200);
    }
  }, [newStorySubmitted]);

  if (loading) {
    return <p>Loading ... </p>;
  }

  return (
    <div className="flex flex-col p-10">
      <h1 className="font-extrabold text-xl">Week</h1>

      <div className="flex flex-row gap-2 mt-20">
        {stories.map((day, index) => (
          <WeekDay key={index} date={day.date} stories={day.stories}></WeekDay>
        ))}
      </div>
    </div>
  );
};

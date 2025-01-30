import { useParams } from "react-router";
import { useFetchStoriesByWeek } from "../hooks/useFetchStoriesByWeek";
import { WeekDay } from "../components/UI/Cards/WeekDay";
import { GoToStory } from "../components/UI/Buttons/GoToStory";
import { StoryCounter } from "../components/UI/StoryCounter";
import { DayOfWeek } from "../components/UI/ShowDayOfWeek";

export const WeekOverview = () => {
  const { startDate } = useParams();
  const storiesDate = startDate || new Date().toLocaleDateString("en-CA");
  const { stories, loading } = useFetchStoriesByWeek(storiesDate);

  console.log(stories);

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="flex flex-col p-10 gap-20">
      <div className="flex flex-col">
        <h1 className="font-extrabold text-xl">Week</h1>
      </div>
      <div className="flex flex-row gap-2 mt-">
        {stories.map((day, index) => (
          <WeekDay key={index} date={day.date} stories={day.stories}></WeekDay>
        ))}
      </div>
    </div>
  );
};

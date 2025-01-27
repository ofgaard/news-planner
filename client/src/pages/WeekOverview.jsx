import { useParams } from "react-router";
import { useFetchStoriesByWeek } from "../hooks/useFetchStoriesByWeek";
import { WeekDayOverview } from "../components/UI/WeekDayOverview";

export const WeekOverview = () => {
  const { date } = useParams();
  const { stories, loading } = useFetchStoriesByWeek(date);

  return (
    <div className="flex flex-col p-10 w-full gap-28">
      <div>
        <h1 className="text-xl font-extrabold">Week</h1>
      </div>

      <div className="flex flex-row w-full gap-2 flex-wrap">
        {stories.map((story, index) => {
          console.log(story);
          return (
            <WeekDayOverview
              key={index}
              date={story.date}
              stories={story.stories}
              to={`/day/${story.date}`}
            ></WeekDayOverview>
          );
        })}
      </div>
    </div>
  );
};

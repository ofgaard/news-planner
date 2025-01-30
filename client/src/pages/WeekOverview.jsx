import { useParams } from "react-router";
import { useFetchStoriesByWeek } from "../hooks/useFetchStoriesByWeek";
import { SingleWeekDay } from "../components/UI/Cards/SingleWeekDay";

export const WeekOverview = () => {
  const { startDate } = useParams();
  const { stories, loading } = useFetchStoriesByWeek(startDate);

  if (loading) {
    return <p>Loading ...</p>;
  }

  const storiesByDay = stories.reduce((acc, story) => {
    const day = new Date(story.createdAt).toLocaleDateString("en-US", {
      weekday: "long",
    });
    if (!acc[day]) acc[day] = [];
    acc[day].push(story);
    return acc;
  }, {});

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="flex flex-col p-10 w-full gap-28">
      <div>
        <h1 className="text-xl font-extrabold">Week</h1>
      </div>

      <div className="flex flex-row w-full gap-2 flex-wrap">
        {daysOfWeek.map((day, index) => (
          <SingleWeekDay
            key={index}
            date={day}
            stories={storiesByDay[day] || []}
            to={`/day/${day}`}
          />
        ))}
      </div>
    </div>
  );
};

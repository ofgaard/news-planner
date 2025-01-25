import { DayOfWeek } from "./ShowDayOfWeek";
import { StoryCounter } from "./StoryCounter";
import { Link } from "react-router";

export const WeekDayOverview = ({ date, stories, to }) => {
  return (
    <Link
      className="border rounded-md flex flex-col gap-2 p-2 min-w-40 hover:bg-neutral-100 bg-opacity-65"
      to={to}
    >
      <div className="flex flex-col">
        <DayOfWeek textSize="text-sm" date={date}></DayOfWeek>
        <StoryCounter stories={stories}></StoryCounter>
      </div>
      {/* Stories */}
      <div className="text-xs flex flex-col gap-2">
        {stories.map((story) => (
          <h1 key={story.id}>{story.title}</h1>
        ))}
      </div>
    </Link>
  );
};

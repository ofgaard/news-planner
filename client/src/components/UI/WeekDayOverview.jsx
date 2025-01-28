import { DayOfWeek } from "./ShowDayOfWeek";
import { StoryCounter } from "./StoryCounter";
import { GoToDate } from "./Buttons/GoToDate";
import { Link } from "react-router";

export const WeekDayOverview = ({ date, stories }) => {
  return (
    <div className="border rounded-md flex flex-col gap-2 p-2 w-40">
      <div className="flex flex-col">
        <DayOfWeek textSize="text-sm" date={date}></DayOfWeek>
        <StoryCounter stories={stories}></StoryCounter>
      </div>
      <div className="text-xs flex flex-col gap-2 flex-grow">
        {stories.map((story) => (
          <Link key={story.id} to={`/story/${story.id}`}>
            <p className="hover:text-green-800">{story.title}</p>
          </Link>
        ))}
      </div>
      <GoToDate date={date}></GoToDate>
    </div>
  );
};

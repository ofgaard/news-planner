import { Link } from "react-router";
import { DayOfWeek } from "../ShowDayOfWeek";
import { StoryCounter } from "../StoryCounter";

export const WeekDay = ({ date, stories }) => {
  return (
    <div className="md:border border-b border-neutral-100 md:rounded-md hover:bg-neutral-200/20 flex flex-col gap-2 p-2 md:w-40">
      <div className="flex flex-col">
        <DayOfWeek textSize="text-sm" date={date}></DayOfWeek>
        <StoryCounter stories={stories}></StoryCounter>
      </div>
      <div className="text-xs flex flex-col gap-2 grow">
        {stories.map((story) => (
          <Link key={story.id} to={`/story/${story.id}`}>
            <p className="hover:text-green-800">{story.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

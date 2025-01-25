import { useParams } from "react-router";
import { CgUser } from "react-icons/cg";
import { CiClock2 } from "react-icons/ci";
import { useFetchStoriesByDay } from "../hooks/useFetchStoriesByDay";
import { DayOfWeek } from "../components/UI/ShowDayOfWeek";
import { StoryCounter } from "../components/UI/StoryCounter";

export const DayOverview = () => {
  const { date } = useParams();
  const { stories, loading } = useFetchStoriesByDay(date);

  if (loading) {
    return <p>Loading ... </p>;
  }

  return (
    <div className="flex flex-col p-10">
      <div className="flex flex-col gap-1 mb-5">
        <DayOfWeek date={date}></DayOfWeek>
        <StoryCounter stories={stories}></StoryCounter>
      </div>

      {stories.map((story) => {
        const formattedTime = new Date(story.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        return (
          <div key={story.id} className="mb-5 max-w-3xl flex flex-col gap-2">
            <h1 className="text-5xl font-extrabold">{story.title}</h1>
            <div className="flex flex-col gap-1 text-neutral-600">
              <div className="flex flex-row text-sm gap-3 ">
                {story.journalists.map((journalist) => {
                  return (
                    <div
                      key={journalist.user.id}
                      className="flex flex-row gap-1 items-center justify-between"
                    >
                      <CgUser></CgUser>
                      <p>{journalist.user.name}</p>{" "}
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-1">
                <CiClock2></CiClock2>
                <p className="text-xs">{formattedTime}</p>
              </div>
            </div>
            <p className="max-w-4xl">{story.description}</p>
          </div>
        );
      })}
    </div>
  );
};

import { useParams } from "react-router";
import { useFetchStoriesByDate } from "../hooks/useFetchStoriesByDate";
import { DayOfWeek } from "../components/UI/ShowDayOfWeek";
import { StoryCounter } from "../components/UI/StoryCounter";
import { StoryTimeOfCreation } from "../components/UI/StoryTimeOfCreation";
import { StoryListJournalists } from "../components/UI/StoryListJournalists";
import { GoToStory } from "../components/UI/Buttons/GoToStory";

export const DayOverview = () => {
  const { date: paramDate } = useParams();
  const date = paramDate || new Date().toLocaleDateString("en-CA");
  const { stories, loading } = useFetchStoriesByDate(date);

  console.log("todays date is:", date);

  if (loading) {
    return <p>Loading ... </p>;
  }

  return (
    <div className="flex flex-col p-10 ">
      <div className="flex flex-col gap-1 mb-5">
        <DayOfWeek date={date}></DayOfWeek>
        <StoryCounter stories={stories}></StoryCounter>
      </div>

      {stories.map((story) => {
        return (
          <div
            key={story.id}
            className="mb-5 max-w-3xl flex flex-col gap-2 border p-5 shadow-sm rounded-md"
          >
            <h1 className="text-4xl font-extrabold">{story.title}</h1>
            <div className="flex flex-col gap-1 text-neutral-600">
              <StoryListJournalists story={story}></StoryListJournalists>
              <StoryTimeOfCreation time={story.createdAt}></StoryTimeOfCreation>
            </div>
            <p className="max-w-4xl">{story.description}</p>
            <GoToStory story={story}></GoToStory>
          </div>
        );
      })}
    </div>
  );
};

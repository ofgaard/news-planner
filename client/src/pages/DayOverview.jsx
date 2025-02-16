import { useParams } from "react-router";
import { useEffect } from "react";
import { useFetchStoriesByDate } from "../hooks/useFetchStoriesByDate";
import { DayOfWeek } from "../components/UI/ShowDayOfWeek";
import { StoryCounter } from "../components/UI/StoryCounter";
import { useSubmission } from "../context/SubmissionContext";
import { StoryCard } from "../components/UI/Cards/StoryCard";

export const DayOverview = () => {
  const { date, topic } = useParams();
  const storiesDate = date || new Date().toLocaleDateString("en-CA");
  const { newStorySubmitted } = useSubmission();

  const { stories, loading, loadStories } = useFetchStoriesByDate(storiesDate);

  let storiesToRender = stories;

  if (topic) {
    storiesToRender = stories.filter((story) => story.topic === topic);
  }

  useEffect(() => {
    if (newStorySubmitted) {
      loadStories();
    }
  }, [newStorySubmitted]);

  if (loading) {
    return <p>Loading ... </p>;
  }

  return (
    <div className="flex flex-col p-10 ">
      <div className="flex flex-col gap-1 mb-5">
        <div className="flex justify-between items-center">
          <DayOfWeek date={storiesDate}></DayOfWeek>
          {topic && <h1 className="font-extrabold">#{topic}</h1>}
        </div>
        {topic ? (
          <StoryCounter stories={storiesToRender}></StoryCounter>
        ) : (
          <StoryCounter stories={stories}></StoryCounter>
        )}
      </div>

      {storiesToRender.map((story) => {
        return <StoryCard key={story.id} story={story}></StoryCard>;
      })}
    </div>
  );
};

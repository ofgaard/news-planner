import { useParams } from "react-router";
import { useEffect } from "react";
import { useStories } from "../context/StoryContext";

import { DayOfWeek } from "../components/UI/ShowDayOfWeek";
import { StoryCounter } from "../components/UI/StoryCounter";
import { StoryCard } from "../components/UI/Cards/StoryCard";

export const DayOverview = () => {
  const { date, topic } = useParams();
  const storiesDate = date || new Date().toLocaleDateString("en-CA");
  const { storiesByDate, setStoriesByDate, updateDate, loadingDailyStories } =
    useStories();

  console.log(storiesByDate);
  const handleDelete = (id) => {
    setStoriesByDate((prevStories) =>
      prevStories.filter((story) => story.id !== id)
    );
  };

  useEffect(() => {
    updateDate(storiesDate);
  }, [storiesDate, updateDate]);

  let storiesToRender = storiesByDate;

  storiesToRender = storiesToRender.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  if (topic) {
    storiesToRender = storiesByDate.filter((story) => story.topic === topic);
  }

  if (loadingDailyStories) {
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
          <StoryCounter stories={storiesByDate}></StoryCounter>
        )}
      </div>

      {storiesToRender.map((story) => {
        return (
          <StoryCard
            key={story.id}
            story={story}
            onDelete={handleDelete}
          ></StoryCard>
        );
      })}
    </div>
  );
};

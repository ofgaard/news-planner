import { useParams } from "react-router";
import { useFetchStoryById } from "../hooks/useFetchStoryById";
import { StoryListJournalists } from "../components/UI/StoryListJournalists";
import { StoryTimeOfCreation } from "../components/UI/StoryTimeOfCreation";
import { StoryTopic } from "../components/UI/StoryTopic";

export const StoryOverview = () => {
  const { id } = useParams();
  const { story } = useFetchStoryById(id);

  if (!story) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col p-10 gap-1">
      <h1 className="text-4xl font-extrabold">{story.title}</h1>
      <StoryListJournalists story={story}></StoryListJournalists>
      <div className="flex gap-3">
        <StoryTimeOfCreation time={story.createdAt}></StoryTimeOfCreation>
        <StoryTopic topic={story.topic}></StoryTopic>
      </div>
      <p className="text-md mt-5">{story.description}</p>
    </div>
  );
};

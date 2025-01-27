import { useParams } from "react-router";
import { useFetchStoryById } from "../hooks/useFetchStoryById";
import { StoryListJournalists } from "../components/UI/StoryListJournalists";
import { StoryTimeOfCreation } from "../components/UI/StoryTimeOfCreation";

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
      <StoryTimeOfCreation time={story.createdAt}></StoryTimeOfCreation>
      <p className="text-md mt-5">{story.description}</p>
    </div>
  );
};

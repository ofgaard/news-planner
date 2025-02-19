import { useNavigate, useParams } from "react-router";
import { useFetchStoryById } from "../hooks/useFetchStoryById";
import { StoryListJournalists } from "../components/UI/StoryListJournalists";
import { StoryTimeOfCreation } from "../components/UI/StoryTimeOfCreation";
import { StoryTopic } from "../components/UI/StoryTopic";
import { FaEdit } from "react-icons/fa";
import { DeleteStory } from "../components/UI/Buttons/DeleteStory";

export const StoryOverview = () => {
  const { id } = useParams();
  const { story } = useFetchStoryById(id);
  const navigate = useNavigate();

  if (!story) {
    return <h1>Loading...</h1>;
  }

  const handleDelete = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col p-10 gap-1">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-extrabold">{story.title}</h1>
        <div className="flex items-center gap-4">
          <FaEdit size={30}></FaEdit>
          <DeleteStory
            id={story.id}
            size={30}
            onDelete={handleDelete}
          ></DeleteStory>
        </div>
      </div>
      <StoryListJournalists story={story}></StoryListJournalists>
      <div className="flex gap-3">
        <StoryTimeOfCreation time={story.createdAt}></StoryTimeOfCreation>
        <StoryTopic topic={story.topic}></StoryTopic>
      </div>
      <p className="text-md mt-5">{story.description}</p>
    </div>
  );
};

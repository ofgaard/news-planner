import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useFetchStoryById } from "../hooks/useFetchStoryById";
import { StoryListJournalists } from "../components/UI/StoryListJournalists";
import { StoryTimeOfCreation } from "../components/UI/StoryTimeOfCreation";
import { StoryTopic } from "../components/UI/StoryTopic";
import { DeleteStory } from "../components/UI/Buttons/DeleteStory";
import { StoryDateOfCreation } from "../components/UI/StoryDetails/StoryDateOfCreation";
import { EditStory } from "../components/Forms/EditStory";

export const StoryOverview = () => {
  const { id } = useParams();

  const { story: initialStory } = useFetchStoryById(id);
  const [story, setStory] = useState(null);
  const [editMode, setEditMode] = useState({
    title: false,
    description: false,
  });

  useEffect(() => {
    if (initialStory) {
      setStory(initialStory);
    }
  }, [initialStory]);

  const toggleEditMode = (field) => {
    setEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  if (!story) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col p-10 gap-1">
      <div className="flex items-center justify-between">
        <h1
          className="text-4xl font-extrabold"
          onClick={() => !editMode.title && toggleEditMode("title")}
        >
          {editMode.title ? (
            <EditStory
              storyId={id}
              field="title"
              initialValue={story.title}
              toggleEditMode={toggleEditMode}
              setStory={setStory}
            />
          ) : (
            story.title
          )}
        </h1>
        <div className="flex items-center gap-4">
          <DeleteStory id={story.id} size={30}></DeleteStory>
        </div>
      </div>
      <StoryListJournalists story={story}></StoryListJournalists>
      <div className="flex gap-3">
        <StoryTimeOfCreation time={story.createdAt}></StoryTimeOfCreation>
        <StoryDateOfCreation date={story.createdAt}></StoryDateOfCreation>
      </div>
      <StoryTopic topic={story.topic}></StoryTopic>

      <p
        className="text-md mt-5 max-w-6xl"
        onClick={() => !editMode.description && toggleEditMode("description")}
      >
        {editMode.description ? (
          <EditStory
            storyId={id}
            field="description"
            initialValue={story.description}
            toggleEditMode={toggleEditMode}
            setStory={setStory}
          />
        ) : (
          story.description
        )}
      </p>
    </div>
  );
};

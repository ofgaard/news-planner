import { StoryTopic } from "../StoryTopic";
import { StoryListJournalists } from "../StoryListJournalists";
import { StoryTimeOfCreation } from "../StoryTimeOfCreation";
import { StoryDateOfCreation } from "../StoryDateOfCreation";
import { GoToStory } from "../Buttons/GoToStory";

export const StoryCard = ({ story, showDate }) => {
  if (story) {
    return (
      <div
        key={story.id}
        className="mb-5 max-w-3xl flex flex-col gap-2 border p-5 shadow-sm rounded-md"
      >
        <div className="flex justify-between">
          <h1 className="text-4xl font-extrabold">{story.title}</h1>
          <StoryTopic topic={story.topic}></StoryTopic>
        </div>
        <div className="flex flex-col gap-1 text-neutral-600">
          <StoryListJournalists story={story}></StoryListJournalists>
          <div className="flex gap-2">
            <StoryTimeOfCreation time={story.createdAt}></StoryTimeOfCreation>
            {showDate && (
              <StoryDateOfCreation date={story.createdAt}></StoryDateOfCreation>
            )}{" "}
          </div>
        </div>
        <p className="max-w-4xl">{story.description}</p>
        <GoToStory story={story}></GoToStory>
      </div>
    );
  }
};

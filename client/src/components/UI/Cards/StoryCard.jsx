import { StoryTopic } from "../StoryTopic";
import { Link } from "react-router";
import { StoryListJournalists } from "../StoryListJournalists";
import { StoryTimeOfCreation } from "../StoryTimeOfCreation";
import { DeleteStory } from "../Buttons/DeleteStory";

export const StoryCard = ({ story, onDelete, showDate }) => {
  if (story) {
    return (
      <div className="flex">
        <Link
          key={story.id}
          className="mb-5 max-w-3xl flex flex-col gap-2 border p-5 shadow-sm rounded-md hover:bg-neutral-50 w-full"
          to={`/story/${story.id}`}
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
                <StoryDateOfCreation
                  date={story.createdAt}
                ></StoryDateOfCreation>
              )}{" "}
            </div>
          </div>
          <p className="max-w-4xl">{story.description}</p>
          <div className="flex ml-auto gap-2 items-center"></div>
        </Link>
      </div>
    );
  }
};

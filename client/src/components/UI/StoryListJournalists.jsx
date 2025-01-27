import { CgUser } from "react-icons/cg";

export const StoryListJournalists = ({ story }) => {
  return (
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
  );
};

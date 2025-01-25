import { GrArticle } from "react-icons/gr";
export const StoryCounter = ({ stories, iconSize = 15 }) => {
  return (
    <>
      <div className="flex flex-row text-neutral-600 gap-1 items-center">
        <GrArticle size={iconSize} />
        <p className="text-xs">{stories.length} stories</p>
      </div>
    </>
  );
};

import { CiCalendarDate } from "react-icons/ci";

export const StoryDateOfCreation = ({ date: storyDate }) => {
  const formattedDate = new Date(storyDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="flex gap-1">
      <CiCalendarDate></CiCalendarDate>
      <p className="text-xs">{formattedDate}</p>
    </div>
  );
};

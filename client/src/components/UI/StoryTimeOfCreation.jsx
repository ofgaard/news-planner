import { CiClock2 } from "react-icons/ci";

export const StoryTimeOfCreation = ({ time: storyCreatedAt }) => {
  const formattedTime = new Date(storyCreatedAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="flex gap-1">
      <CiClock2></CiClock2>
      <p className="text-xs">{formattedTime}</p>
    </div>
  );
};

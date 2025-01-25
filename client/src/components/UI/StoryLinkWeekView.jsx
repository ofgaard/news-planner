import { Link } from "react-router";

export const StoryLink = ({ label, to }) => {
  console.log("link:", to);
  return (
    <Link
      to={to}
      className="flex flex-row items-center hover:bg-neutral-100 bg-opacity-65 w-full"
    >
      <p className="text-xs">{label}</p>
    </Link>
  );
};

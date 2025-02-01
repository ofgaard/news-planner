import { Link } from "react-router";

export const MenuItemTopic = ({ label }) => {
  const today = new Date().toLocaleDateString("en-CA");
  return (
    <Link
      className="flex flex-row items-center gap-2 hover:bg-neutral-100 bg-opacity-65 w-full py-1"
      to={`/day/${today}/${label}`}
    >
      <p className="text-xs"> {label}</p>
    </Link>
  );
};

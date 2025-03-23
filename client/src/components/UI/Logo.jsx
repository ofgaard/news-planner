import { FaRegNewspaper } from "react-icons/fa";

export const Logo = ({ name }) => {
  return (
    <div className="flex flex-row items-center gap-2 hover:bg-neutral-100 bg-opacity-65 w-full py-1">
      <FaRegNewspaper
        size={25}
        color="var(--color-newsblue-600"
      ></FaRegNewspaper>
      <p className="text-sm font-bold">{name}</p>
    </div>
  );
};

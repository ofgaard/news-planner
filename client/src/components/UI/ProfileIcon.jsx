import { CgProfile } from "react-icons/cg";

export const ProfileIcon = ({ name }) => {
  return (
    <div className="flex flex-row items-center gap-2 hover:bg-neutral-100 bg-opacity-65 w-full py-1">
      <CgProfile size={25} color="darkgreen"></CgProfile>
      <p className="text-sm font-bold">{name}</p>
    </div>
  );
};

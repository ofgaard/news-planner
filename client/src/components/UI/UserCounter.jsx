import { PiUsers } from "react-icons/pi";

export const UserCounter = ({ users, iconSize = 15 }) => {
  return (
    <>
      <div className="flex flex-row text-neutral-600 gap-1 items-center">
        <PiUsers size={iconSize} />
        <p className="text-xs">{users.length} users</p>
      </div>
    </>
  );
};

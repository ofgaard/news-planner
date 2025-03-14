import { Link } from "react-router";

export const UserLink = ({ user }) => {
  return (
    <Link
      to={`/users/${user.id}`}
      className="flex flex-row items-center gap-2 hover:bg-neutral-100 bg-opacity-65 w-full py-1 px-2"
    >
      <p className="text-sm">{user.name}</p>
    </Link>
  );
};

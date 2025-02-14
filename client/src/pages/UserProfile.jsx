import { useParams } from "react-router";
import { useFetchUserById } from "../hooks/useFetchUserById";

export const UserProfile = () => {
  const { id } = useParams();
  const { user, loading } = useFetchUserById(id);

  if (!user) return <p>no user found</p>;
  if (loading) return <p>loading</p>;

  console.log(user);
  return (
    <div className="flex flex-col p-10">
      <p className="font-extrabold text-xl">{user.name}</p>
      <p className="text-xs text-neutral-600">{user.role}</p>

      <div className="mt-5 border min-h-52"></div>
    </div>
  );
};

import { useFetchAllUsers } from "../hooks/useFetchAllUsers";
import { UserLink } from "../components/UI/UserLink";
import { UserCounter } from "../components/UI/UserCounter";

export const UsersOverview = () => {
  const { users } = useFetchAllUsers();

  return (
    <div className="flex flex-col p-10">
      <h1 className="font-extrabold text-xl">Reporters</h1>
      <UserCounter users={users}></UserCounter>
      <div className="mt-10 flex flex-col gap-1">
        {users.map((user) => {
          return <UserLink key={user.id} user={user}></UserLink>;
        })}
      </div>
    </div>
  );
};

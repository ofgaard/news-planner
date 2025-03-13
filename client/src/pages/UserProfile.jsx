import { useParams } from "react-router";
import { useFetchUserById } from "../hooks/useFetchUserById";
import { useFetchUserStories } from "../hooks/User/useFetchUserStories";

export const UserProfile = () => {
  const { id } = useParams();
  const { userStories, loading: storiesLoading } = useFetchUserStories(id);
  const { user, loading } = useFetchUserById(id);

  if (!user) return <p>no user found</p>;
  if (loading) return <p>loading</p>;

  console.log(user);
  return (
    <div className="flex flex-col p-10">
      <p className="font-extrabold text-xl">{user.name}</p>
      <p className="text-xs text-neutral-600">{user.role}</p>

      <div className="mt-5 border min-h-52">
        {storiesLoading ? (
          <p>Loading ...</p>
        ) : userStories.length > 0 ? (
          <ul>
            {userStories.map((story) => (
              <li key={story.id}>{story.title}</li>
            ))}
          </ul>
        ) : (
          <p>No stories found</p>
        )}
      </div>
    </div>
  );
};

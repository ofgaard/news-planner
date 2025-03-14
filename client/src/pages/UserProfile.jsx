import { useParams } from "react-router";
import { useFetchUserById } from "../hooks/useFetchUserById";
import { useFetchUserStories } from "../hooks/User/useFetchUserStories";
import { Link } from "react-router";
import { StoryDateOfCreation } from "../components/UI/StoryDetails/StoryDateOfCreation";
import { StoryCounter } from "../components/UI/StoryCounter";

export const UserProfile = () => {
  const { id } = useParams();
  const { userStories, loading: storiesLoading } = useFetchUserStories(id);
  const { user, loading } = useFetchUserById(id);

  if (!user) return <p>no user found</p>;
  if (loading) return <p>loading</p>;

  console.log(user);
  return (
    <div className="flex flex-col p-10">
      <div className="border-b pb-2">
        <p className="font-extrabold text-xl">{user.name}</p>
        <p className="text-xs text-neutral-600">{user.role}</p>
      </div>
      <div className="flex flex-col mt-15 gap-4">
        <div>
          <h1 className="text-neutral-800 font-bold text-sm">Stories</h1>
          <StoryCounter stories={userStories}></StoryCounter>
        </div>
        <div className="min-h-52">
          {storiesLoading ? (
            <p>Loading ...</p>
          ) : userStories.length > 0 ? (
            <ul className="flex flex-col gap-1">
              {userStories.map((story) => (
                <Link
                  className="hover:bg-neutral-300/20 border-b pb-1"
                  key={story.id}
                  to={`/story/${story.id}`}
                >
                  <div className="flex gap-1 items-center px-2 ">
                    <p className="font-bold text-xs">{story.title}</p>
                    <p className="text-xs text-neutral-600">#{story.topic}</p>
                    <div className="ml-auto">
                      <StoryDateOfCreation
                        date={story.createdAt}
                      ></StoryDateOfCreation>
                    </div>
                  </div>
                </Link>
              ))}
            </ul>
          ) : (
            <p>No stories found</p>
          )}
        </div>
      </div>
    </div>
  );
};

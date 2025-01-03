import { useEffect, useState, useParams } from "react";
import { GrArticle } from "react-icons/gr";
import { CgUser } from "react-icons/cg";
import { CiClock2 } from "react-icons/ci";
import { fetchStoriesByDay } from "../services/api/Stories";
import { Weekday } from "./UI/ShowWeekday";

export const DayOverview = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedStories = await fetchStoriesByDay();
        console.log(fetchedStories);
        setStories(fetchedStories);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading ... </p>;
  }

  if (!stories || stories.length === 0) {
    return <p>No stories available</p>;
  }

  return (
    <div className="flex flex-col px-10 py-10">
      <div className="flex flex-col gap-1 mb-5">
        <Weekday></Weekday>
        <div className="flex flex-row text-neutral-600 gap-1 items-center">
          <GrArticle size={15} />
          <p className="text-xs">{stories.length} stories</p>
        </div>
      </div>

      {stories.map((story) => {
        const formattedTime = new Date(story.createdAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        return (
          <div key={story.id} className="mb-5 max-w-3xl flex flex-col gap-2">
            <h1 className="text-5xl font-extrabold">{story.title}</h1>
            <div className="flex flex-col gap-1 text-neutral-600">
              <div className="flex flex-row text-sm gap-3 ">
                {story.journalists.map((journalist) => {
                  return (
                    <div
                      key={journalist.user.id}
                      className="flex flex-row gap-1 items-center justify-between"
                    >
                      <CgUser></CgUser>
                      <p>{journalist.user.name}</p>{" "}
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-1">
                <CiClock2></CiClock2>
                <p className="text-xs">{formattedTime}</p>
              </div>
            </div>
            <p className="max-w-4xl">{story.description}</p>
          </div>
        );
      })}
    </div>
  );
};

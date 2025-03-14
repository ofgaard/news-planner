import { useParams, Link } from "react-router";
import { useFetchStoriesByWeek } from "../hooks/useFetchStoriesByWeek";
import { WeekDay } from "../components/UI/Cards/WeekDay";
import { browseWeeks } from "../utils/browseWeeks";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const WeekOverview = () => {
  const { startDate } = useParams();
  const storiesDate = startDate || new Date().toLocaleDateString("en-CA");
  const { stories, loading } = useFetchStoriesByWeek(storiesDate);
  console.log(stories);

  if (loading) {
    return <p>Loading ... </p>;
  }

  return (
    <div className="flex flex-col p-10">
      <div className="flex gap-2 items-center">
        <Link to={`/week/${browseWeeks(storiesDate, -1)}`}>
          {" "}
          <FaArrowLeft size={10}></FaArrowLeft>{" "}
        </Link>
        <h1 className="font-extrabold text-xl">
          {storiesDate} - {browseWeeks(storiesDate, 1)}
        </h1>
        <Link to={`/week/${browseWeeks(storiesDate, 1)}`}>
          {" "}
          <FaArrowRight size={10}></FaArrowRight>{" "}
        </Link>
      </div>

      <div className="flex md:flex-row flex-col min-w-full gap-2 mt-20 flex-wrap">
        {stories.map((day, index) => (
          <WeekDay key={index} date={day.date} stories={day.stories}></WeekDay>
        ))}
      </div>
    </div>
  );
};

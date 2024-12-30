import { GrArticle } from "react-icons/gr";
import { CgUser } from "react-icons/cg";
import { CiClock2 } from "react-icons/ci";

export const DayOverview = ({ stories, date }) => {
  return (
    <div className="flex flex-col px-10 py-10">
      <div className="flex flex-col gap-1 mb-5">
        <h1 className="text-xl font-extrabold">{date}</h1>
        <div className="flex flex-row text-neutral-600 gap-1 items-center">
          <GrArticle size={15} />
          <p className="text-xs">{stories.length} stories</p>
        </div>
      </div>

      {stories.map((story) => (
        <div key={story.id} className="mb-5 max-w-3xl flex flex-col gap-5">
          <h1 className="text-5xl font-extrabold">{story.title}</h1>

          <div className="flex flex-row text-sm gap-3 text-neutral-600">
            {story.journalists.map((journalist, index) => (
              <div key={index} className="flex flex-row gap-1 items-center">
                <CgUser />
                <p>{journalist}</p>
              </div>
            ))}
          </div>

          <p className="max-w-4xl">{story.description}</p>

          <div>
            <h1 className="font-extrabold">Sources</h1>
            <ul className="text-sm text-neutral-600">
              {story.sources.map((source, index) => (
                <li key={index}>
                  {source.name}: {source.number}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

import { Link } from "react-router";
import { FaExternalLinkAlt } from "react-icons/fa";

export const GoToStory = ({ story }) => {
  return (
    <>
      <Link to={`/story/${story.id}`}>
        <FaExternalLinkAlt
          size={15}
          className="text-neutral-950 hover:text-neutral-600"
        ></FaExternalLinkAlt>
      </Link>
    </>
  );
};

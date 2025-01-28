import { Link } from "react-router";
import { FaExternalLinkAlt } from "react-icons/fa";

export const GoToStory = ({ story }) => {
  return (
    <>
      <Link to={`/story/${story.id}`}>
        <FaExternalLinkAlt size={15} className="ml-auto"></FaExternalLinkAlt>
      </Link>
    </>
  );
};

import { Link } from "react-router";
import { FaExternalLinkAlt } from "react-icons/fa";

export const GoToDate = ({ date }) => {
  return (
    <>
      <Link to={`/day/${date}`}>
        <FaExternalLinkAlt
          size={8}
          className="ml-auto mt-auto"
        ></FaExternalLinkAlt>
      </Link>
    </>
  );
};

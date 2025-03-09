import { useDeleteStory } from "../../../hooks/useDeleteStory";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router";
import { useStories } from "../../../context/StoryContext";

export const DeleteStory = ({ id, size = 20 }) => {
  const { refreshStories } = useStories();
  const navigate = useNavigate();
  const { deleteStoryById, loading } = useDeleteStory();

  const handleDelete = async () => {
    await deleteStoryById(id);
    await refreshStories();
    navigate("/");
  };

  return (
    <MdDelete
      className="hover:cursor-pointer text-neutral-950 hover:text-neutral-600"
      size={size}
      onClick={handleDelete}
    ></MdDelete>
  );
};

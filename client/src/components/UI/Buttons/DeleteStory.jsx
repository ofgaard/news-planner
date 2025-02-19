import { useDeleteStory } from "../../../hooks/useDeleteStory";
import { MdDelete } from "react-icons/md";

export const DeleteStory = ({ id, size = 20, onDelete }) => {
  const { deleteStoryById, loading } = useDeleteStory();

  const handleDelete = async () => {
    deleteStoryById(id);
    onDelete(id);
  };

  return <MdDelete size={size} onClick={handleDelete}></MdDelete>;
};

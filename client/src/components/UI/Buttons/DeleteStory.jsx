import { useDeleteStory } from "../../../hooks/useDeleteStory";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router";
import { useStories } from "../../../context/StoryContext";
import { useState } from "react";
import { ConfirmDelete } from "../Modals/ConfirmDeletion";

export const DeleteStory = ({ id, size = 20 }) => {
  const [confirmationBoxOpen, setConfirmationBoxOpen] = useState(false);
  const { refreshStories } = useStories();
  const navigate = useNavigate();
  const { deleteStoryById, loading } = useDeleteStory();

  const handleDeleteClick = () => {
    setConfirmationBoxOpen(true);
  };

  const handleCancelClick = () => {
    setConfirmationBoxOpen(false);
  };

  const handleDelete = async () => {
    await deleteStoryById(id);
    await refreshStories();
    navigate("/");
  };

  return (
    <>
      <MdDelete
        className="hover:cursor-pointer text-neutral-950 hover:text-neutral-600"
        size={size}
        onClick={handleDeleteClick}
      ></MdDelete>
      <ConfirmDelete
        isOpen={confirmationBoxOpen}
        onCancel={handleCancelClick}
        onConfirm={handleDelete}
      ></ConfirmDelete>
    </>
  );
};

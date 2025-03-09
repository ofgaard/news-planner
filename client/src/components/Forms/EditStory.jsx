import { useState } from "react";
import { useEditStory } from "../../hooks/useEditStory";

export const EditStory = ({ storyId, field, initialValue }) => {
  const [input, setInput] = useState(initialValue || "");
  const { editStoryById, loading } = useEditStory();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    if (!input.trim()) return alert("Please fill out the field");
    try {
      await editStoryById(storyId, { [field]: input });
      alert("Story updated");
    } catch (error) {
      alert("Failed to update:", error);
    }
  };
  return (
    <div>
      <textarea
        value={input}
        onChange={handleInput}
        placeholder="write some stuff here"
      ></textarea>
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Updating..." : "Update"}
      </button>
    </div>
  );
};

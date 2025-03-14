import { useState } from "react";
import { useStories } from "../../context/StoryContext";
import { useEditStory } from "../../hooks/useEditStory";
import { FormCancel } from "../UI/Buttons/FormCancel";
import { FormSubmit } from "../UI/Buttons/FormSubmit";

export const EditStory = ({
  storyId,
  field,
  initialValue,
  toggleEditMode,
  setStory,
}) => {
  const [input, setInput] = useState(initialValue || "");
  const { editStoryById, loading } = useEditStory();
  const { refreshStories } = useStories();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    if (!input.trim()) return alert("Please fill out the field");
    try {
      await editStoryById(storyId, { [field]: input });
      setStory((prev) => ({ ...prev, [field]: input }));
      toggleEditMode(field);
      refreshStories();
    } catch (error) {
      alert("Failed to update:", error);
    }
  };
  return (
    <div className="flex flex-col">
      <textarea
        value={input}
        onChange={handleInput}
        className="border rounded-md pl-1"
      ></textarea>
      <div className="flex ml-auto gap-1 mt-3">
        <FormCancel action={() => toggleEditMode(field)}></FormCancel>
        <FormSubmit submitFunction={handleSubmit}></FormSubmit>
      </div>
    </div>
  );
};

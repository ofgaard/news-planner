import { FormButton } from "./UI/FormButton";
import { useState } from "react";
import { formatDate } from "../utils/formatDate";
import { useSubmitStory } from "../hooks/useSubmitStory";

export const AddForm = ({ toggle }) => {
  const { submitStory } = useSubmitStory();
  const [formInput, setFormInput] = useState({
    title: "",
    description: "",
    userId: "",
    date: "",
  });

  const handleInput = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedDate = formatDate(formInput.date);
    const formData = {
      ...formInput,
      date: formattedDate,
    };

    try {
      console.log(formData);
      submitStory(formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed z-50 inset-0 flex justify-center mt-28">
      <div className="border drop-shadow-xl max-h-60 w-96 py-4 px-3 rounded-md flex flex-col bg-white overflow-y-auto">
        <form
          action="submit"
          method="post"
          id="add_story"
          className="flex flex-col gap-2 flex-1"
        >
          <input
            type="text"
            name="title"
            value={formInput.title}
            placeholder="Title"
            onChange={handleInput}
          />
          <input
            name="description"
            type="text"
            value={formInput.description}
            placeholder="Description"
            onChange={handleInput}
          />
          <input
            name="userId"
            type="input"
            value={formInput.userId}
            placeholder="Journalist (user userId for now)"
            onChange={handleInput}
          />
          <input
            type="date"
            name="date"
            value={formInput.date}
            className="text-xs"
            onChange={handleInput}
          />
          <div className="flex gap-1 flex-wrap">
            <p className="text-xs bg-neutral-200 bg-opacity-35 border rounded-md px-1.5">
              User
            </p>
            <p className="text-xs bg-neutral-200 bg-opacity-35 border rounded-md px-1.5">
              User
            </p>
          </div>
          <div className="flex ml-auto mt-auto gap-2">
            <FormButton
              text={"Cancel"}
              onClick={toggle()}
              color={"bg-neutral-200"}
            ></FormButton>
            <FormButton
              text={"Submit"}
              onClick={handleSubmit}
              color={"bg-lime-700"}
              textColor={"text-white"}
            ></FormButton>
          </div>
        </form>
      </div>
    </div>
  );
};

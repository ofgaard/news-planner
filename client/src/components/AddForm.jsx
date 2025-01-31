import { FormButton } from "./UI/FormButton";
import { useSubmitStory } from "../hooks/useSubmitStory";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useFetchAllUsers } from "../hooks/useFetchAllUsers";
import { useFetchTopics } from "../hooks/useFetchTopics";

export const AddForm = ({ onClose }) => {
  const { submitStory } = useSubmitStory();
  const { users } = useFetchAllUsers();
  const { topics } = useFetchTopics();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedTopics, setSelectedTopics] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm();

  const handleUserChange = (e) => {
    const selectedUserId = e.target.value;
    setSelectedUsers((prev) => {
      if (prev.includes(selectedUserId)) {
        return prev.filter((id) => id !== selectedUserId);
      } else {
        return [...prev, selectedUserId];
      }
    });
  };

  const onSubmit = async (data) => {
    data.journalists = selectedUsers;
    const submittedData = await submitStory(data);
  };

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center">
      <div className="bg-white w-96 p-8 rounded-lg max-h-64 overflow-y-auto mt-20">
        <h1 className="text-2xl font-bold">Add Story</h1>
        <form
          className="flex flex-col gap-4 mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("title", {
              required: "Title is required",
            })}
            type="text"
            placeholder="Title"
          />
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
          <input
            {...register("description", {
              required: "Description is required",
            })}
            type="text"
            placeholder="Description"
          ></input>
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
          <select
            {...register("topic", {
              required: true,
            })}
            onChange={(e) =>
              setSelectedTopics([...selectedTopics, e.target.value])
            }
          >
            {topics.map((topic) => (
              <option key={topic.id} value={topic.id} className="text-white">
                {topic}
              </option>
            ))}
          </select>

          <select
            {...register("journalists")}
            onChange={handleUserChange}
            multiple
          >
            {users.map((user) => (
              <option key={user.id} value={user.id} className="text-white">
                {user.name}
              </option>
            ))}
          </select>
          <div className="flex flex-row gap-2">
            {selectedUsers.map((user, index) => (
              <p key={index}>{user}</p>
            ))}
          </div>

          <label htmlFor="publishBy">Publish by:</label>
          <input
            {...register("publishBy", {
              required: "Publish by is required",
            })}
            type="date"
            placeholder="Publish by"
          ></input>
          {errors.publishBy && (
            <p className="text-red-500">{errors.publishBy.message}</p>
          )}

          <button
            disabled={isSubmitting}
            className="mt-auto ml-auto border w-full rounded-md p-1"
            type="submit"
          >
            {isSubmitting ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

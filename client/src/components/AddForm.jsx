import { useSubmitStory } from "../hooks/useSubmitStory";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useFetchAllUsers } from "../hooks/useFetchAllUsers";
import { useFetchTopics } from "../hooks/useFetchTopics";
import Select from "react-select";

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
  } = useForm();

  const onSubmit = async (data) => {
    data.journalists = selectedUsers.map((user) => user.value);
    await submitStory(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-800">Add Story</h1>
        <form
          className="flex flex-col gap-4 mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("title", { required: "Title is required" })}
            type="text"
            placeholder="Title"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title.message}</p>
          )}

          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Description"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {errors.description && (
            <p className="text-sm text-red-500">{errors.description.message}</p>
          )}

          <select
            {...register("topic", { required: true })}
            onChange={(e) =>
              setSelectedTopics([...selectedTopics, e.target.value])
            }
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Topic</option>
            {topics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic}
              </option>
            ))}
          </select>

          <label className="text-gray-700">Select Journalists:</label>
          <Select
            options={users.map((user) => ({
              value: user.id,
              label: user.name,
            }))}
            isMulti
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={setSelectedUsers}
          />

          <label htmlFor="publishBy" className="text-gray-700">
            Publish by:
          </label>
          <input
            {...register("publishBy", { required: "Publish by is required" })}
            type="date"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.publishBy && (
            <p className="text-sm text-red-500">{errors.publishBy.message}</p>
          )}
          <div className="flex gap-2 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-full p-2 text-white bg-gray-500 rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              disabled={isSubmitting}
              className="w-full p-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
              type="submit"
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

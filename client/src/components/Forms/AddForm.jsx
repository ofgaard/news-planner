import { useSubmitStory } from "../../hooks/useSubmitStory";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useFetchAllUsers } from "../../hooks/useFetchAllUsers";
import { useStories } from "../../context/StoryContext";
import { useFetchTopics } from "../../hooks/useFetchTopics";
import { FormSubmit } from "../UI/Buttons/FormSubmit";
import { FormCancel } from "../UI/Buttons/FormCancel";
import { Input } from "../UI/FormFields/Input";
import { MultiSelect } from "../UI/FormFields/MultiSelect";
import { Select } from "../UI/FormFields/Select";
import { TextArea } from "../UI/FormFields/TextArea";

export const AddForm = ({ onClose }) => {
  const { submitStory } = useSubmitStory();
  const { refreshStories } = useStories();
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
    refreshStories();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-800">Add Story</h1>
        <form
          className="flex flex-col gap-4 mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Title"
            name="title"
            register={register}
            validation={{ required: "Title is required" }}
          />
          {errors.title && (
            <p className="text-sm text-red-500">{errors.title.message}</p>
          )}

          <TextArea
            label="Description"
            name="description"
            register={register}
            validation={{ required: "Description is required" }}
          />
          {errors.description && (
            <p className="text-sm text-red-500">{errors.description.message}</p>
          )}

          <Select
            label="Select Topic"
            name="topic"
            options={topics}
            register={register}
            validation={{ required: true }}
            onChange={(e) =>
              setSelectedTopics([...selectedTopics, e.target.value])
            }
          />

          <MultiSelect
            label="Select Journalists"
            options={users.map((user) => ({
              value: user.id,
              label: user.name,
            }))}
            onChange={setSelectedUsers}
          />

          <Input
            label="Publish by"
            name="publishBy"
            type="date"
            register={register}
            validation={{ required: "Publish by is required" }}
          />
          {errors.publishBy && (
            <p className="text-sm text-red-500">{errors.publishBy.message}</p>
          )}

          <div className="flex gap-2 mt-2 ml-auto">
            <FormCancel action={onClose} />
            <FormSubmit isSubmitting={isSubmitting} />
          </div>
        </form>
      </div>
    </div>
  );
};

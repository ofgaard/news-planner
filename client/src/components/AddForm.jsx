import { FormButton } from "./UI/FormButton";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { formatDate } from "../utils/formatDate";
import { useSubmitStory } from "../hooks/useSubmitStory";
import { useFetchTopics } from "../hooks/useFetchTopics";

export const AddForm = ({ onClose }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center">
      <div className="bg-white w-96  p-8 rounded-lg max-h-64 overflow-y-auto mt-20">
        <h1 className="text-2xl font-bold">Add Story</h1>
        <form
          className="flex flex-col gap-4 mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input {...register("title")} type="text" placeholder="Title" />
          <input
            {...register("description")}
            type="text"
            placeholder="Description"
          ></input>
          {/* make a multiple selection option for journalists from a drop down */}
          <input type="text" placeholder="Journalist" />
          <button className="mt-auto ml-auto" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

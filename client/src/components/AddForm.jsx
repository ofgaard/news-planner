import { FormButton } from "./UI/FormButton";

export const AddForm = () => {
  return (
    <div className="fixed z-50 inset-0 flex justify-center mt-28">
      <div className="border drop-shadow-xl max-h-60 w-96 py-4 px-3 rounded-md flex flex-col bg-white overflow-y-auto">
        <form action="" id="add_story" className="flex flex-col gap-2 flex-1">
          <input type="text" placeholder="Title" />
          <input type="text" placeholder="Description" />
          <input type="search" placeholder="Journalist" />
          <input type="date" className="text-xs" />
          <div className="flex gap-1 flex-wrap">
            <p className="text-xs bg-neutral-200 bg-opacity-35 border rounded-md px-1.5">
              Oliver Fruergaard
            </p>
            <p className="text-xs bg-neutral-200 bg-opacity-35 border rounded-md px-1.5">
              Jacob Friberg
            </p>
          </div>
          <div className="flex ml-auto mt-auto gap-2">
            <FormButton
              text={"Cancel"}
              formId={"add_story"}
              color={"bg-neutral-200"}
            ></FormButton>
            <FormButton
              text={"Submit"}
              formId={"add_story"}
              color={"bg-lime-700"}
              textColor={"text-white"}
            ></FormButton>
          </div>
        </form>
      </div>
    </div>
  );
};
